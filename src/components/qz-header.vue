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
    <div class="search">
      <img src="../assets/imgs/LOGO.svg">
      <div class="searchGroup">
        <div class="input">
          <input v-model="searchValue" />
          <div class="icon">
            <i class="iconfont icon-dingweiweizhi"></i>
          </div>
        </div>
        <div class="searchBtn pointer" @click="searchHandler">
          <div class="icon">
            <i class="iconfontWhite icon-sousuo"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="menu">
      <ul class="oneLevel">
        <li v-if="!item.hidden" class="oneLi" @click.stop="changeMenu(item, '1')" v-for="(item,index) in menuData" :key="index" :class="(activeMenu.indexOf(item.path) > -1 ? 'active' : '')">
          <span>{{item.name}}</span>
          <ul class="towLevel" v-if="isSubMenuShow">
            <li v-if="!el.hidden" v-for="(el,i) in item.children" :key="`list_${i}`" @click.stop="changeMenu(el, '2')">{{el.name}}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'

export default {
  name: 'qz-header',
  components: {
      TopBar
  },
  props: {
    logo: {
      type: String,
      default: '../../static/img/logo_White.png'
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
      searchValue: '',
      isSelectShow: false,
      isSubMenuShow: false,
      selectValue: '全球合作伙伴',
      selectList: [
        {id: '1', name: '全球合作伙伴'},
        {id: '2', name: '社交媒体'}
      ],
      menuData: this.$router.options.routes[0].children,
      activeMenu: '/index'
    }
  },
  mounted() {
    this.menuData = this.menuData.map(item => {
      let newObj = Object.assign(item, { isShowSubMenu: false })
      if (newObj.children) {
        newObj.children = newObj.children.filter(el => {
          return !el.hasOwnProperty('hidden')
        })
      }
      return newObj
    })
    this.searchValue = this.$store.state.searchValue
  },
  methods: {
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
      this.isSubMenuShow  = false
      this.isSelectShow = false
    },
    logout() {
      this.$router.push({ path: 'login' })
    },
    enter: function() {
      this.isShow = true
    },
    leave: function() {
      this.isShow = false
    },
    onDropDownListShow() {
      this.isSelectShow = !this.isSelectShow
    },
    onChangeSelectList(item) {
      this.selectValue = item.name
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
        input{
          width: 100 * @base;
          color: #2F3B4E;
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
          color: #5cb1f0;
          display: inline-block;
        }
      }
      .searchBtn {
        width: 100 * @base;
        text-align: center;
        background: #3ba1ed;
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
    background: #1991eb;
    height: 52 * @base;
    line-height: 52 * @base;
    font-size: 18 * @base;
    color: #ffffff;
    .oneLevel {
      max-width: @maxWidth;
      margin: 0 auto;
      display: flex;
    //   justify-content: center;
      height: auto;
      .oneLi {
        float: left;
        cursor: pointer;
        span {
          padding: 0 25 * @base;
        }
      }
      .active {
        background: #3ba1ed;
      }
    }
    .towLevel {
      color: rgba(0, 0, 0, 0.8);
      background: #ffffff;
      font-size: 15 * @base;
      position: absolute;
      z-index: 9;
      padding: 0 8 * @base;
      transition: height 3s;
      box-shadow: 0 1px 4px 0 #9dc0db;
      li:hover {
        color: #1991eb;
      }
    }
  }
}
</style>
