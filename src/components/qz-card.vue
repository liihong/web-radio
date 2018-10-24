<template>
  <div class="qz-card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'qz-card',
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
.qz-card {
  height: auto;
  min-height: 70 * @base;
  background: #ffffff;
  border: 1px solid #ebeef5;
  box-shadow: 1px 1px 4px 0 rgba(187, 213, 233, 0.58);
}
</style>
