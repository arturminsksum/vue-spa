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
    const options = {}

    if (payload.id === 'me') {
      options['Authorization'] = 'Bearer ' + sessionStorage.getItem('token')
    }

    return Vue.axios.get(`/api/users/${payload.id}`, {headers: options})
      .then((response) => {
        let data = response.data,
          about = data.about.split('\n\n');

        ['description', 'tags', 'genre', 'location'].forEach((key) => {
          if (key === 'genre' && about.length === 1) {
            data[key] = ''
          } else {
            data[key] = about.pop()
          }
        })

        data.tags = processTags(data.tags)

        updateImageUrl(data)

        commit(types.SET_USER, {user: data})
      })
  },
  getResidents: ({commit, state}, payload) => {
    var id = getCorrectUserId(payload.id, state.user.id)

    return Vue.axios.get(`/api/users/${id}/residents/`)
      .then((response) => {
        let data = response.data

        data.forEach((obj) => updateImageUrl(obj))
        commit(types.SET_RESIDENTS, {list: data})
      })
  },
  getTracks: ({commit, state}, payload) => {
    console.log('getTracks')
    const id = getCorrectUserId(payload.id, state.user.id)

    return Vue.axios.get(`/api/users/${id}/music/`)
      .then((response) => {
        let data = response.data
        commit(types.SET_TRACKS, {list: data})
      })
  },
  addPost: (payload) => {
    // const id = payload.state.user.id
    const options = {}
    options['Authorization'] = 'Bearer ' + sessionStorage.getItem('token')
    Vue.axios.post(`/posts/`, payload, {headers: options})
  },
  getPosts: ({commit, state}) => {
    // const id = state.user.id
    const options = {}
    options['Authorization'] = 'Bearer ' + sessionStorage.getItem('token')
    Vue.axios.get(`/posts/`, {headers: options})
      .then(response => {
        let posts = response.data.posts
        commit(types.GET_POSTS, posts)
      })
  },
  updateBoard: ({commit, state}) => {}
}

function updateImageUrl (obj) {
  var url = 'http://165.227.140.41:1323/'

  obj.avatar_image = url + obj.avatar_image
  obj.header_image = url + obj.header_image
}

function processTags (tags) {
  var result = tags || ''

  return result.split(' ').map((item) => {
    return item.replace('#', '').replace(',', '')
  }).filter(Boolean)
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

function getCorrectUserId (id, userId) {
  return id === 'me' ? userId : id
}

export default actions
