import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import api from './api/api' // 加载接口api
// import ajax from './utils/ajax'
import './utils/flexible' // 初始化HTML的font-size
import './assets/css/reset.css' // 初始化样式
Vue.config.productionTip = false
import 'vue-instant/dist/vue-instant.css'
import VueInstant from 'vue-instant/dist/vue-instant.common'
Vue.use(VueInstant)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
