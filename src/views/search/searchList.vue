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
                    <el-pagination class="qz-pagination"  @size-change="sizeChange" :page-sizes="[20, 40, 80, 150]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="total" @current-change="changePage">
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
      typeList: [{
        id: '1',
        name: '新闻'
      },{
        id: '2',
        name: '专题'
      }],
      todayNews: [],
      hotNews: [],
      total: 0,
      pageSize: 20,
      pageNumber: 1,
      activeId: this.$route.query.type || '1'
    }
  },
  computed: {
    newsId() {
      return this.$route.query.id
    },
    searchValue() {
      return this.$route.query.searchValue
    }
  },
  methods: {
    getNews(id) {
      let typeId = id
      if(typeId == ''){
        typeId = this.activeId
      }
      this.$ajax
        .get(this.$api.getSearch, {
          type: typeId,
          value: this.searchValue,
          'page.pn': this.pageNumber,
          'page.size': this.pageSize
        })
        .then(res => {
          if (res.data && res.data.content) {
            let data = res.data.content
            if(this.activeId == '1'){
              this.newsList = data.news.rows
              this.total = data.news.total
            } else{
              this.newsList = data.specials.rows
              this.total = data.specials.total
            }
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
      let routeData = this.$router.resolve({path: 'newsDetail', query: { id: id } })
      if(this.activeId == '2'){
        routeData = this.$router.resolve({path: 'seminarDetail', query: { id: id } })
      }
      window.open(routeData.href, '_blank')
    },
    changePage(val) {
      this.pageNumber = val
      this.getNews(this.activeId)
    },
    sizeChange(val) {
      this.pageSize = val
      this.pageNumber = 1
      this.getNews(this.activeId)
    }
  },
  mounted() {
    this.getNews()
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
