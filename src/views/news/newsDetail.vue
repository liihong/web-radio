<template>
  <div>
    <Card class="newsDetail">
      <div class="news-title">
        <h1>{{newsDetail.title}}</h1>
        <div class="back pointer" @click="goBack"><span>返回</span></div>
      </div>
        <div class="infos">
          <span>来源：{{newsDetail.scoure}}</span>
          <!-- <span>作者：{{newsDetail.author}}</span> -->
          <span>发布时间：{{newsDetail.sendDate}}</span>
          <span>字号：<label class="pointer" @click="fontSize++">A+</label> <label  @click="fontSize--" class="pointer">A-</label></span>
        </div>
        <p :style="{ fontSize: fontSize + 'px' }" class="newsContent" v-html="newsDetail.content"></p>
        <div class="share"></div>
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
      newsDetail: {},
      fontSize: 14
    }
  },
  computed:{
    newsId() {
      return this.$route.query.id
    }
  },
  methods: {
    getNewsDetail() {
      this.$ajax.get(this.$api.getNewsDetail, {
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
<style lang="less">
.newsDetail{
  padding:36*@base 30*@base;
  .news-title{
    display: flex;
    h1{
      flex:1;
      font-weight: 900;
      font-size: 26*@base;
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
  .newsContent{
    overflow: hidden;
    color: rgba(47,59,78,0.87);
    line-height: 38*@base;
    margin-top:13*@base;
    padding-top:20*@base;
    border-top:2px solid #D8DCE1;
    img{
      width: 100%;
    }
  }
    
}

</style>
