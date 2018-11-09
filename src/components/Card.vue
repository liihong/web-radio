<template>
  <div class="card">
    <div class="title">
      <div class="name">
        <span>{{name}}</span>
      </div>
      <div class="more">{{more}}</div>
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
  height: auto;
  min-height: 70 * @base;
  .title {
    display: flex;
    line-height: 32px;
    border-bottom: 0.5px solid #cccccc;
    .name {
      flex: 0.9;
      span {
        display: inline-block;
        color: @themeColor;
        font-size: @18FontSize;
        border-bottom: 2px solid @themeColor;
      }
    }
    .more {
      flex: 0.1;
    }
  }
}
</style>
