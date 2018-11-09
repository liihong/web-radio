import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
      redirect: '/index',
      children: [{
          path: '/index',
          name: '首页',
          component: () => import(/* webpackChunkName: 'Home' */ './views/Home')
        },
        {
          path: '/newDetail',
          name: '新闻中心',
          component: () => import(/* webpackChunkName: 'NewsDetail' */ './views/NewsDetail')
        },{
          path: '/peopleDetail',
          name: 'FM92.6',
          component: () => import(/* webpackChunkName: 'PeopleDetail' */ './views/NewsDetail')
        },{
          path: '/peopleDetail',
          name: 'AM1287',
          component: () => import(/* webpackChunkName: 'PeopleDetail' */ './views/NewsDetail')
        },{
          path: '/peopleDetail',
          name: '主持人',
          component: () => import(/* webpackChunkName: 'PeopleDetail' */ './views/NewsDetail')
        },{
          path: '/peopleDetail',
          name: '视频',
          component: () => import(/* webpackChunkName: 'PeopleDetail' */ './views/NewsDetail')
        },{
          path: '/peopleDetail',
          name: '专题',
          component: () => import(/* webpackChunkName: 'PeopleDetail' */ './views/NewsDetail')
        }
      ]
    }
  ],
  scrollBehavior ()  {
    return { x: 0, y: 0 }
  }
})
