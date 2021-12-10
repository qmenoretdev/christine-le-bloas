import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    indexPage: 1
  },
  getters: {
    getIndexPage(state) {
      return state.indexPage;
    }
  },
  mutations: {
    setIndexPage(state, indexPage) {
      state.indexPage = indexPage;
    }
  },
  actions: {
    setIndexPage(store, indexPage) {
      store.commit('setIndexPage', indexPage);
    }    
  }
})
