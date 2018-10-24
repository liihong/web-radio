<template>
  <div   class="pieEcharts">
    <!-- <div class="fullscreen"><img src="../../../static/imgs/fullscreen.svg" /></div> -->
    <div :class="{'fullScreen': isFullScreen}" class="echarts" :id="randomId"></div>
  </div>
</template>

<script>
export default {
  name: 'relationshipMap',
  props: ['pointData', 'linksData', 'categories'],
  data() {
    return {
      randomId: 'relation-dom' + Date.now() + Math.random(),
      isFullScreen: false,
      myEcharts: null,
      option: {
        // title: { text: '关系图谱' },
        legend: {
          data: this.categories
        },
        toolbox: {
          //显示策略，可选为：true（显示） | false（隐藏），默认值为false
          show: true,
          //启用功能，目前支持feature，工具箱自定义功能回调处理
          feature: {
            myTool2: {
              show: true,
              // title: '全屏显示',
              icon: 'image://../../../static/imgs/fullscreen.svg',
              onclick: function() {
                console.log(this.isFullScreen)
                this.isFullScreen = !this.isFullScreen
              }
            }
          }
        },
        tooltip: {
          formatter: function(x) {
            let text = ''
            if (
              x.data.category == '外方人物' ||
              x.data.category == '中方人物'
            ) {
              text =
                '所属国家：' +
                x.data.properties.country +
                '<br />' +
                '所属机构：' +
                x.data.properties.org +
                '<br />' +
                '所在职位：' +
                x.data.properties.pos
            } else {
              text = x.data.value
            }
            return text
          }
        },
        series: [
          {
            type: 'graph',
            layout: 'force',
            symbolSize: 50,
            roam: true,
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              normal: {
                textStyle: {
                  fontSize: 20
                }
              }
            },
            force: {
              repulsion: 2500,
              edgeLength: [10, 50]
            },
            draggable: true,
            // itemStyle: {
            //   normal: {
            //     color: '#4b565b'
            //   }
            // },
            lineStyle: {
              normal: {
                width: 2,
                color: '#4b565b'
              }
            },
            edgeLabel: {
              normal: {
                show: true,
                formatter: function(x) {
                  return x.data.name
                }
              }
            },
            label: {
              normal: {
                show: true,
                textStyle: {},
                formatter: function(x) {
                  return x.data.value
                }
              }
            },
            categories: this.categories,
            data: this.pointData,
            links: this.linksData
          }
        ]
      }
    }
  },
  computed: {
    getDataList() {
      const that = this
      if (this.option.height == '280px') {
        that.radius = ['40%', '58%']
        that.center = ['50%', '52%']
        that.titlePositon = '43%'
      } else if (this.option.height == '350px') {
        that.radius = ['35%', '50%']
        that.center = ['50%', '60%']
        that.titlePositon = '52%'
      } else if (this.option.height == '380px') {
        that.radius = ['30%', '45%']
        that.center = ['50%', '60%']
      } else if (this.option.height == '550px') {
        that.radius = ['20%', '30%']
        that.center = ['50%', '60%']
      }
      this.linksData = this.linksData
      return this.pointData
    },
    isShow(){
      if(this.pointData.length > 0) {
        return true
      }else {
        return false
      }
    }
  },
  methods: {
    initEcharts() {
      let $echartsDOM = document.getElementById(this.randomId)

      let myEcharts = this.$echarts.init($echartsDOM)
      this.myEcharts = myEcharts

      // if (this.option && typeof this.option === 'object') {
        myEcharts.clear()
        myEcharts.setOption({}, true)
        myEcharts.setOption(this.option, true)
      // }
    }
  },
  mounted() {
    const that = this

    that.initEcharts()

    window.addEventListener(
      'resize',
      () =>
        setTimeout(function() {
          that.myEcharts.resize()
        }, 400),
      false
    )
  },
  watch: {
    getDataList() {
      const that = this
      that.$nextTick(function() {
        this.initEcharts()
        setTimeout(function() {
          that.myEcharts.resize()
        }, 400)
      })
    },
    isFullScreen() {
      const that = this
       that.$nextTick(function() {
        this.initEcharts()
        setTimeout(function() {
          that.myEcharts.resize()
        }, 400)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.pieEcharts {
  // position: relative;
  height: 500 * @base;
  .fullscreen {
    z-index: 99;
    right: 30 * @base;
    position: absolute;
  }
}
.wrap-container,
.echarts {
  height: 500 * @base;
  margin-right: 15px;
  background: #ffffff;
}
.fullscreen {
  position: absolute;
  top: 0;
    right: 0;
    left: 0;
  height: 700 * @base;
  margin-right: 15px;
  background: #ffffff;
}
</style>
