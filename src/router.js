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
      name: '',
      component: Index,
      children: [{
          path: '/',
          name: '',
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
          path: '/searchList',
          name: '搜索结果列表',
          hidden: true,
          component: () => import(/* webpackChunkName: 'NewsDetail' */ './views/search/searchList')
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
          component: () => import( './views/radio/radio')
        },{
          path: '/am1287',
          name: 'AM1287',
          meta: {id: 5},
          hidden: true,
          component: () => import( './views/radio/radio')
        },{
          path: '/fm102',
          name: 'FM102',
          meta: {id: 4},
          hidden: true,
          component: () => import( './views/radio/radio')
        },{
          path: '/am927',
          name: 'AM927',
          meta: {id: 2},
          hidden: true,
          component: () => import( './views/radio/radio')
        },{
          path: '/seminar',
          name: '专题',
          component: () => import( './views/people/peopleIndex'),
          children: [
            {
              path: '/',
              name: '专题列表',
              hidden: true,
              component: () => import( './views/topic/topic')
            },{
              path: '/seminarDetail',
              name: '专题详情',
              hidden: true,
              component: () => import( './views/topic/topicDetail')
            }
          ]
        },{
          path: '/peopleList',
          name: '主持人',
          component: () => import( './views/people/peopleIndex'),
          children: [{
            path: '/',
            name: '主持人列表',
            hidden: true,
            component: () => import( './views/people/peopleList')
          },{
            path: '/peopleDetail',
            name: '主持人详情',
            hidden: true,
            component: () => import( './views/people/peopleDetail'),
          }]
        },{
          path: '/video',
          name: '视频',
          component: () => import( './views/video/video')
        },{
          path: '/videoDetail',
          name: '视频',
          hidden: true,
          component: () => import( './views/video/videoDetail')
        }
      ]
    },
    { path: '*', component: NotFoundComponent }
  ],
  scrollBehavior ()  {
    return { x: 0, y: 0 }
  }
})
