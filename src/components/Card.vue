<template>
  <div class="card">
    <div class="title" v-show="name">
      <div class="name">
        <span>{{name}}</span>
      </div>
      <div v-show="more!=''" class="more">{{more}}</div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    name: {
      type: String,
      default: ''
    },
    more: {
      type: String,
      default: '更多>>'
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
.card {
  width: 100%;
  height: auto;
  min-height: 70 * @base;
  .title {
    display: flex;
    line-height: 32*@base;
    border-bottom: 0.5*@base solid #cccccc;
    .name {
      flex: 0.7;
      span {
        display: inline-block;
        color: @themeColor;
        font-size: @20FontSize;
        font-weight: 900;
        border-bottom: 2*@base solid @themeColor;
      }
    }
    .more {
      flex: 0.3;
      text-align: right;
      margin-right: 15*@base;
    }
  }
}
</style>
