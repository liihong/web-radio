<template>
    <div class="newsList">
      <el-row>
        <NewsCard name="通知公告" :newsList="noticeList"></NewsCard>
      </el-row>
        <el-row>
            <el-col :span="12" @click="ChangeType(item.id)" v-for="(item,i) in typeList" :key="i">
               <NewsCard :name="item.name" :newsList="newsList[item.id]" @moreClick="moreClick(item.id)"></NewsCard>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import NewsCard from '@/components/NewsCard'
export default {
  name: 'newsDetail',
  components: {
      NewsCard
  },
  data() {
    return {
      newsList: [],
      typeList: [],
      noticeList: [],
      todayNews: [],
      hotNews: []
    }
  },
  computed: {
    newsId() {
      return this.$route.query.id
    }
  },
  methods: {
    getNews(id) {
        let typeid = id
        if(typeid == ''){
            typeid = this.newsId
        }
      this.$ajax
        .get(this.$api.getNews)
        .then(res => {
          if (res.data && res.data.content) {
            let data = res.data.content
            this.newsList = data
            this.typeList = data.newTypes
          }
        })
        this.$ajax
        .get(this.$api.getNotices)
        .then(res => {
          if (res.data && res.data.content) {
            let data = res.data.content
            this.noticeList = data.notices
          }
        })
    },
    openDetail(id) {
      this.$router.push({ path: 'newsDetail', query: { id: id } })
    },
    moreClick(id) {
      this.$router.push({path: '/newsList', query: { id }})
    },
    changePage(val) {
      this.pageNumber = val
      this.getNews()
    }
  },
  mounted() {
    this.getNews()
  }
}
</script>
<style lang="less" scoped>
.newsList {
}
</style>
