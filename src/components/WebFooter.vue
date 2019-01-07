
<template>
    <div class="footer">
        <div class="container">
            <div class="footer_nav hidden-phone">
                <a href="http://www.xcdt.cn/" target="_blank"> 关于我们 </a>│
                <a href="http://henan.sina.com.cn/" target="_blank"> 新浪河南</a> │
                <a href="http://www.xuchangbbs.com/" target="_blank">许昌论坛 </a>│
                <a href="http://www.xuchang.gov.cn/" target="_blank">许昌市人民政府</a> │
                <a href="http://www.21xc.com/" target="_blank">许昌网</a> |
                <a href="http://www.zynews.com/" target="_blank">中原网</a> |
                <a href="http://xuchang.focus.cn/" target="_blank">搜狐焦点许昌站</a> |
                <a href="http://www.ha.xinhuanet.com/" target="_blank">新华网河南频道</a> |
                <a href="http://yztvw.com/index.html" target="_blank">禹州新闻网</a> |
                <a href="http://hn.cnr.cn/" target="_blank">央广网河南分网</a> |
                <a href="http://www.cnr.cn/" target="_blank">央广网</a>|
                <a href="http://www.fctvw.com/" target="_blank">方城电视台</a>
            </div>
            <div style="text-align:center;"> 主办单位：许昌人民广播电台
                <span class="hidden-phone">版权所有：许昌人民广播电台<br>
                    <h1>电子邮箱：xcgbw2011@163.com</h1>
                    <h1>电话：0374-5055866</h1>
                    <h1>通讯地址：河南省许昌市八一路东段广电大厦 邮政编码：461000</h1>
                    <h1>互联网视听节目服务（AVSP）：豫网备2014001号</h1>
                    <br>
                    <a target="_blank">ICP备案许可证号：豫ICP备11032567号</a>
                    <!-- <a target="_blank">法律顾问：河南许都律师事务所</a> -->
                    <br>
                    <h1> 网站不良信息举报电话：0374-5055866</h1>
                    <h1> 举报邮箱：xcgbw2011@163.com</h1>
                    <br>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'WebFooter',
  components: {},
  props: {},
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="less" scoped>
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
    font-size: 16px;
    color: #ffffff;
  }
  .container{
      .footer_nav{
          border-bottom: 1px dotted #cccccc;
      }
  }
}
</style>
