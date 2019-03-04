<template>
    <div class="newsList">
        <div class="right">
           <NewsCard name="相关新闻" :newsList="newsList"></NewsCard>
           <NewsCard name="相关专题" v-if="specialsList.length>0" :newsList="specialsList"></NewsCard>
            <!-- <el-card class="list">
                <div class="info pointer" @click="openDetail(item.id)" v-for="(item,i) in newsList" :key="i" :news="item">
                    <i class="circle"></i>
                    <span class="title">{{item.title}}</span>
                    <span class="date">{{item.sendDate}}</span>
                </div>
                <div class="noData" v-show="total == 0">暂无数据</div>
                <div class="pagination">
                    <el-pagination class="qz-pagination" :page-sizes="[20, 40, 80, 150]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="total" @current-change="changePage">
                    </el-pagination>
                </div>
            </el-card> -->
        </div>
    </div>
</template>

<script>
import NewsCard from '@/components/NewsCard'
export default {
  name: 'search',
  components: {
    NewsCard
  },
  data() {
    return {
      newsList: [],
      typeList: [],
      todayNews: [],
      specialsList: [],
      hotNews: [],
      total: 0,
      pageSize: 20,
      pageNumber: 1,
      activeId: ''
    }
  },
  computed: {
    searchValue() {
      return this.$route.query.searchValue
    }
  },
  methods: {
    getNews(id) {
        let typeid = id
        if(typeid == ''){
            typeid = this.newsId
        }
   
      this.$ajax
        .get(this.$api.getSearch, {
          value: this.searchValue
        })
        .then(res => {
          if (res.data && res.data.content) {
            let data = res.data.content
            this.newsList = data.news
            this.specialsList = data.specials
            this.total = data.news.total
          }
        })
    },
    
    ChangeType(id){
      this.activeId = id
      this.getNews(id)
    },
    goBack() {
      this.$router.go(-1)
    },
    openDetail(id) {
      this.$router.push({ path: 'newsDetail', query: { id: id } })
    },
    changePage(val) {
      this.pageNumber = val
      this.getNews(this.activeId)
    }
  },
  mounted() {
    this.activeId = this.$route.query.id
    this.getNews(this.activeId)
  }
}
</script>
<style lang="less" scoped>
.newsList {
  .right {
    margin-left: 10 * @base;
    .list {
      .info {
        line-height: 36 * @base;
        .circle {
          display: inline-block;
          border-radius: 50%;
          width: 8 * @base;
          height: 8 * @base;
          background: @themeColor;
        }
        .title {
          margin-left: 15 * @base;
        }
        .date {
          float: right;
        }
      }
    }
  }
}
</style>
