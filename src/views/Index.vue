<template>
  <div class="index" :style="styleObj">
    <Header class="header"></Header>
    <div class="main">
      <section class="content-container">
        <Breadcrumb v-if="$route.path !== '/index'"></Breadcrumb>
        <router-view class="router-view"></router-view>
      </section>
    </div>
    <WebFooter></WebFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import WebFooter from '@/components/WebFooter.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
export default {
  name: 'home',
  components: {
    Header,
    WebFooter,
    Breadcrumb
  },
  data() {
    return {
      styleObj:{
        backgroundImage:'url(http://xcdt.cn/admin/common/img/'
      }
    }
  },
  mounted(){
    this.initData()
  },
  methods: {
    initData() {
      this.$ajax
        .get(this.$api.getBackground)
        .then(res => {
          if (res.data.status === 200) {
            if(res.data.content !=''){
              let arr = res.data.content.style.split(';')
              arr.map(item=>{
                let obj = item.split(':')
                this.styleObj[obj[0]] = obj[1]
              })
              
              this.styleObj.backgroundImage = 'url(http://xcdt.cn/admin/common/img/' + res.data.content.image + ')'
              
            }
          } else {
            console.log('背景图!')
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style lang="less" scoped>
.index {
  width: 100%;
  height: 100%;
  background-size: cover;
  .main {
    width: 100%;
    // background: #F6F8FB;
    .router-view {
      height: 100%;
      margin: 0 auto;
      max-width: @maxWidth;
    }
  }
}
// .back{
//    padding-top:50vh;
// }
</style>
