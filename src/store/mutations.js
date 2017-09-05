import * as types from './mutation-types'

const mutations = {
  [types.SIGN_OUT] (state) {
    state.isLogin = false
  },
  [types.SET_USER] (state, payload) {
    state.user = payload.user
    state.isLogin = true
  },
  [types.ADD_EVENT] (state, payload) {
    debugger
    state.events.splice(0, 0, payload.event)
  }
}

export default mutations
