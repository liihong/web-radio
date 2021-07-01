<template>
  <div class="onLive">
    <div class="line">
        <img class="pointer" :class="{'activeImgage': activeLive == 3}" @click="changeChannels(3)" src="../../../assets/imgs/926.jpg">
        <img class="pointer" :class="{'activeImgage': activeLive == 4}" @click="changeChannels(4)" src="../../../assets/imgs/102.jpg">
        <img class="pointer" :class="{'activeImgage': activeLive == 5}" @click="changeChannels(5)" src="../../../assets/imgs/1287.jpg">
        <!-- <img class="pointer" :class="{'activeImgage': activeLive == 2}" @click="changeChannels(2)" src="../../../assets/imgs/927.jpg"> -->
    </div>
    <div class="jiemu">
      <ul>
        <li class="pointer" v-for="(item,index) in channels" :key="index">
          {{item.startTime}}-{{item.endTime}}
          {{item.name}}</li>
      </ul>
    </div>
    
    <audio class="audio" ref="audio" id="audio" autoplay="autoplay" width="100" controls="controls" height="100" :src="lmtAddress"></audio>
  </div>
</template>

<script>
export default {
  name: 'onLive',
  data() {
    return {
      audioData: {},
      channels: [],
      activeLive: 3,
      lmtAddress: ''
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
          this.channels = this.audioData.jiemus
          let pindao = res.data.content.channels
          this.lmtAddress = pindao[0]['lmtAddress']
        } else {
          console.log('获取频率节目列表失败!')
        }
      })
    },
    getJieMu() {
      this.$ajax.get(this.$api.getJieMuList,{
        channelId: this.activeLive
      }).then(res => {
        if (res.data.status === 200) {
          this.channels = res.data.content.jiemus
        } else {
          console.log('获取频率节目列表失败!')
        }
      })
    },
    changeChannels(id) {
      this.activeLive = id
      let pindao = this.audioData.channels.filter(item=>{
        return item.id == id
      })
      this.lmtAddress = pindao[0]['lmtAddress']
      this.$refs.audio.play()
      this.getJieMu()
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
        .activeImgage{
          border-bottom: 2*@base solid rgb(116, 17, 17);
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
