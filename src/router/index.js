import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Index from '@/pages/index'
import Signup from '@/pages/signup'
import Artist from '@/pages/artist'
import Home from '@/pages/home'
import Plans from '@/pages/plans'
import Events from '@/pages/events'
import ErrorPage from '@/pages/error'

Vue.use(Router)

let router = new Router({
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
      path: '/user/:id',
      name: 'user',
      alias: ['/artist/:id', '/club/:id', '/agent/:id'],
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
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '*',
      name: 'error',
      component: ErrorPage
    }
  ]
})

router.beforeEach(function (to, from, next) {
  var vuexStore = this

  if (to.fullPath !== '/') {
    if (!vuexStore.state.isLogin) {
      const token = sessionStorage.getItem('token')

      if (!token) {
        next({name: 'index'})
      } else {
        vuexStore.dispatch('getByToken', {token: token})
        next()
      }
    } else {
      next()
    }
  } else {
    next()
  }
}.bind(store))

export default router
