<template>
  <div class="peopleList">
    <el-row class="list">
      <el-col :span="16">
        <el-row>
            <el-col :span="8">
          <img :src="`${$api.IMG_URL}${channel.image}`">
        </el-col>
        <el-col :span="4">
          <h1>{{channel.name}}</h1>
          <h2>收听人数：0</h2>
        </el-col>
        </el-row>
        <el-row>
          <el-col>介绍：{{channel.introduce}}</el-col>
        </el-row>
        <el-row>
          <el-col>
             <Card name="播放列表" more="">
            hehe
          </Card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
         <Card name="主持人" more="">
           hehe
        </Card>
      </el-col>
    </el-row>
  <el-row>
    <el-col>
      <Card name="活动公告" more="">
           hehe
        </Card>
    </el-col>
  </el-row>
  </div>
</template>

<script>
export default {
  name: 'newsDetail',
  components: {},
  data() {
    return {
      channel: {}
    }
  },
  computed: {
    id(){
      return this.$route.query.id
    }
  },
  methods: {
    initData() {
      this.$ajax.get(this.$api.getChannel, {
        channelId: '2'
      }).then(res => {
        if (res.data && res.data.content) {
          this.channel = res.data.content
        }
      })
    },
    goBack() {
      this.$router.go(-1)
    },
    openDetail(id) {
      this.$router.push({ path: 'newsDetail', query: { id: id } })
    }
  },
  mounted() {
    this.initData()
  }
}
</script>
<style lang="less" scoped>
.peopleList {
  .list {
    .cover {
      width: 380 * @base;
      height: 250 * @base;
      margin: 8 * @base 0;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
        left: 50%;
        position: relative;
        transform: translateX(-50%);
      }
    }
    .name {
      padding: 14px;
      text-align: center;
    }
  }
}
</style>
