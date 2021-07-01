<template>
  <div class="peopleList">
    <el-row class="list"
            :gutter="20">
      <el-col :span="8"
              v-for="(item,index) in specialsList"
              :key="index">
        <div @click="openDetail(item.id)"
             class="pointer card">
          <div class="cover">
            <img v-if="$util.isNotEmpty(item.cfImage)"
                 :src="`${$api.IMG_URL}${item.cfImage}`">
            <img v-else
                 src="../../assets/imgs/unknown.svg">
          </div>
          <div class="name">
            <span>{{item.name}}</span>
            <h3 class="date">{{item.sendDate}}</h3>
          </div>
        </div>
      </el-col>
      <div class="noData"
           v-show="specialsList.length < 0">暂无数据</div>
    </el-row>
    <div style="text-align:center;margin:20px auto;"
         class="pagination">
      <el-pagination class="qz-pagination"
                     :page-size="18"
                     :page-sizes="[18, 36]"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="total"
                     @current-change="changePage">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newsDetail',
  components: {},
  data () {
    return {
      specialsList: [],
      baseList: [],
      total: 0
    }
  },
  computed: {
  },
  methods: {
    getList () {
      this.$ajax
        .get(this.$api.getTopic)
        .then(res => {
          if (res.data && res.data.content) {
            this.specialsList = res.data.content.zhuantis.slice(0, 18)
            this.baseList = res.data.content.zhuantis
            this.total = this.baseList.length
          }
        })
    },
    changePage (val) {
      this.specialsList = this.baseList.filter((_, i) => i >= (val - 1) * 18 && i < val * 18)

    },
    goBack () {
      this.$router.go(-1)
    },
    openDetail (id) {
      let routeData = this.$router.resolve({ path: 'seminarDetail', query: { id: id } })
      window.open(routeData.href, '_blank')
    }
  },
  mounted () {
    this.getList()
  }
}
</script>
<style lang="less" scoped>
.peopleList {
  padding: 20px;
  .list {
    .card {
      height: 270px;
      .cover {
        margin: 8 * @base 10 * @base;
        overflow: hidden;
        height: 180 * @base;
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
        .date {
          color: #747070;
        }
      }
    }
  }
}
</style>
