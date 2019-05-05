import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    peopeleName: '',
    searchValue: ''
  },
  mutations: {
    peopeleName(state, data) {
      state.peopeleName = data
    },
    searchValue(state, data) {
      state.searchValue = data
    }
  },
  actions: {
    setPeopleName({ commit }, data) {
      commit('peopeleName', data)
    }
  }
})
