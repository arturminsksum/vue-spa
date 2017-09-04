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
        return getByToken(commit, {token: token})
      })
  },
  getByToken: ({commit}, payload) => {
    return getByToken(commit, payload)
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
        updateImageUrl(data)

        commit(types.SET_USER, {user: data})
      })
  }
}

function updateImageUrl (obj) {
  var url = 'http://165.227.140.41:1323/'

  obj.avatar_image = url + obj.avatar_image
  obj.header_image = url + obj.header_image
}

function getByToken (commit, payload) {
  let user = jwtDecode(payload.token)

  return Vue.axios.get(`/api/users/${user.acc_id}`)
    .then((response) => {
      let data = response.data

      updateImageUrl(data)
      commit(types.SIGN_IN, {user: Object.assign(user, data)})
    })
}

export default actions
