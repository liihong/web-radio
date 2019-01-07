<template>
  <div class="advertising">
    <a  target="_blank" class="pointer" :href="item.weblinkAddress"><img :src="`${$api.IMG_URL}${item.cfImage}`" width="100%"></a>
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
    item: {
      type: Object
    },
    width: {
      type: String,
      default: '1200'
    }
  },
  data() {
    return {}
  },
  mounted() {
  }
}
</script>
<style lang="less" scoped>
.advertising{
  
}
</style>
