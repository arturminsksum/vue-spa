import * as types from './mutation-types'

const mutations = {
  [types.SIGN_OUT] (state) {
    state.isLogin = false
  },
  [types.SET_USER] (state, payload) {
    state.user = payload.user
    state.isLogin = true
  }
}

export default mutations
