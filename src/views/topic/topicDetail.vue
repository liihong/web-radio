<template>
  <div class="topicDetail">
   
    <el-row class="list" :gutter="20">
      <el-col>
        <el-row>
          <el-col>
            <div class="zhuantiname">
                  <h1>{{topic.name}}</h1>
                </div>
          </el-col>
          <el-col>
            <Card name="专题摘要" more="">
              <div class="zhuantiContent pointer">
                <div class="cover">
                  <img v-if="$util.isNotEmpty(topic.cfImage)" :src="`${$api.IMG_URL}${topic.cfImage}`">
                  <img v-else src="../../assets/imgs/unknown.svg">
                </div>
                
                <div class="zhuantizhaiyao">
                  {{topic.zhaiyao}}
                </div>
              </div>
            </Card>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <Card name="相关新闻" more="">
              <el-row class="newslist" :gutter="20">
                <el-col v-for="(item,index) in topicList" :key="index">
                  <div class="newsContent pointer" @click="openDetail(item.id)">
                    <div class="name">
                      <span>{{item.title}}</span>
                      <span class="date">{{item.sendDate}}</span>
                    </div>
                    <div class="zhaiyao">
                      {{item.zhaiyao}}
                    </div>
                  </div>
                </el-col>
              </el-row>
            </Card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'topicDetail',
  components: {},
  data() {
    return {
      topicList: [],
      topic: {}
    }
  },
  computed: {
    topicId() {
      return this.$route.query.id
    }
  },
  methods: {
    initData() {
      this.$ajax
        .get(this.$api.getSpecial, {
          ztId: this.topicId
        })
        .then(res => {
          if (res.data && res.data.content) {
            this.topicList = res.data.content.specials
          }
        })
      this.$ajax
        .get(this.$api.getTopicDetail, {
          id: this.topicId
        })
        .then(res => {
          if (res.data && res.data.content) {
            this.topic = res.data.content.zhuanti
             document.title=this.topic.name
          }
        })
    },
    goBack() {
      this.$router.go(-1)
    },
    openDetail(id) {
      // this.$router.push({ path: 'topicDetail', query: { id: id } })
      let routeData = this.$router.resolve({path: 'topicDetail', query: { id: id } })
      window.open(routeData.href, '_blank')
    }
  },
  mounted() {
    this.initData()
  }
}
</script>
<style lang="less" scoped>
.topicDetail {
  padding:20px;
  .zhuantiname{
    text-align: center;
      h1{
        margin:20*@base;
        font-size: 42*@base;
        font-weight: 700;
      }
    }
  .zhuantiContent{
    display: flex;
    
    .zhuantizhaiyao{
      margin: 20*@base;
      text-indent:25px
    }
    .cover {
        width: 500 * @base;
        margin: 8 * @base 0;
        overflow: hidden;
        img {
          width: 100%;
          left: 50%;
          position: relative;
          transform: translateX(-50%);
        }
      }
  }
  .newslist {
    .newsContent {
      padding: 15 * @base;
      .name {
        margin-left: 20 * @base;
        width: 100%;
        .date{
          color:rgb(131, 130, 130);
          float: right;
        }
      }
      .zhaiyao {
        color: rgb(185, 184, 184);
      }
    }
  }
}
</style>
