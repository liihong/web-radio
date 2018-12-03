<template>
  <div>
    <Card class="newsDetail">
      <div class="title">
        <h1>{{newsDetail.title}}</h1>
        <div class="back" @click="goBack"><span>返回</span></div>
      </div>
        <div class="infos">
          <span>来源：{{newsDetail.describes}}</span>
          <!-- <span>作者：{{newsDetail.author}}</span> -->
          <span>发布时间：{{newsDetail.createAt}}</span>
        </div>
        <p v-html="newsDetail.content"></p>
    </Card>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  name: 'newsDetail',
  components:{
    Card
  },
  data () {
    return {
      newsDetail: {}
    }
  },
  computed:{
    newsId() {
      return this.$route.query.id
    }
  },
  methods: {
    getNewsDetail() {
      this.$ajax.get(this.$api.getNewsDetail,{
        id: this.newsId
      }).then(res=>{
        this.newsDetail = res.data.content
      })
    },
    goBack() {
      this.$router.go(-1)
    }
  },
  mounted(){
    this.getNewsDetail()
  }
}
</script>
<style lang="less" scoped>
.newsDetail{
  padding:36*@base 30*@base;
  .title{
    display: flex;
    h1{
      flex:1;
      font-family: PingFangSC-Medium;
      font-size: 22*@base;
      text-align: center;
      color: #2F3B4E;
    }
    .back{
      flex:0.05;
      font-size: 13*@base;
      color: #3BA1ED;
    }
  }
  
  .infos{
    margin-top:25*@base;
    span:nth-child(n+2){
      margin-left: 38*@base;
    }
  }
  p{
    color: rgba(47,59,78,0.87);
    line-height: 38*@base;
    margin-top:13*@base;
    padding-top:20*@base;
    border-top:2px solid #D8DCE1;
  }
}
</style>
