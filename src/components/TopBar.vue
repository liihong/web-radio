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
  <div class="header">
    <h1>登录|请注册</h1>
  </div>
</template>

<script>
export default {
  name: 'Topbar',
  components: {},
  props: {
    title: {
      type: String,
      default: '许昌电台'
    },
    userName: {
      type: String
    },
    userAvatar: {
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
        { id: '1', name: '全球合作伙伴' },
        { id: '2', name: '社交媒体' }
      ],
      menuData: this.$router.options.routes[0].children,
      activeMenu: '/index'
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
    // this.searchValue = this.$store.state.searchValue
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
      this.isSubMenuShow = false
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
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 26px;
  height: 40px;
  line-height: 40px;
  color: #ffffff;
  background-color: #2f3b4e;
  h1 {
    margin-left: 8px;
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #ffffff;
  }
}
</style>
