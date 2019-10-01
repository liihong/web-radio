<template>
  <div class="peopleList">
    <el-row class="list" :gutter="20">
      <el-col :span="6" v-for="(item,index) in videos" :key="index">
        <div class="content pointer" @click="openDetail(item.id)" @mouseenter="enter(item)" @mouseleave="leave">
          <div class="cover" :class="{'active' : active == item.id }">
            <img v-if="$util.isNotEmpty(item.cfImage)" :src="`${$api.IMG_URL}${item.cfImage}`">
            <img v-else src="../../assets/imgs/unknown.svg">
          </div>
          <div class="name">
            <span>{{item.name}}</span>
            <h3 class="date">{{item.sendDate}}</h3>
          </div>
          <div v-show="active == item.id" class="btnList">
            <i class="iconfont icon-bofangqi-bofangxiaodianshi"></i>
          </div>
        </div>
      </el-col>
      <div class="noData" v-show="videos.length < 0">暂无数据</div>

    </el-row>
  </div>
</template>

<script>
export default {
  name: 'newsDetail',
  components: {},
  data() {
    return {
      videos: [],
      active: '1'
    }
  },
  computed: {},
  methods: {
    getList() {
      this.$ajax.get(this.$api.getVideos).then(res => {
        if (res.data && res.data.content) {
          this.videos = res.data.content.videos
        }
      })
    },
    enter(item) {
      this.active = item.id
    },
    leave() {
      console.log('leave')
      this.active = ''
    },
    openDetail(id) {
      this.$router.push({ path: 'videoDetail', query: { id: id } })
    }
  },
  mounted() {
    this.getList()
  }
}
</script>
<style lang="less" scoped>
.peopleList {
  padding:20px;
  .list {
    .content{
      position: relative;
      background: rgba(0, 0, 0, 0.1);
    }
    .cover {
      // width: 250 * @base;
      height: 160 * @base;
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
    .active {
      &:after {
        background: rgba(0, 0, 0, 0.2);
        content: "";
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    .btnList{
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
      i{
        font-size: 50*@base;
        color: #ffffff;
      }
    }
    .name {
      padding: 14px;
      text-align: center;
      .date {
        color: #747070;
      }
    }
  }
}
</style>
