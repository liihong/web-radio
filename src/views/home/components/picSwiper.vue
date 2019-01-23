<template>
  <div class="newsSwiper">
    <swiper  class="swiper-container"  v-if="picData.length>1" :options="newsOption" ref="newsSwiper">
      <swiperSlide v-for="(item,iIndex) in picData" :key="iIndex">
        <div class="swiper-content"  @click="openDetail(item.id)">
          <div class="cover">
            <img v-if="$util.isNotEmpty(item.pImage)" :src="`${$api.IMG_URL}${item.pImage}`">
            <img v-else src="../../../assets/imgs/people.svg">
          </div>
        </div>
      </swiperSlide>
    </swiper>
    <div class="swiper-button-prev flex">
      <i class="left-arrow"></i>
    </div>
    <div class="swiper-button-next flex">
      <i class="right-arrow"></i>
    </div>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: ['picData'],
  data() {
    return {
      newsOption: {
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        slidesPerView: '5', // 设置slider容器能够同时显示的slides数量(carousel模式)。
        scrollbar: '.swiper-scrollbar',
        initialSlide: 0, //初始索引
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        history: 'love',
        autoplay: {
          disableOnInteraction: false,
          delay: 3000
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted() {
  },
  methods: {
    openDetail(id) {
      this.$router.push({ path: '/peopleDetail', query: { id: id } })
    }
  }
}
</script>
<style lang="less" scoped>
.newsSwiper {
  width: 100%;
  position: relative;
  margin:20*@base;
  .swiper-button-next {
    opacity: 0.15;
    background: #000000;
    height: 60 * @base;
    .right-arrow {
      width: 10px;
      height: 10px;
      position: relative;
      left: -4px;
      border-top: 2px white solid;
      border-left: 2px transparent dashed;
      border-right: 2px white solid;
      border-bottom: 2px transparent dashed;
      transform: rotate(45deg);
    }
  }
  .swiper-button-prev {
    opacity: 0.15;
    background: #000000;
    height: 60 * @base;
    left: -30px;
    .left-arrow {
      width: 10px;
      height: 10px;
      position: relative;
      left: 6px;
      border-left: 2px white solid;
      border-top: 2px transparent dashed;
      border-bottom: 2px white solid;
      border-right: 2px transparent dashed;
      transform: rotate(45deg);
    }
  }
  .swiper-container {
    width: 100%;
    text-align: center;
    overflow: hidden;
  }

  .swiper-content {
    margin: 5px;
    background: #ffffff;
    img {
      height: 100%;
    //   width: 180 * @base;
      left: 30%;
      position: relative;
      transform: translateX(-50%);
    }
    .cover {
      height: 250*@base;
      overflow: hidden;
      position: relative;
    }
    .point {
      background: #cb0e0f;
      font-size: 20 * @base;
      color: #ffffff;
      position: relative;
      top: -15 * @base;
      padding: 5 * @base 10*@base;
      word-break: keep-all;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: center;
      min-width: 120 * @base;
    }
    .lists {
      padding: 20 * @base 10 * @base;
      text-align: left;
      .date {
        color: rgba(0, 0, 0, 0.6);
      }
      h1 {
        margin-top: 6 * @base;
        font-size: 16 * @base;
        color: rgba(0, 0, 0, 0.7);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        .from {
          color: #c60915;
        }
      }
    }
  }
}
</style>