<template>
    <div class="newsList">
        <div class="left">
            <el-card>
                <ul>
                    <li :class="{'actived': activeId== item.id}" class="pointer" @click="ChangeType(item.id)" v-for="(item,i) in typeList" :key="i">{{item.name}}</li>
                </ul>
            </el-card>
        </div>
        <div class="right">
            <el-card class="list">
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
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
  name: 'newsDetail',
  components: {},
  data() {
    return {
      newsList: [],
      typeList: [],
      todayNews: [],
      hotNews: [],
      total: 0,
      pageSize: 20,
      pageNumber: 1,
      activeId: ''
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
        .get(this.$api.getNewsByType, {
          id: typeid,
          pn: this.pageNumber,
          size: this.pageSize
        })
        .then(res => {
          if (res.data && res.data.content) {
            let data = res.data.content
            this.newsList = data.news.rows
            this.total = data.news.total
          }
        })
    },
    getNewsType() {
      this.$ajax.get(this.$api.getNewsType).then(res => {
        if (res.data && res.data.content) {
          this.typeList = res.data.content.types
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
    this.getNewsType()
  }
}
</script>
<style lang="less" scoped>
.newsList {
  display: flex;
  .left {
    flex: 0.3;
    ul {
      li {
        color: @themeColor;
        font-weight: 900;
        background-color: #f5f5f5;
        border-color: #ddd;
        margin-top: 10px;
        padding: 10px;
        text-align: center;
      }
      .actived{
            color: #ffffff;
            background: @themeColor;
      }
    }
  }
  .right {
    flex: 0.7;
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
