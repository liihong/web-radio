<template>
  <div class="advertising">
    <img :src="src">
  </div>
</template>

<script>
export default {
  name: 'advertising',
  props: {
    src: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '1200'
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
.advertising{
  
}
</style>
