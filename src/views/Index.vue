<template>
  <div class="index">
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
  }
}
</script>
<style lang="less" scoped>
  .index{
    width: 100%;
    height:100%;
  .main {
    width: 100%;
    // background: #F6F8FB;
    .router-view {
      height: 100%;
      margin:0 auto;
      padding:0 15px;
      max-width: @maxWidth;
    }
  }
}
</style>
