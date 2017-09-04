import * as types from './mutation-types'
import jwtDecode from 'jwt-decode'
import Vue from 'vue'

const actions = {
  signOut: ({commit}) => commit(types.SIGN_OUT),
  login: ({commit}, payload) => {
    return Vue.axios.post('/api/users/login', payload)
      .then((response) => {
        let token = response.data.token

        sessionStorage.setItem('token', token)
        commit(types.SIGN_IN, {user: jwtDecode(token)})
      })
  },
  getUser: ({commit}, payload) => {
    var options = {}

    if (payload.id === 'me') {
      options['Authorization'] = 'Bearer ' + sessionStorage.getItem('token')
    }

    return Vue.axios.get(`/api/users/${payload.id}`, {headers: options})
      .then((response) => {
        let data = response.data,
          regex = /[^\n]+(?:\r?\n|$)/g,
          about = data.about.match(regex)

        data.place = about[0]
        data.avatar_image = 'http://165.227.140.41:1323/' + data.avatar_image
        data.header_image = 'http://165.227.140.41:1323/' + data.header_image
        commit(types.SET_USER, {user: data})
      })
  }
}

export default actions
