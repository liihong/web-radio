import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api/api' // 加载接口api
import ajax from './utils/ajax'
import './utils/flexible' // 初始化HTML的font-size
import './assets/css/reset.css' // 初始化样式
import util from './utils/util' // 统一加载通用方法对象

import mock from './mock/mock'
Vue.use(mock)

Vue.config.productionTip = false

import 'vue-instant/dist/vue-instant.css'
import VueInstant from 'vue-instant/dist/vue-instant.common'
Vue.use(VueInstant)

import Advertising from './components/Advertising.vue'
Vue.component('Advertising', Advertising)

Vue.prototype.$ajax = ajax
Vue.prototype.$api = api
Vue.prototype.$util = util
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
