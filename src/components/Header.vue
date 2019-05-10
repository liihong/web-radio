<!--公用组件：系统头部
   /**
   * qz-header
   * @module components/qz-header.vue
   * @desc 系统头部组件
   * @author lihong
   * @date 2018年08月13日13:37:38
   * @param {String} [logo]    - 标题logo
   * @param {String} [title] - 系统名称
   * @param {String} [userName]  - 登录用户名
   * @param {String} [userAvatar]  - 登录用户头像
   * @example
   *  <qzHeader :logo="logo" :title="title" :userName="userName" :userAvatar="userAvatar"></qzHeader>
   */
-->
<template>
  <div class="header" @click.stop="onHeadClick">
    <top-bar/>
    <!-- <div class="search">
       <img src="../assets/imgs/logo.png" height="100"> 
       <div class="searchGroup">
        <div class="input">
          <input v-model="searchValue"  @keyup.enter="enter" @keydown.down='change()' @keydown.up='up()' />
          <div class="icon">
            <i class="iconfont icon-dingweiweizhi"></i>
          </div>
        </div>
        <div class="searchBtn pointer" @click="searchHandler">
          <div class="icon">
            <svg width="16px" height="16px" viewBox="0 0 29 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <title>find</title>
              <desc>Created with Sketch.</desc>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="首页-copy" transform="translate(-365.000000, -483.000000)" fill="#FFFFFF" fill-rule="nonzero">
                  <g id="find" transform="translate(364.000000, 481.000000)">
                    <rect id="Rectangle-path" opacity="0" x="0" y="0" width="16" height="16"></rect>
                    <path d="M29.6231955,27.6877557 L22.5303404,20.6013603 C24.0608867,18.6523457 24.97342,16.1980097 24.97342,13.5310499 C24.97342,7.19019703 19.8161167,2.04993812 13.454254,2.04993812 C7.09235941,2.04993812 1.93499209,7.190229 1.93499209,13.5310499 C1.93499209,19.8718709 7.09235941,25.0121617 13.454254,25.0121617 C16.134197,25.0121617 18.600301,24.0998843 20.5572462,22.5700735 L27.6490779,29.6553497 C28.0481354,30.053096 28.6951847,30.053096 29.0942741,29.6553497 L29.6231955,29.1281551 C30.0222849,28.7304407 30.0222849,28.085502 29.6231955,27.6877557 Z M13.454254,22.2338215 C8.63189159,22.2338215 4.72254213,18.3374872 4.72254213,13.5310819 C4.72254213,8.72464469 8.63189159,4.82831041 13.454254,4.82831041 C18.2766165,4.82831041 22.185838,8.72467666 22.185838,13.5310819 C22.185838,18.3374872 18.2766165,22.2338215 13.454254,22.2338215 Z" id="Shape"></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div v-show="suggestions.length > 0" class="el-input-group__append">
          <ul class="vue-instant__suggestions">
            <li @click="selected(item)" :class="{'highlighted__custom':$index==index}" v-for="(item,$index) in suggestions" :key="$index">{{item.personName}}
              <span>{{item.birthPlace}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>-->
    <!-- <div class="menu">
      <ul class="oneLevel">
        <li v-if="!item.hidden" class="oneLi" @click.stop="changeMenu(item, '1')" v-for="(item,index) in menuData" :key="index" :class="(activeMenu.indexOf(item.path) > -1 ? 'active' : '')">
          <span>{{item.name}}</span>
          <ul class="towLevel" v-if="isSubMenuShow">
            <li v-if="!el.hidden" v-for="(el,i) in item.children" :key="`list_${i}`" @click.stop="changeMenu(el, '2')">{{el.name}}</li>
          </ul>
        </li>
      </ul>
    </div>  -->
    <swiper class="swiper-container" v-if="menuData.length>1" :options="newsOption" ref="newsSwiper">
      <swiperSlide class="menu" v-for="(item,iIndex) in menuData" :key="iIndex"  v-if="!item.hidden">
        <div class="swiper-content"  :class="(activeMenu == item.path ? 'active' : '')" @click.stop="changeMenu(item, '1')">
          <span class="oneLi">{{item.name}}</span>
        </div>
      </swiperSlide>
    </swiper>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'qz-header',
  components: {
    TopBar,
    swiper,
    swiperSlide
  },
  props: {
    logo: {
      type: String,
      default: '../../static/img/png.svg'
    },
    title: {
      type: String,
      default: 'XX系统'
    },
    userName: {
      type: String
    }
  },
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
      },
      searchValue: '',
      selectedObj: {},
      suggestions: [],
      index: '',
      isSelectShow: false,
      isSubMenuShow: false,
      // menuData: this.$router.options.routes[0].children,
      menuData: [],
      activeMenu: '/'
    }
  },
  mounted() {
    // this.menuData = this.menuData.map(item => {
    //   let newObj = Object.assign(item, { isShowSubMenu: false })
    //   if (newObj.children) {
    //     newObj.children = newObj.children.filter(el => {
    //       return !el.hasOwnProperty('hidden')
    //     })
    //   }
    //   return newObj
    // })
    this.initData()
    this.activeMenu = this.$route.path
  },
  methods: {
    initData(){
      this.$ajax
        .get(this.$api.getFrontMenus)
        .then(res => {
          if (res.data.status === 200) {
            this.menuData = res.data.content.frontMenus
          } else {
            console.log('获取菜单失败!')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleCommand(command) {
      this.$router.push({ path: command })
    },
    changeMenu(menu) {
      this.activeMenu = menu.path

      if (menu.children && menu.children.length > 0) {
        this.isSubMenuShow = !this.isSubMenuShow
      } else {
        this.isSubMenuShow = false
        this.$router.push({ path: menu.path })
      }
    },
    // 点击搜索
    searchHandler() {
      this.$store.commit('searchValue', this.searchValue)
      this.$router.push({ path: '/qqhblb' })
    },
    onHeadClick() {
      this.menuData.map(item => {
        return (item.isShowSubMenu = false)
      })
      this.isSubMenuShow = false
      this.isSelectShow = false
    },
    logout() {
      this.$router.push({ path: 'login' })
    },
    enter: function() {
      this.$router.push({
        path: '/peopleDetail',
        query: { id: this.selectedObj.id }
      })
      this.suggestions = []
    },
    onDropDownListShow() {
      this.isSelectShow = !this.isSelectShow
    },
    changed: function() {
      var that = this
      this.suggestions = []
      if (this.searchValue.length > 0) {
        this.$ajax
          .get(this.$api.selectPersonInfoList, {
            name: this.searchValue
          })
          .then(res => {
            if (res && res.data) {
              res.data.data.forEach(function(a) {
                that.suggestions.push(a)
              })
            }
          })
      }
    },
    //            按下键往下选择
    change: function() {
      this.index++
      this.selectedObj = this.suggestions[this.index] //输入框显示选择的内容
      this.searchValue = this.selectedObj.personName
      if (this.index == this.suggestions.length) this.index = -1 //当选到最后一个时索引变为-1
    },
    //            按上键往上选择
    up: function() {
      this.index--
      this.selectedObj = this.suggestions[this.index]
      this.searchValue = this.selectedObj.personName
      if (this.index == -1) this.index = this.suggestions.length - 1
    },
    selected: function(obj) {
      this.selectedObj = obj
      this.$router.push({ path: '/peopleDetail', query: { id: obj.id } })
      this.suggestions = []
    }
  },
  watch: {
    searchValue() {
      this.changed()
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  .search {
    background: #ffffff;
    height: 130 * @base;
    max-width: @maxWidth;
    margin: 0 auto;
    padding: 10 * @base 0 10 * @base 150 * @base;
    display: flex;
    align-items: center;
    .searchGroup {
      width: 640 * @base;
      height: 44 * @base;
      line-height: 44 * @base;
      margin-left: 50 * @base;
      border: 1px solid rgba(103, 119, 145, 0.58);
      border-radius: 1px;
      font-size: 15 * @base;
      color: #2f3b4e;
      display: flex;
      position: relative;
      .select {
        display: flex;
        padding-left: 16 * @base;
        border-right: 1px solid #a7b0bf;
        input {
          width: 100 * @base;
          color: #2f3b4e;
        }
        .icon {
          padding-left: 7 * @base;
          transform: scale(0.5);
        }
      }
      .input {
        flex: 1;
        input {
          height: 100%;
          width: 90%;
          padding-left: 10 * @base;
        }
        .icon {
          transform: scale(1.8);
          color: #7d0000;
          display: inline-block;
        }
      }
      .searchBtn {
        width: 100 * @base;
        text-align: center;
        background: #7d0000;
        border-radius: 2px;
        .icon {
          transform: scale(1.5);
        }
      }
    }
    .highSearch {
      font-size: 18 * @base;
      color: #2f5692;
      margin-left: 39 * @base;
    }
  }
  .menu {
    background: @themeColor;
    color: #ffffff;
    height: 80*@base;
    line-height: 0.8rem;
    text-align: center;
    .active {
      background: #7d0000;
    }
  }
}
</style>
