<template>
  <div class="onLive">
    <div class="line">
        <img @click="changeChannels(0)" src="../../../assets/imgs/926.jpg">
        <img @click="changeChannels(1)" src="../../../assets/imgs/102.jpg">
        <img @click="changeChannels(2)" src="../../../assets/imgs/1287.jpg">
        <img @click="changeChannels(3)" src="../../../assets/imgs/927.jpg">
    </div>
    <div class="jiemu">
      <ul>
        <li v-for="(item,index) in audioData.jiemus" :key="index">
          {{item.startTime}}-{{item.endTime}}
          {{item.name}}</li>
      </ul>
    </div>
    
    <audio class="audio" id="audio" autoplay="autoplay" width="100" controls="controls" height="100" :src="channels[activeLive].lmtAddress"></audio>
  </div>
</template>

<script>
export default {
  name: 'onLive',
  data() {
    return {
      audioData: {},
      channels: [],
      activeLive: 2
    }
  },
  mounted() {
      this.getRadio()
  },
  methods:{
    getRadio() {
      this.$ajax.get(this.$api.getChannelsAndFistList).then(res => {
        if (res.data.status === 200) {
          this.audioData = res.data.content
          this.channels = this.audioData.channels
        } else {
          console.log('获取频率节目列表失败!')
        }
      })
    },
    changeChannels(id) {
      this.activeLive = id
    }
  }
}
</script>
<style lang="less" scoped>
.onLive {
    .line{
        display: flex;
        img{
            width:95*@base;
            height: 95*@base;
        }
    }
    .jiemu{
      border: 1px solid #e0dfdf;
      height: 320*@base;
      overflow: auto;
      color:#817f7f;
      ul {
        li {
          padding: 5*@base 20*@base;
          height: 32*@base;
          line-height: 32*@base;
          border-bottom: 1px solid #cccccc;
        }
      }
    }
    .audio{
      width: 100%;
      margin-top: 15*@base;
    }
}
</style>
