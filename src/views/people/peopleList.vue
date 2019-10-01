<template>
  <div class="peopleList">
    <el-row class="list" :gutter="20">
      <el-col :span="6" v-for="(item,index) in peopleList" :key="index">
        <div class="pointer" @click="openDetail(item.id)">
          <div class="cover">
            <img v-if="$util.isNotEmpty(item.pImage)" :src="`${$api.IMG_URL}${item.pImage}`">
            <img v-else src="../../assets/imgs/unknown.svg">
          </div>
          <div class="name">
            <span>{{item.name}}</span>
          </div>
        </div>
      </el-col>
      <div class="noData" v-show="peopleList.length < 0">暂无数据</div>

    </el-row>
  </div>
</template>

<script>
export default {
  name: 'newsDetail',
  components: {},
  data() {
    return {
      peopleList: []
    }
  },
  computed: {},
  methods: {
    getPeopleList() {
      this.$ajax.get(this.$api.getPeopleList).then(res => {
        if (res.data && res.data.content) {
          this.peopleList = res.data.content.presenters
        }
      })
    },
    goBack() {
      this.$router.go(-1)
    },
    openDetail(id) {
      this.$router.push({ path: 'peopleDetail', query: { id: id } })
    }
  },
  mounted() {
    this.getPeopleList()
  }
}
</script>
<style lang="less" scoped>
.peopleList {
  padding:20px;
  .list {
    .cover {
      width: 2.5rem;
      height: 2.5rem;
      margin: 0.08rem 0;
      border-radius: 50%;
      margin: 8 * @base 0;
      overflow: hidden;
      img {
        // height: 100%;
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
