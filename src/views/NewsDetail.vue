<template>
  <div>
    <qzCard class="newsDetail">
      <div class="title">
        <h1>{{newsDetail.title}}</h1>
        <div class="back" @click="goBack"><span>返回</span></div>
      </div>
        <div class="infos">
          <span>来源：-</span>
          <span>作者：-</span>
          <span>发布时间：-</span>
        </div>
        <p>{{newsDetail.content}}</p>
    </qzCard>
  </div>
</template>

<script>
import qzCard from '@/components/qz-card.vue'
export default {
  name: 'newsDetail',
  components:{
    qzCard
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
    //   this.$ajax.get(this.$api.news_detials,{
    //     id: this.newsId
    //   }).then(res=>{
    //     this.newsDetail = res.data
    //   })
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
