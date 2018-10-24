<template>
  <div class="partnersDetail">
    <qz-card class="details">
      <div class="name">
        <h1>{{baseInfo.chiness_name}}</h1>
        <small>{{baseInfo.english_name}}</small>
      </div>
      <div class="current_posotion">现任 {{baseInfo.current_posotion}}</div>
      <p class="infos">{{baseInfo.chiness_name}},</p>
      <div class="typelabel">类型： {{baseInfo.category}}</div>
      <div class="typelabel">标签：
        <span v-for="(item,i) in peopleInfo.list_label" :key="i">{{item}}</span>
      </div>
      <div class="base">
        <personTitle text="基本信息"></personTitle>
        <div class="listDetails">
          <div class="line">
            <div>姓名：
              <span>{{baseInfo.chiness_name}}</span>
            </div>
            <div>外文：
              <span>{{baseInfo.english_name}}</span>
            </div>
            <div>性别：
              <span>-</span>
            </div>
          </div>
          <div class="line">
            <div>出生日期：
              <span>-</span>
            </div>
            <div>出生地：
              <span>{{baseInfo.province}}</span>
            </div>
            <div>民族：
              <span>-</span>
            </div>
          </div>
          <div class="line">
            <div>国籍：
              <span>{{baseInfo.people_country}}</span>
            </div>
            <div>毕业院校：
              <span>-</span>
            </div>
            <div>地区：
              <span>{{baseInfo.province}}</span>
            </div>
          </div>
          <div class="line">
            <div>学历/学位：
              <span>-</span>
            </div>
            <div>任职：
              <span>-</span>
            </div>
            <div>政治背景：
              <span>-</span>
            </div>
          </div>
          <div class="line">
            <div>社交账号：
              <span>暂无</span>
            </div>
            <div>经济来源：
              <span>XXX</span>
            </div>
            <div>身份类别：
              <span>暂无</span>
            </div>
          </div>
          <div class="line">
            <div>联系地址：
              <span>XXXXXXXXXXX</span>
            </div>
          </div>
        </div>
        <div v-if="baseInfo.identity_resource !='null' && baseInfo.identity_resource !=null"><a :href="baseInfo.identity_resource"  target="_Blank">维基百科</a></div>
      </div>
    </qz-card>
    <div class="right">
      <qz-card class="relation">
        <h1 class="pointer" @click="openMap">人物关系图谱</h1>
        <div class="relationMap">
          <relationshipMap :pointData="pointData"  :categories="categories" :linksData="linksData"></relationshipMap>
        </div>
      </qz-card>
      <qz-card class="related relation">
        <h1>相关人物</h1>
        <div class="persons" v-for="(item,i) in peopleInfo.list_relation_per" :key="i">
          <i class="iconfont icon-yinhao"></i>
          <span>
            <h2 v-if="item.type === '外方人物'" class="pointer" @click="openDetail(item.pid)">{{item.name}}</h2>
            <h2 v-else>{{item.name}}</h2>
            <small>{{item.country}}{{item.pos}}{{item.country == null ? '' : '、'}}{{item.type}}</small>
          </span>
        </div>
      </qz-card>
      <qz-card class="related relatedOrgs">
        <h1>相关机构</h1>
        <div class="orgs">
          <span :title="item.name" v-for="(item,i) in peopleInfo.list_relation_org" :key="i">{{item.name}}</span>
        </div>
      </qz-card>
      <qz-card class="related news">
        <h1>与{{baseInfo.chiness_name}}相关的新闻报道</h1>
        <ul>
          <li class="pointer" @click="openNews(item.id)" v-for="(item,i) in peopleInfo.list_news_report" :key="i">
            <i class="dot"></i>
            <span>{{item.title}}</span>
          </li>
        </ul>
      </qz-card>
    </div>
  </div>
</template>

<script>
import qzCard from '@/components/qz-card.vue'
import relationshipMap from '@/components/relationshipMap.vue'

import personTitle from './components/person-title.vue'
export default {
  name: 'personDetail',
  components: {
    qzCard,
    personTitle,
    relationshipMap
  },
  data() {
    return {
      peopleInfo: {},
      linksData:[],
      pointData: [],
      categories: [],
      max_focus_areas: 0
    }
  },
  computed: {
    peopleId() {
      return this.$route.query.id
    },
    baseInfo() {
      if (JSON.stringify(this.peopleInfo) === '{}') {
        return {}
      } else {
        this.$store.commit(
          'selectName',
          this.peopleInfo.persons_ext.chiness_name
        )
        let arr = []
        // this.peopleInfo.persons_ext.list_focus_areas.map(item=> {
        //   arr.push(item.num)
        // })
        // this.max_focus_areas = Math.max.apply(null,arr)
        return this.peopleInfo.persons_ext
      }
    },
    
  },
  methods: {
    getDetail() {
      this.$ajax
        .get(this.$api.person_detail, {
          id: this.peopleId
        })
        .then(res => {
          this.peopleInfo = res.data
          this.relationData()
        })
    },
    openMap() {
      this.$router.push({
        path: '/relationshipMap',
        query: { id: this.peopleId }
      })
    },
    openNews(id) {
      this.$router.push({ path: '/newDetail', query: { id: id } })
    },
    openDetail(id) {
      this.$router.push({ path: '/partnersDetail', query: { id: id } })
    },
    relationData() {
      if (JSON.stringify(this.peopleInfo) === '{}') {
        this.categories= []
        this.pointData = []
        this.linksData =[]
      } else {
        let arr = this.peopleInfo.person_relation.results[0].data
         this.categories.length = 0
        this.pointData.length = 0
        this.linksData.length = 0
        arr.map(item=>{
          this.categories.push({
            name: item.graph.nodes[0].labels[0],
          })
            this.categories.push({
            name: item.graph.nodes[1].labels[0],
          })
          this.pointData.push({
                name: item.graph.nodes[0].id,
                category:item.graph.nodes[0].labels[0],
                value: item.graph.nodes[0].properties.name,
                 properties: item.graph.nodes[0].properties,
                symbolSize: 30
              },{
                name: item.graph.nodes[1].id,
                 category:item.graph.nodes[1].labels[0],
                value: item.graph.nodes[1].properties.name,
                 properties: item.graph.nodes[0].properties,
                symbolSize: 30
              })
          this.linksData.push({
              source: item.graph.nodes[0].id,
              target: item.graph.nodes[1].id,
              name: item.graph.relationships[0].type,
              des: ''
          }) 
        })
       this.pointData = this.$util.uniqueArrayObj(this.pointData,'name')
        this.categories = this.$util.uniqueArrayObj(this.categories,'name')
      }
    }
  },
  mounted() {
    this.getDetail()
  },
  watch: {
    $route(to, from) {
      this.getDetail()
    }
  }
}
</script>

<style lang="less" scoped>
.partnersDetail {
  display: flex;
  .details {
    flex: 1;
    padding: 43 * @base 33 * @base;
    .name {
      display: flex;
      align-items: flex-end;
      h1 {
        font-size: 25 * @base;
        color: rgba(0, 0, 0, 0.94);
      }
      small {
        margin-left: 20 * @base;
        font-size: 18 * @base;
        color: rgba(0, 0, 0, 0.6);
      }
    }
    .current_posotion {
      font-family: MicrosoftYaHei;
      margin-top: 24 * @base;
      font-size: 16 * @base;
      color: rgba(0, 0, 0, 0.7);
    }
    p {
      margin-top: 12 * @base;
      padding-bottom: 26 * @base;
      color: rgba(0, 0, 0, 0.7);
      line-height: 23px;
    }
    .typelabel {
      color: #757575;
      letter-spacing: -0.32px;
      text-align: left;
      margin-top: 10 * @base;
      span {
        margin-left: 15 * @base;
      }
      span:first-child {
        margin-left: 0;
      }
    }
    .listDetails {
      .line {
        display: flex;
        margin-top: 10 * @base;
        border-bottom: 2 * @base dotted #d6d6d6;
        font-family: MicrosoftYaHei;
        color: rgba(0, 0, 0, 0.5);
        letter-spacing: -0.32px;
        div {
          flex: 0.3;
          padding-bottom: 10 * @base;
          span {
            font-family: MicrosoftYaHei;
            color: rgba(0, 0, 0, 0.7);
            letter-spacing: -0.32px;
          }
        }
      }
    }
  }
  .viewpoint {
    .attitude {
      padding-top: 27 * @base;
      .contentLi {
        margin-left: 28 * @base;
        background: rgba(216, 216, 216, 0.57);
        border-radius: 3px;
        color: rgba(0, 0, 0, 0.27);
        padding: 2 * @base 13 * @base;
      }
      .actived {
        border: 1px solid #0092f2;
        background: #ffffff;
        border-radius: 3px;
        color: #119af3;
      }
    }
    .follow {
      margin-top: 52 * @base;
      display: flex;
      align-items: baseline;
      .name {
        flex: 0.15;
      }
      .followBar {
        flex: 1;
      }
    }
  }
  .speech {
    .infos {
      padding: 20 * @base 0;
      border-bottom: 1px solid #D6D6D6;
      h3 {
        font-size: 15 * @base;
        color: rgba(0, 0, 0, 0.8);
        letter-spacing: -0.34px;
        line-height: 20 * @base;
      }
      p {
        color: rgba(0, 0, 0, 0.7);
        line-height: 25 * @base;
        max-height: 50*@base;
        max-width: 750*@base;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .right {
    flex: 0.4;
    max-width: 380*@base;
    margin-left: 8 * @base;
    .relation {
      padding: 16 * @base;
      h1 {
        font-family: MicrosoftYaHei;
        font-size: 16 * @base;
        color: rgba(0, 0, 0, 0.7);
        margin-bottom: 17 * @base;
      }
      .relationMap{
        max-height: 380*@base;
        overflow: hidden;
      }
      .persons {
        display: flex;
        margin-top: 12 * @base;
        i {
          color: #1991eb;
        }
        span {
          font-family: PingFangSC-Medium;
          font-size: 18 * @base;
          margin-left: 18 * @base;
          color: rgba(0, 0, 0, 0.7);

          small {
            font-size: 13 * @base;
            color: #8b8a8a;
            letter-spacing: 2px;
            line-height: 19 * @base;
          }
        }
      }
    }
    .related {
      margin-top: 8 * @base;
      padding: 16 * @base;
      h1 {
        font-family: MicrosoftYaHei;
        font-size: 16 * @base;
        color: rgba(0, 0, 0, 0.7);
      }
    }
    .relatedOrgs {
      .orgs {
        // display: flex;
        // text-align: center;
        margin-top: 24 * @base;
        span {
          // width: 100 * @base;
          color: rgba(0, 0, 0, 0.6);
          display: inline-block;
          width:   50%; /*一行2个*/
          margin: auto;
          line-height: 26*@base;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    .news {
      ul {
        font-family: MicrosoftYaHei;
        font-size: 12 * @base;
        position: relative;
        margin-top: 14 * @base;
        color: rgba(0, 0, 0, 0.6);
        li {
          margin-top: 10 * @base;
          i {
            background: #8a8a8a;
            position: absolute;
            border-radius: 50%;
            top: 9 * @base;
            width: 3 * @base;
            height: 3 * @base;
          }
          span {
            margin-left: 10 * @base;
            display: block;
          }
        }
      }
    }
  }
}
</style>
