<template>
  <div class="partnersDetail">
    <div class="details">
      <div class="peopleInfo">
        <div class="photo">
          <div class="cover">
            <img v-if="$util.isNotEmpty(peopleInfo.pImage)" :src="`${$api.IMG_URL}${peopleInfo.pImage}`">
            <img v-else src="../../assets/imgs/people.svg">
          </div>
        </div>
        <div class="detailInfo">
          <div class="name">
            <h1>{{peopleInfo.name}}
            </h1>
          </div>
          <div class="current_posotion">{{peopleInfo.content}}</div>
          <div class="base">
            <div class="line">
              <div>
                <span>国籍：{{peopleInfo.natives}}</span>
              </div>
              <div>
                <span>身高：{{peopleInfo.height == 'null' ? '-' : peopleInfo.height}}</span>
              </div>
            </div>
            <div class="line">
              <div>
                <span>生日:{{peopleInfo.birthday}}</span>
              </div>
              <div>
                <span>星座：{{peopleInfo.constellation == 'null' ? '-' : peopleInfo.constellation}}</span>
              </div>
            </div>
            <div class="line">
              <div>
                <span>出生地：{{peopleInfo.natives}}</span>
              </div>
              <div>
                <span>民族：{{peopleInfo.positions}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="viewpoint">
        <Card name="主持节目"></Card>
      </div>
      <div class="relation">
        <Card name="其他主持人"></Card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'peopleDetail',
  components: {},
  data() {
    return {
      navigationId: '1',
      peopleList: [],
      itemList: [],
      peopleInfo: {}
    }
  },
  computed: {
    peopleId() {
      return this.$route.query.id
    }
  },
  methods: {
    getDetail() {
      this.categories = []
      this.$ajax
        .get(this.$api.getPeopleDetail, {
          id: this.peopleId
        })
        .then(res => {
          this.peopleInfo = res.data.content
          this.$store.dispatch('setPeopleName',this.peopleInfo.name)
        })
    },
    openNews(id) {
      this.$router.push({ path: '/newDetail', query: { id: id } })
    },
    openDetail(id) {
      this.$router.push({ path: '/partnersDetail', query: { id: id } })
    }
  },
  mounted() {
    this.getDetail()
  },
  watch: {
    $route() {
      this.getDetail()
    }
  }
}
</script>

<style lang="less" scoped>
.partnersDetail {
  width: @maxWidth;
  // padding: 36 * @base 30 * @base;
  .details {
    .peopleInfo {
      display: flex;
      padding: 10 * @base 10 * @base;
      .photo {
        flex: 0.25;
        .cover {
          width: 368 * @base;
          height: 490 * @base;
          overflow: hidden;
          position: relative;
          img {
            height: 100%;
            width: auto;
            left: 50%;
            position: relative;
            transform: translateX(-50%);
          }
        }
      }
      .detailInfo {
        flex: 0.7;
        padding: 30 * @base 20 * @base 20 * @base 50 * @base;
        background: rgba(248, 246, 246, 0.64);
        border: 1px solid #bebcbc;
        .name {
          h1 {
            font-size: 32 * @base;
            font-weight: 900;
            color: #3d3d3d;
          }
        }
        .base {
          margin-top: 25 * @base;
          background: #ffffff;
          padding: 20*@base;
          color: #706f6f;
          .line {
            display: flex;
            margin-bottom: 20 * @base;
            div{
              flex: 0.5;
            }
          }
        }
      }
    }
  }
}
</style>
