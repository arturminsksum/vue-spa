import * as types from './mutation-types'

const mutations = {
  [types.SIGN_OUT] (state) {
    state.isLogin = false
  },
  [types.SIGN_IN] (state, payload) {
    state.user = payload.user
    state.isLogin = true
  },
  [types.SET_USER] (state, payload) {
    state.currentUser = payload.user
  },
  [types.SET_RESIDENTS] (state, payload) {
    state.residents = payload.list
  },
  [types.ADD_EVENT] (state, payload) {
    state.posts.splice(0, 0, payload)
  },
  [types.SET_TRACKS] (state, payload) {
    state.tracks = payload.list
  }
}

export default mutations
