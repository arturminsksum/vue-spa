import * as types from './mutation-types'

const actions = {
  signOut: ({ commit }) => commit(types.SIGN_OUT),
  setUser: ({ commit }, payload) => commit(types.SET_USER, payload)
}

export default actions
