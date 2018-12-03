<template>
  <div>
    <Card :name="name">
      <div class="news-wrapper" v-cloak>
        <div class="news-box">
          <ul>
            <li class="clearFix" v-for="(news, index) in newsList" :key="index" v-if="index < 6">
              <router-link class="link" :to="{ path: 'newDetail', query: { id: news.id }}">
                <div v-show="showImg && news.displayType['key'] == 'DNORMAL'">
                  <img v-if="$util.isNotEmpty(news.cfImage)" :src="`${$api.IMG_URL}${news.cfImage}`">
                  <img v-else src="../assets/imgs/unknown.svg">
                </div>
                <div class="newstxt-title">{{news.title}}</div>
                <!-- <div class="news-text">
                                            {{news.content}}
                                        </div> -->
                <div v-show="!showImg" class="time">{{news.sendDate}}</div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  </div>

</template>
<script>
import Card from './Card'
export default {
  components: {
    Card
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    newsList: {
      type: Array
    },
    showImg: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeTab: 0,
      marginleft: 0,
      day: '',
      year: ''
    }
  },
  created() {},
  methods: {
    tebHover(index) {
      this.activeTab = index
      //计算margin-left的百分比
      this.marginleft = -1 * this.activeTab * 100
    }
  }
}
</script>
<style lang="less" scoped>
.news-wrapper {
  .news-box {
    ul {
      .clearFix {
        border-bottom: 1 * @base dashed #e0e0e0;
        line-height: 49 * @base;
        .link {
          display: flex;
          .newstxt-title {
            flex: 1;
            width: 300 * @base;
            word-break: keep-all;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .time {
            flex: 0.2;
            text-align: right;
            margin-right: 15 * @base;
          }
        }
      }
    }
  }
}
</style>
