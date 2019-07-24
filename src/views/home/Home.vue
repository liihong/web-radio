<template>
  <div class="home">
    <!--广告位1-->
    <!-- <div v-html="Advertising1"></div> -->
    <div class="row1" v-html="topNews">
      <!-- <h1>
        <router-link :to="{ path: 'newsDetail', query: { id: topNews.id }}" target="_blank">
          {{topNews.title}}
        </router-link>
      </h1> -->
      <div class="subHeadline">
        <router-link target="_blank" :to="{ path: 'newsDetail', query: { id: item.id }}" v-for="(item, $index) in topNewsTwo" :key="$index">{{item.title}} &nbsp;&nbsp;&nbsp;</router-link>
      </div>
      <span class="toutiao"></span>
    </div>
    <div class="line1">
      <slider class="slider" :picList="slides" v-show="slides.length > 0"></slider>
      <div class="newsTab">
        <div class="newsTitle">
          <h1 class="pointer" @click="moreClick(newTypes[0])">{{topTitleName}}</h1>
          <NewsCard :newsList="newsList[19]" class="blockxc" @moreClick="moreClick(newTypes[0])"></NewsCard>
        </div>
      </div>
    </div>
    <div class="line2">
      <div class="block1">
        <NewsCard :newTypes="newTypes[1]" :newsList="newsList[20]" @moreClick="moreClick(newTypes[1])" :count="10"></NewsCard>
        <Advertising v-for="(item,i) in Advertising2" :key="i" :item="item" :height="150" />
        <NewsCard :newTypes="newTypes[2]" :newsList="newsList[21]" @moreClick="moreClick(newTypes[2])" :count="3"></NewsCard>
      </div>
      <div class="block2">
        <!-- <Card name="在线收听" more="">
          <onLineLive></onLineLive>
        </Card> -->
        <!-- <Card name="便民服务" more="">
          <services></services>
        </Card> -->
      </div>
    </div>
    <div class="line2">
      <NewsCard :newTypes="newTypes[3]" showImg :newsList="newsList[22]" class="block1" @moreClick="moreClick(newTypes[3])"></NewsCard>
      <NewsCard :newTypes="newTypes[4]" showImg :newsList="newsList[23]" class="block1" @moreClick="moreClick(newTypes[4])"></NewsCard>
      <NewsCard :newTypes="newTypes[5]" showImg :newsList="newsList[24]" class="block1" @moreClick="moreClick(newTypes[5])"></NewsCard>
    </div>
    <div class="line2">
      <Card name="主持人" @moreClick="openPeople()">
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
      Advertising1: '',
      Advertising2: [],
      topNews: {},
      topNewsTwo: [],
      invTime: 2000,
      slides: [],
      peopleList: [],
      newsList: {},
      newTypes: []
    }
  },
  computed: {
    topTitleName() {
      if (this.newTypes && this.newTypes.length > 0) {
        return this.newTypes[0]['name']
      } else {
        return '许昌新闻'
      }
    }
  },
  created() {
    this.sliderlist()
    this.newslist()
    this.getPeopleList()
    this.getTopNews()
  },
  methods: {
    moreClick(item) {
      this.$router.push({ path: '/newsList', query: { id: item.id } })
    },
    openPeople() {
      this.$router.push({ path: '/peopleList' })
    },
    sliderlist() {
      this.$ajax
        .get(this.$api.getHome)
        .then(res => {
          if (res.data.status === 200) {
            let data = res.data.content
            this.slides = data.shufflingImages
            // this.Advertising1 = data.topImages
            // this.Advertising2 = data.centerImages
          } else {
            console.log('轮播图列表数据请求失败!')
          }
        })
        .catch(err => {
          console.log(err)
        })
      this.$ajax
        .get(this.$api.getHTML, {
          type: 3
        })
        .then(res => {
          if (res.data.status === 200) {
            let data = res.data.content
            this.Advertising1 = data.html
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
          this.newTypes = res.data.content['newTypes']
        } else {
          console.log('新闻列表数据请求失败!')
        }
      })
    },
    getPeopleList() {
      this.$ajax.get(this.$api.getPeopleList).then(res => {
        if (res.data.status === 200) {
          this.peopleList = res.data.content.presenters
        } else {
          console.log('主持人数据获取失败!')
        }
      })
    },
    getTopNews() {
      this.$ajax
        .get(this.$api.getHTML, {
          type: 5
        })
        .then(res => {
          if (res.data.status === 200) {
            this.topNews = res.data.content.html
          } else {
            console.log('轮播图列表数据请求失败!')
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style lang="less" >
.home {
  position: relative;
  .row1 {
    cursor: pointer;
    p:first-child {
      font-size: 18px !important;
      span {
        font-size: 18px !important;
      }
    }
    margin-top: 10 * @base;
    position: relative;
    background-color: #fafafa;
    border: 1px solid #dcdcdc;
    h1 {
      text-align: center;
      height: 36px;
      font-size: 45 * @base;
      font-weight: 900;
      padding: 14px 0;
    }
    .subHeadline {
      height: 14 * @base;
      text-align: center;
      padding: 7px 0;
    }
  }
  .line1 {
    margin-top: 10 * @base;
    .newsTab {
      .newsTitle {
        h1 {
          width: 100%;
          line-height: 30px;
          text-align: center;
          border-top: 1px solid @themeColor;
          border-bottom: 1px solid @themeColor;
          background: #cccccc;
        }
        .blockxc {
          margin-left: 15 * @base;
          flex: 0.7;
        }
      }
    }
  }
  .line2 {
    .block1 {
      margin: 10 * @base;
    }
    .block2 {
      margin: 10 * @base;
    }
  }
}
</style>
