<template>
    <div class="peopleList">
        <el-row class="list"  :gutter="20">
            <el-col :span="8" v-for="(item,index) in videos" :key="index">
                <div>
                     <div class="cover">
                     <img v-if="$util.isNotEmpty(item.pImage)" :src="`${$api.IMG_URL}${item.pImage}`">
                     <img v-else src="../../assets/imgs/unknown.svg">
                     </div>
                    <div class="name">
                      <span>{{item.title}}</span>
                      <h3 class="date">{{item.sendDate}}</h3>
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
    }
  },
  computed: {
  },
  methods: {
    getList() {
      this.$ajax
        .get(this.$api.getVideos)
        .then(res => {
          if (res.data && res.data.content) {
            this.videos = res.data.content.videos
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
    this.getList()
  }
}
</script>
<style lang="less" scoped>
.peopleList {
  .list{
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
    .name{
      padding: 14px;
      text-align: center;
      .date{
        color: #747070;
      }
    }
  }
}
</style>
