<template>
  <div>
    <Card :name="name" @moreClick="moreClick">
      <div class="news-wrapper" v-cloak>
        <div ref="newsBox" class="news-box">
          <div class="cover" v-show="showImg && imgSrc">
            <img :src="imgSrc">
          </div>
          <ul>
            <li class="clearFix" v-for="(news, index) in newsList" :key="index" v-if="index < 6">
              <router-link class="link" :to="{ path: 'newsDetail', query: { id: news.id }}">
                <div class="newstxt-title">{{news.title}}</div>
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
import unknown from '../assets/imgs/unknown.svg'
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
  computed: {
    imgSrc() {
      let img = ''
      if (this.newsList && this.newsList.length > 0) {
        this.newsList.map(item => {
          if (item.displayType && item.displayType['key'] == 'DNORMAL') {
            img = this.$api.IMG_URL + item.cfImage
          }
        })
      }
      if (!this.$util.isNotEmpty(img)) img = unknown
      return img
    }
  },
  mounted() {},
  methods: {
    tebHover(index) {
      this.activeTab = index
      //计算margin-left的百分比
      this.marginleft = -1 * this.activeTab * 100
    },
    moreClick() {
      this.$emit('moreClick')
    }
  }
}
</script>
<style lang="less" scoped>
.news-wrapper {
  margin:10*@base;
  .news-box {
    position: relative;
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
