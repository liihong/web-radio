<template>
  <div class="newCard">
    <div class="newsList" v-for="(item,index) in newsList" :key="index">
      <div class="actived" v-if="index == activeId">
        <div class="infos">
          <label class="from">【{{item.sitename == 'null' ? '未知' : item.sitename}}】</label>
          <span class="date">{{item.date}}</span>
        </div>
        <span @click="openDetail(item.newsId)" class="title pointer">{{item.title}}
        </span>
        <p v-show="index == activeId">{{item.content}}</p>
      </div>
      <div class="newsInfo" v-else>
        <i class="circle"></i>
        <label class="from" :title="item.sitename">【{{item.sitename == 'null' ? '未知' : item.sitename}}】</label>
        <span  @click="openDetail(item.newsId)" class="title pointer">{{item.title}}
        </span>
        <span class="date">{{item.date}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newCard',
  props: {
    newsList: {},
    borderColor: {},
    isClose: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      activeClass: this.borderColor,
      isDisplay: this.isClose,
      activeId: '0'
    }
  },
  mounted () {
  },
  methods: {
    openDetail(id) {
      this.$router.push({ path: '/textDetail', query: { id: id } })
    }
  }
}
</script>
<style lang="less" scoped>
.newCard {
  margin-left: 20 * @base;
  font-size: 20 * @base;
  min-height: 280 * @base;
  color: rgba(0, 0, 0, 0.9);
  .newsList {
    .newsInfo {
      display: flex;
      background: #F5F5F5;
      height: 68*@base;
      align-items: center;
      margin-top: 10 * @base;
    }
    .circle {
      background: #4a4a4a;
      height: 8 * @base;
      width: 8 * @base;
      border-radius: 50%;
    }
    .from {
      color: #c60915;
      flex: 0.25;
      word-break: keep-all;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: center;
      max-width: 100 * @base;
    }
    .title {
      flex: 0.75;
      // white-space: nowrap;
      // overflow: hidden;
      // display: inline-block;
      // text-overflow: ellipsis;
    }
    .date {
      flex: 0.25;
      color: rgba(0, 0, 0, 0.7);
    }
    .actived {
      background: #c22020;
      color: #ffffff;
      border-left: 4 * @base solid #c60915;
      padding: 5 * @base 20 * @base;
      .title {
        margin-top: 15 * @base;
      }
      .from {
        color: #ffffff;
      }
      .date {
        color: rgba(0, 0, 0, 0.7);
        float: right;
      }
      p {
        font-size: 18 * @base;
        margin-top: 14 * @base;
        color: #ffffff;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
