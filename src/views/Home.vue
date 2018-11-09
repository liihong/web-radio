<template>
  <div class="home">
    <!--广告位1-->
    <Advertising :src="Advertising1"/>
    <div class="row1">
      <h1>
        <a href="http://china.cnr.cn/news/20181101/t20181101_524401148.shtml" target="_blank">
          <font style="FONT-SIZE: 24pt">习近平主持政治局会议 分析研究当前经济形势和经济工作</font>
        </a>
      </h1>
      <div class="subHeadline">
        <strong style="font-weight: normal">
          <a target="_blank" href="http://news.cnr.cn/native/gd/20181031/t20181031_524400973.shtml">加大改革开放力度，抓住主要矛盾</a>
          <a target="_blank" href="http://news.cnr.cn/native/gd/20181031/t20181031_524400973.shtml">确保经济平稳运行</a>
          <a target="_blank" href="http://news.cnr.cn/native/gd/20181101/t20181101_524401319.shtml">三个月两度研判经济形势，政治局会议给出哪些判断？</a>
        </strong>
      </div>
      <span class="toutiao"></span>

    </div>
    <div class="line1">
      <slider class="slider" :slides="slides" :inv="invTime" v-if="slides.length > 0"></slider>
      <div class="newsTab">
        <div class="newsTitle">
          <span>许昌新闻</span>
        </div>
      </div>
    </div>
    <div class="line2">
      <NewsCard  name="要闻推荐" class="block1"></NewsCard>
      <div class="block2">在线收听</div>
    </div>
    <Advertising :src="Advertising2"/>
    <div class="line2">
      <NewsCard name="电台活动" class="block1"></NewsCard>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/Slider'
import NewsCard from '@/components/NewsCard'
export default {
  name: 'home',
  components: {
    Slider,
    NewsCard
  },
  data() {
    return {
      Advertising1: require('../assets/imgs/20180719155833_1563.png'),
      Advertising2: require('../assets/imgs/AD0IlKYEEAIYACCKkvK-BSjGkev7AzDoBTh4.jpg'),
      topNewsTitle: '近平主持政治局会议 分析研究当前经济形势和经济工作',
      topNewsDesc: [
        '加大改革开放力度，抓住主要矛盾',
        '确保经济平稳运行',
        '三个月两度研判经济形势，政治局会议给出哪些判断？'
      ],
      invTime: 2000,
      slides: {}
    }
  },
  mounted() {
    this.sliderlist()
  },
  methods: {
    sliderlist() {
      //请求'sliderlist/data'接口
      this.$ajax.get('/sliderlist/data').then(({ data }) => {
        console.log(data)
        if (data.status === 0) {
          this.slides = data.list.datalist
        } else {
          alert('轮播图列表数据请求失败!')
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  position: relative;
  .row1 {
    margin-top: 10px;
    position: relative;
    background-color: #fafafa;
    border: 1px solid #dcdcdc;
    height: 99px;
    h1 {
      text-align: center;
      height: 36px;
      font-size: 38px;
      font-weight: 900;
      padding: 14px 0;
    }
    .subHeadline {
      height: 14px;
      text-align: center;
      padding: 7px 0;
    }
    span {
      position: absolute;
      left: -1px;
      top: -4px;
      background: url(../assets/imgs/index.png) no-repeat -68px 0;
      height: 104px;
      width: 102px;
    }
  }
  .line1 {
    margin-top: 10px;
    display: flex;
    .slider {
      flex: 0.5;
    }
    .newsTab {
      flex: 0.5;
      .newsTitle {
        width: 100%;
        line-height: 30px;
        text-align: center;
        border-top: 1px solid @themeColor;
        border-bottom: 1px solid @themeColor;
        background: #cccccc;
      }
    }
  }
  .line2{
    display: flex;
    .block1{
      flex: 0.7;
    }
    .block2{
      flex:0.3;
    }
  }
}
</style>
