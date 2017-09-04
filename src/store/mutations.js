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
  }
}

export default mutations
