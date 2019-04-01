<!--公用组件：面包屑
   /**
   * qz-breadcrumb
   * @module components/qz-breadcrumb.vue
   * @desc 面包屑
   * @author lihong
   * @date 2018年08月13日16:45:37
   * @example
   *  <qzBreadcrumb></qzBreadcrumb>
   */
-->
<template>
  <div class="breadcrumb">
      <span v-if="item.name != '首页'" v-for="(item,index) in $route.matched" :key="item.path">
        {{item.name }}
        <i v-if="index !== $route.matched.length-1" class="el-icon-arrow-right"></i>
      </span>
  </div>
</template>

<script>
  export default {
    name: 'qz-breadcrumb',
    components: {
    },
    props: {},
    data() {
      return {
      }
    },
    mounted () {
    },
    methods: {
    }
  }
</script>
<style lang="less" scoped>
  .breadcrumb{
    display: flex;
    justify-content: flex-start;
    max-width: @maxWidth;
    margin: 0 auto;
    color: rgba(39,52,75,0.60);
    span{
      padding: 15*@base 20*@base;
    }
  }
</style>
