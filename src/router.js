import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import NotFoundComponent from './views/Error.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  hashbang: false,
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index,
      redirect: '/index',
      children: [{
          path: '/index',
          name: '首页',
          component: () => import(/* webpackChunkName: 'Home' */ './views/home/Home')
        },
        {
          path: '/news',
          name: '新闻中心',
          component: () => import(/* webpackChunkName: 'NewsDetail' */ './views/news/newsIndex')
        },
        {
          path: '/search',
          name: '搜索结果',
          hidden: true,
          component: () => import(/* webpackChunkName: 'NewsDetail' */ './views/search/index')
        },
        {
          path: '/newsList',
          hidden: true,
          name: '新闻列表',
          component: () => import(/* webpackChunkName: 'NewsDetail' */ './views/news/newsList')
        },
        {
          path: '/newsDetail',
          name: '新闻详情',
          hidden: true,
          component: () => import(/* webpackChunkName: 'NewsDetail' */ './views/news/newsDetail')
        },{
          path: '/topicDetail',
          name: '专题新闻详情',
          hidden: true,
          component: () => import(/* webpackChunkName: 'NewsDetail' */ './views/topic/topicNewsDetail')
        },{
          path: '/fm926',
          name: 'FM92.6',
          hidden: true,
          meta: {id: 3},
          component: () => import(/* webpackChunkName: 'PeopleDetail' */ './views/radio/radio')
        },{
          path: '/am1287',
          name: 'AM1287',
          meta: {id: 5},
          hidden: true,
          component: () => import(/* webpackChunkName: 'PeopleDetail' */ './views/radio/radio')
        },{
          path: '/fm102',
          name: 'FM102',
          meta: {id: 4},
          hidden: true,
          component: () => import(/* webpackChunkName: 'PeopleDetail' */ './views/radio/radio')
        },{
          path: '/am927',
          name: 'AM927',
          meta: {id: 2},
          hidden: true,
          component: () => import(/* webpackChunkName: 'PeopleDetail' */ './views/radio/radio')
        },{
          path: '/seminar',
          name: '专题',
          component: () => import(/* webpackChunkName: 'PeopleDetail' */ './views/people/peopleIndex'),
          children: [
            {
              path: '/',
              name: '专题列表',
              hidden: true,
              component: () => import(/* webpackChunkName: 'PeopleDetail' */ './views/topic/topic')
            },{
              path: '/seminarDetail',
              name: '专题详情',
              hidden: true,
              component: () => import(/* webpackChunkName: 'PeopleDetail' */ './views/topic/topicDetail')
            }
          ]
        },{
          path: '/peopleList',
          name: '主持人',
          component: () => import(/* webpackChunkName: 'PeopleDetail' */ './views/people/peopleIndex'),
          children: [{
            path: '/',
            name: '主持人列表',
            hidden: true,
            component: () => import(/* webpackChunkName: 'PeopleDetail' */ './views/people/peopleList')
          },{
            path: '/peopleDetail',
            name: 'XX',
            hidden: true,
            component: () => import(/* webpackChunkName: 'PeopleDetail' */ './views/people/peopleDetail'),
          }]
        },{
          path: '/video',
          name: '视频',
          component: () => import(/* webpackChunkName: 'PeopleDetail' */ './views/video/video')
        }
      ]
    },
    { path: '*', component: NotFoundComponent }
  ],
  scrollBehavior ()  {
    return { x: 0, y: 0 }
  }
})
