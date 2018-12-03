<template>
    <div class="services">
        <ul class="gy-ul_bbx">
            <li>
                <a href="http://www.weizhang8.cn/" target="_blank">
                    <i class="iconfont icon-kejian"></i>
                    <p>违章查询</p>
                </a>
            </li>
            <li>
                <a href="http://www.8684.cn/" target="_blank">
                    <i class="iconfont icon-highspeed"></i>
                    <p>许昌公交</p>
                </a>
            </li>
            <li>
                <a href="http://www.zou114.com/gsgl" target="_blank">
                    <i class="iconfont icon-daba"></i>
                    <p>许昌高速</p>
                </a>
            </li>
            <li>
                <a href="http://www.trip8080.com/chepiao" target="_blank">
                    <i class="iconfont icon-kejian"></i>
                    <p>长途车票</p>
                </a>
            </li>
            <li>
                <a href="http://www.12306.cn/" target="_blank">
                    <i class="iconfont icon-huoche"></i>
                    <p>火车票</p>
                </a>
            </li>
            <li>
                <a href="http://flights.ctrip.com/" target="_blank">
                    <i class="iconfont icon-feiji"></i>
                    <p>航班动态</p>
                </a>
            </li>
            <li>
                <a href="http://you.ctrip.com/traffic/xuchang465/feiji.html" target="_blank">
                    <i class="iconfont icon-daba"></i>
                    <p>机场大巴</p>
                </a>
            </li>
            <li>
                <a href="http://www.12333sb.com/yanglao/henan/" target="_blank">
                    <i class="iconfont icon-yanglaobaoxian"></i>
                    <p>养老查询</p>
                </a>
            </li>
            <li>
                <a href="http://www.12333sb.com/yiliao/henan/" target="_blank">
                    <i class="iconfont icon-yibaochaxun"></i>
                    <p>医保查询</p>
                </a>
            </li>
            <li>
                <a href="http://www.xcgjj.com/" target="_blank">
                    <i class="iconfont icon-gongjijin"></i>
                    <p>公积金查询</p>
                </a>
            </li>
            <li>
                <a href="http://www.gov.cn/xinwen/2017-11/30/content_5243589.htm" target="_blank">
                    <i class="iconfont icon-fangjia"></i>
                    <p>放假查询</p>
                </a>
            </li>
            <li>
                <a href="http://www.95598.cn/person/index.shtml" target="_blank">
                    <i class="iconfont icon-dianfei"></i>
                    <p>电费查询</p>
                </a>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
  name: 'services'
}
</script>
<style lang="less" scoped>
.services {
   margin-left: 10*@base;
   margin-top:10*@base;
   background: #F6F8FB;
  .gy-ul_bbx {
    margin-top: 10px;
    margin: 0 auto;
    padding-left: 0;
    padding-bottom: 5px;
    text-align: center;
    li {
      height: 85px;
      width: 85px;
      overflow: hidden;
      line-height: 30px;
      border: 1px solid #ccc;
      float: left;
      display: flex;
      background: #F6F8FB;
      justify-content: center;
      align-items: center;
      i {
        font-size: 28 * @base;
        color: #d33737;
      }
    }
  }
}
</style>
