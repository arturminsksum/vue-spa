import Vue from 'vue'
import Router from 'vue-router'
import JwtDecode from 'jwt-decode'
import store from '@/store'
import Index from '@/pages/index'
import Signup from '@/pages/signup'
import Artist from '@/pages/artist'
import Home from '@/pages/home'
import Plans from '@/pages/plans'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/artist',
      name: 'artist',
      component: Artist
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/plans',
      name: 'plans',
      component: Plans
    }
  ]
})

router.beforeEach(function (to, from, next) {
  var vuexStore = this

  if (!vuexStore.state.isLogin) {
    const token = sessionStorage.getItem('token')

    if (!token) {
      next()
    } else {
      vuexStore.dispatch('setUser', {user: JwtDecode(token)})
      next()
    }
  } else {
    next()
  }
}.bind(store))

export default router
