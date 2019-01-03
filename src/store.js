import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    peopeleName: ''
  },
  mutations: {
    peopeleName(state, data) {
      state.peopeName = data
    }
  },
  actions: {
    setPeopleName({ commit }, data) {
      commit('peopeleName', data)
    }
  }
})
