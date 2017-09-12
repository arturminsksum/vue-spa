// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/index'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vueEventCalendar from 'vue-event-calendar'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(vueEventCalendar, {locale: 'en'})
Vue.use(VueAxios, axios)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDd4OU1eRcEvKscPytF8XjZ9FXmO0rwlkU',
    libraries: 'places'
  }
})

axios.defaults.baseURL = 'http://165.227.140.41:1323'

sync(store, router)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
