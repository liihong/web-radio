<template>
  <div class="div_Scroll" ref="div_Scroll">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiperSlide v-for="(item,iIndex) in picList" :key="iIndex">
        <a  target="_blank" class="pointer" :href="item.weblinkAddress">
        <div class="swiper-content">
          <div class="cover">
             <img v-if="$util.isNotEmpty(item.cfImage)" :src="`${$api.IMG_URL}${item.cfImage}`">
                  <img v-else src="../assets/imgs/unknown.svg">
            </div>
          <div class="title">{{item.title}}</div>
        </div>
        </a>
      </swiperSlide>

    </swiper>
    <div class="swiper-pagination"></div>
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
  props: ['picList'],
  data() {
    return {
      swiperOption: {
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        slidesPerView: '1', // 设置slider容器能够同时显示的slides数量(carousel模式)。
        scrollbar: '.swiper-scrollbar',
        initialSlide: 0, //初始索引
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        history: 'love',
        autoplay: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="less">
.div_Scroll {
  overflow: hidden;
  position: relative;
  .swiper-button-next {
    opacity: 0.55;
    background: #000000;
    height: 60px;
    right: 0;
    .right-arrow {
      width: 10px;
      height: 10px;
      position: relative;
      left: -4px;
      border-top: 3px #ffffff solid;
      border-left: 3px transparent dashed;
      border-right: 3px #ffffff solid;
      border-bottom: 3px transparent dashed;
      transform: rotate(45deg);
    }
  }
  .swiper-button-prev {
    opacity: 0.55;
    background: #000000;
    height: 60px;
    left: 0;
    .left-arrow {
      width: 10px;
      height: 10px;
      position: relative;
      left: 6px;
      border-left: 3px white solid;
      border-top: 3px transparent dashed;
      border-bottom: 3px white solid;
      border-right: 3px transparent dashed;
      transform: rotate(45deg);
    }
  }
  .swiper-container {
    width: 100%;
  }
  .swiper-pagination {
    top: 355px;
    right: 10px;
  }
  .swiper-pagination-bullet-active {
    background: #ffffff;
  }
  .swiper-pagination-bullet {
    margin-left: 5px;
  }
  .swiper-content {
    position: relative;
    img {
      height: 100%;
      width: 100%;
      left: 50%;
      position: relative;
      transform: translateX(-50%);
    }
    .cover {
      // width: 580px;
      height: 380 * @base;
      overflow: hidden;
      position: relative;
    }
    .title {
      opacity: 0.77;
      width: 100%;
      text-align: center;
      height: 72 * @base;
      background: #450105;
      position: absolute;
      top: 330 * @base;
      font-size: 20 * @base;
      color: #ffffff;
    }
  }
}
</style>