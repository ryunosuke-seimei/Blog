import Vue from 'vue'
import Vuex from 'vuex';

import App from './App.vue'

Vue.config.productionTip = false

import router from './router.js'
import store from './store'

Vue.use(Vuex)


new Vue({
  el:"#app",
  router,
  store,
  render: h => h(App)
})
