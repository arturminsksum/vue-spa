import * as types from './mutation-types'
import jwtDecode from 'jwt-decode'
import Vue from 'vue'

const actions = {
  signOut: ({commit}) => commit(types.SIGN_OUT),
  login: ({commit}, payload) => {
    return Vue.axios.post('http://165.227.140.41:1323/api/users/login', payload)
      .then((response) => {
        let token = response.data.token

        sessionStorage.setItem('token', token)
        commit(types.SIGN_IN, {user: jwtDecode(token)})
      })
  },
  getUser: ({commit}, payload) => {
    return Vue.axios.get(`http://165.227.140.41:1323/api/users/${payload.id}`)
      .then((response) => {
        commit(types.SET_USER, {user: response.data})
      })
  }
}

export default actions
