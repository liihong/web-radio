<template>
  <div class="home">
    <!--广告位1-->
    <Advertising :src="Advertising1" />
    <div class="row1">
      <h1>
        <router-link :to="{ path: 'newDetail', query: { id: topNews.id }}" target="_blank">
          {{topNews.title}}
        </router-link>
      </h1>
      <div class="subHeadline">
        <router-link target="_blank" :to="{ path: 'newDetail', query: { id: topNewsTwo.id }}" v-for="(item, $index) in topNewsTwo" :key="$index">{{item.title}} &nbsp;&nbsp;&nbsp;</router-link>
      </div>
      <span class="toutiao"></span>

    </div>
    <div class="line1">
      <slider class="slider" :picList="slides" v-show="slides.length > 0"></slider>
      <div class="newsTab">
        <div class="newsTitle">
          <h1>许昌新闻</h1>
          <NewsCard :newsList="newsList['guoji']" class="blockxc"></NewsCard>
        </div>
      </div>
    </div>
    <div class="line2">
      <div class="block1">
        <NewsCard name="要闻推荐" :newsList="newsList['jiaodian']"></NewsCard>
        <Advertising :src="Advertising2" />
        <NewsCard name="电台活动" :newsList="newsList['shengshi']"></NewsCard>
      </div>
      <div class="block2">
        <Card name="在线收听" more="">
          <onLineLive></onLineLive>
        </Card>
        <Card name="便民服务" more="">
          <services></services>
        </Card>
      </div>
    </div>
    <div class="line2">
      <NewsCard name="汽车" showImg :newsList="newsList['jiankang']" class="block1"></NewsCard>
      <NewsCard name="健康" showImg :newsList="newsList['lvyou']" class="block1"></NewsCard>
      <NewsCard name="旅游" showImg :newsList="newsList['qiche']" class="block1"></NewsCard>
    </div>
    <div class="line2">
      <Card name="主持人">
        <picSwiper :picData="peopleList"></picSwiper>
      </Card>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/Slider'
import NewsCard from '@/components/NewsCard'
import onLineLive from './components/onLineLive'
import picSwiper from './components/picSwiper'
import services from './components/services'
export default {
  name: 'home',
  components: {
    Slider,
    NewsCard,
    picSwiper,
    onLineLive,
    services
  },
  data() {
    return {
      Advertising1: require('@/assets/imgs/20180719155833_1563.png'),
      Advertising2: require('@/assets/imgs/AD0IlKYEEAIYACCKkvK-BSjGkev7AzDoBTh4.jpg'),
      topNews: {
        id: 't20181101_524401148',
        title: '近平主持政治局会议 分析研究当前经济形势和经济工作'
      },
      topNewsTwo: [
        { id: 't20181031_524400973', title: '加大改革开放力度，抓住主要矛盾' },
        { id: 't20181031_524400973', title: '确保经济平稳运行' },
        {
          id: 't20181101_524401319',
          title: '三个月两度研判经济形势，政治局会议给出哪些判断？'
        }
      ],
      invTime: 2000,
      slides: [],
      peopleList: [],
      newsList: {}
    }
  },
  mounted() {
    this.sliderlist()
    this.newslist()
    this.getPeopleList()
  },
  methods: {
    sliderlist() {
      this.$ajax
        .get(this.$api.getHome)
        .then(res => {
          if (res.data.status === 200) {
            this.slides = res.data.content.shufflingImages
          } else {
            console.log('轮播图列表数据请求失败!')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    newslist() {
      this.$ajax.get(this.$api.getNews).then(res => {
        if (res.data.status === 200) {
          this.newsList = res.data.content
        } else {
          console.log('新闻列表数据请求失败!')
        }
      })
    },
    getPeopleList() {
      this.$ajax.get(this.$api.getPeopleList).then(res => {
        console.log(res.data)
        if (res.data.status === 200) {
          this.peopleList = res.data.content.presenters
        } else {
          console.log('主持人数据获取失败!')
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
      background: url(../../assets/imgs/index.png) no-repeat -68px 0;
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
        h1 {
          width: 100%;
          line-height: 30px;
          text-align: center;
          border-top: 1px solid @themeColor;
          border-bottom: 1px solid @themeColor;
          background: #cccccc;
        }
      }
    }
  }
  .line2 {
    display: flex;
    .blockxc {
      margin-left: 15 * @base;
      flex: 0.7;
    }
    .block1 {
      flex: 0.7;
    }
    .block2 {
      flex: 0.3;
    }
  }
}
</style>
