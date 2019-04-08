import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 全局访问的state对象
const state = {
  taskVideoSrc: '124',
  taskVideoTitle: '标题'
}

const getters = {

}

const mutations = {
  changeVideoSrc (state, taskVideoSrc) {
    state.taskVideoSrc = taskVideoSrc
  },
  changeVideoTitle (state, taskVideoTitle) {
    state.taskVideoSrc = taskVideoTitle
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations
})

export default store
