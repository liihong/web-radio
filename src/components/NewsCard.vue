<template>
    <div>
        <Card :name="name">
            <div class="news-wrapper" v-cloak>
                <div class="news-box">
                    <ul>
                        <li class="clearFix" v-for="(news, index) in list" :key="index" v-if="index < 6">
                            <router-link class="link" :to="{ path: 'newDetail', query: { id: news.id }}">
                                <div class="newstxt-title">{{news.title}}</div>
                                <!-- <div class="news-text">
                                            {{news.content}}
                                        </div> -->
                                <div class="time">{{news.date}}</div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </Card>
    </div>

</template>
<script>
import axios from 'axios'
import Card from './Card'
export default {
  components: {
    Card
  },
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      list: {},
      activeTab: 0,
      marginleft: 0,
      day: '',
      year: ''
    }
  },
  created() {
    this.newslist()
  },
  methods: {
    newslist() {
      //请求'newslist/data'接口
      axios.get('/newslist/data').then(({ data }) => {
        if (data.status === 0) {
          this.list = data.newlist[2]['datalist']
        } else {
          alert('新闻列表数据请求失败!')
        }
      })
    },
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
        border-bottom: 1px dashed #e0e0e0;
        line-height: 32px;
        .link {
          display: flex;
          .newstxt-title {
            flex: 0.9;
          }
          .time {
            flex: 0.1;
            margin-right: 15px;
          }
        }
      }
    }
  }
}
</style>
