<template>
  <div class="peopleList">
    <el-row class="list">
      <el-col :span="16">
        <el-row>
          <el-col :span="10">
            <div class="cover">
              <img v-if="$util.isNotEmpty(channel.image)" :src="`${$api.IMG_URL}${channel.image}`">
              <img v-else src="../../assets/imgs/unknown.svg">
            </div>
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
            <Card class="playList" name="播放列表" more="">
              <el-row class="playListTitle">
                <el-col :span="8">
                  <span :class="{'activeDay': activeDay == '昨天'}">昨天</span>
                </el-col>
                <el-col :span="8">
                  <span :class="{'activeDay': activeDay == '今天'}">今天</span>
                </el-col>
                <el-col :span="8">
                  <span :class="{'activeDay': activeDay == '明天'}">明天</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col>
                  <el-row class="jmRow" v-for="(item,i) in jiemus" :key="i">
                    <el-col class="nameJm" :span="8">
                      <i class="iconfont icon-bofang1"></i>{{item.name}}</el-col>
                    <el-col :span="8">
                      <span class="time">{{item.startTime}}-{{item.endTime}}</span>
                    </el-col>
                    <el-col :span="8">主播： --</el-col>
                  </el-row>
                </el-col>
              </el-row>
            </Card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
        <Card name="主持人" more="">
        </Card>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <Card name="活动公告" more="">
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
      activeDay: '今天',
      channel: {},
      jiemus: [],
      notice: [],
      peopleList: [],
      id: this.$route.meta.id
    }
  },
  methods: {
    initData() {
      this.$ajax
        .get(this.$api.getChannel, {
          channelId: this.id
        })
        .then(res => {
          if (res.data && res.data.content) {
            this.channel = res.data.content
          }
        })
      this.$ajax
        .get(this.$api.getJieMuList, {
          channelId: this.id
        })
        .then(res => {
          if (res.data && res.data.content) {
            this.jiemus = res.data.content.jiemus
          }
        })
      this.$ajax
        .get(this.$api.getNoticeByChannelId, {
          channelId: this.id
        })
        .then(res => {
          if (res.data && res.data.content) {
            this.notice = res.data.content.notices.content
          }
        })

      this.$ajax
        .get(this.$api.getPeopleByChannelId, {
          channelId: this.id
        })
        .then(res => {
          if (res.data && res.data.content) {
            this.peopleList = res.data.content.presenters
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
  },
  watch:{
    $route(to){
      this.id = to.meta.id
      this.initData()
    }
  }
}
</script>
<style lang="less" scoped>
.peopleList {
  .list {
    h2 {
      margin-top: 20 * @base;
    }
    .playList {
      .playListTitle {
        text-align: center;
        margin-top: 10 * @base;
        height: 40 * @base;
        line-height: 0.4rem;
        background: #f2f2f5;
        span {
          display: block;
          height: 37 * @base;
          margin: 0 100 * @base;
        }
        .activeDay {
          border-bottom: 3 * @base solid red;
        }
      }
      .jmRow {
        text-align: center;
        color: #9b9b9b;
        // height: 50*@base;
        line-height: 50 * @base;
        border-bottom: 1 * @base solid #dbdee4;
        .nameJm {
          text-align: left;
          padding-left: 10 * @base;
          i {
            color: rgb(189, 187, 187);
            font-size: 20 * @base;
            padding-right: 8 * @base;
          }
        }
      }
    }
    .cover {
      width: 300 * @base;
      height: 200 * @base;
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
