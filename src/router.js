import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
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
          path: '/fm926',
          name: 'FM92.6',
          query: {id: 3},
          component: () => import(/* webpackChunkName: 'PeopleDetail' */ './views/radio/radio')
        },{
          path: '/am1287',
          name: 'AM1287',
          component: () => import(/* webpackChunkName: 'PeopleDetail' */ './views/radio/radio')
        },{
          path: '/peopleList',
          name: '主持人',
          component: () => import(/* webpackChunkName: 'PeopleDetail' */ './views/people/peopleIndex'),
          children: [{
            path: '/peopleList',
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
        },{
          path: '/seminar',
          name: '专题',
          component: () => import(/* webpackChunkName: 'PeopleDetail' */ './views/topic/topic')
        }
      ]
    }
  ],
  scrollBehavior ()  {
    return { x: 0, y: 0 }
  }
})
