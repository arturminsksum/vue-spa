import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Signup from '@/pages/signup'
import Artist from '@/pages/artist'
import Home from '@/pages/home'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
