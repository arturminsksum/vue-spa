import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({

  state,
  getters,
  actions,
  mutations,
  plugins: [createPersistedState({
    paths: ['posts'],
    storage: window.sessionStorage
  })]
})
