import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [{
          path: '/index',
          name: '首页',
          component: Home
        },
        {
          path: '/newDetail1',
          name: '首页  > 合作动态',
          hidden: true,
          component: () => import(/* webpackChunkName: 'NewsDetail' */ './views/NewsDetail')
        },
        {
          name: '全球伙伴',
          path: '/qqhb', //  主页面
          component: () => import(/* webpackChunkName: 'NewsDetail' */ './views/NewsDetail')
        }, {
          path: '/peopleDetail',
          name: '全球伙伴列表',
          hidden: true,
          component: () => import(/* webpackChunkName: 'PeopleDetail' */ './views/PeopleDetail/PeopleDetail')
        }
      ]
    },
    {
      path: '/newDetail',
      name: '首页  > 合作动态',
      hidden: true,
      component: () => import(/* webpackChunkName: 'NewsDetail' */ './views/NewsDetail')
    },
  ]
})
