<template>
  <div>
    <el-row style="margin-top:20px;">
      <el-col>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>首页</el-breadcrumb-item>  
          <el-breadcrumb-item>专题</el-breadcrumb-item>  
          <el-breadcrumb-item>{{$route.query.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <Card class="newsDetail">
      <div class="news-title">
        <h1>{{newsDetail.title}}</h1>
        <div class="back pointer" @click="goBack">
          <span>返回</span>
        </div>
      </div>
      <div class="infos">
        <span>来源：{{newsDetail.scoure}}</span>
        <!-- <span>作者：{{newsDetail.author}}</span> -->
        <span>发布时间：{{newsDetail.sendDate}}</span>
      </div>
      <p class="newsContent" v-html="newsDetail.content"></p>
      <div class="share"></div>
    </Card>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  name: 'newsDetail',
  components: {
    Card
  },
  data() {
    return {
      newsDetail: {}
    }
  },
  computed: {
    newsId() {
      return this.$route.query.id
    }
  },
  methods: {
    getNewsDetail() {
      this.$ajax
        .get(this.$api.getNewsSpecial, {
          id: this.newsId
        })
        .then(res => {
          this.newsDetail = res.data.content
          document.title = this.newsDetail.title
        })
    },
    goBack() {
      this.$router.go(-1)
    }
  },
  mounted() {
    this.getNewsDetail()
  }
}
</script>
<style lang="less" scoped>
.newsDetail {
  padding: 36 * @base 30 * @base;
  .news-title {
    display: flex;
    h1 {
      flex: 1;
      font-weight: 900;
      font-size: 26 * @base;
      text-align: center;
      color: #2f3b4e;
    }
    .back {
      flex: 0.05;
      font-size: 13 * @base;
      color: #3ba1ed;
    }
  }

  .infos {
    margin-top: 25 * @base;
    span:nth-child(n + 2) {
      margin-left: 38 * @base;
    }
  }
  .newsContent {
    overflow: hidden;
    color: rgba(30, 33, 37, 0.979);
    line-height: 38 * @base;
    margin-top: 13 * @base;
    padding-top: 20 * @base;
    border-top: 2px solid #d8dce1;
    // img{
    //   width: 100%;
    // }
  }
}
</style>
