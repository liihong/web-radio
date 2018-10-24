<template>
  <div class="home">
     <qzHeader class="header"></qzHeader>
    <div class="main">
      <section class="content-container">
          <qzBreadcrumb v-if="$route.path !== '/'"></qzBreadcrumb>
         <router-view class="router-view"></router-view>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import qzHeader from '@/components/qz-header.vue'
import qzBreadcrumb from '@/components/qz-breadcrumb.vue'
export default {
  name: 'home',
  components: {
    qzHeader,
    qzBreadcrumb
  }
}
</script>
<style lang="less" scoped>
  .home{
    width: 100%;
    height:100%;
  .main {
    width: 100%;
    height:100%;
    background: #F6F8FB;
    padding-bottom: 100*@base;
    .router-view {
      height: 100%;
      margin:0 auto;
      max-width: @maxWidth;
      overflow-y: auto;
    }
  }
}
</style>
