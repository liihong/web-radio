<template>
  <div class="person-title">
      <h1>{{text}}</h1>
  </div>
</template>

<script>
export default {
  name: 'person-title',
  props:['text'],
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
.person-title{
  margin-top:50*@base;
    border-bottom: 1px solid rgba(0,0,0,0.20);
    h1{
        font-family: PingFangSC-Medium;
        font-size: 18*@base;
        color: #65A5EE;
        margin-bottom: 16*@base;
    }
}
</style>
