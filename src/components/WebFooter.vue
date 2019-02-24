
<template>
    <div class="footer">
        <div class="container" v-html="content"></div>
    </div>
</template>

<script>
export default {
  name: 'WebFooter',
  components: {},
  props: {},
  data() {
    return {
        content: ''
    }
  },
  mounted() {
       this.$ajax
        .get(this.$api.getHTML,{
            type: 2
        })
        .then(res => {
          if (res.data.status === 200) {
              this.content = res.data.content.html
          }
        })
        .catch(err => {
          console.log(err)
        })
  },
  methods: {}
}
</script>
<style lang="less" >
.footer {
  display: flex;
  align-items: center;
  justify-content:center;
  padding-top: 30*@base;
  color: #ffffff;
  margin-top: 30*@base;
  background-color: #2f3b4e;
  a{
      color: #ffffff;
  }
  h1 {
    margin-left: 8px;
    color: #ffffff;
  }
  .container{
      font-size: 12*@base !important;
      .footer_nav{
          border-bottom: 1px dotted #cccccc;
      }
  }
}
</style>
