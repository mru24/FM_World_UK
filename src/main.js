// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// Back to Top
import BackToTop from 'vue-backtotop'
// Bootstrap & jQuery
import 'bootstrap/dist/css/bootstrap.css'
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
let Bootstrap = require('bootstrap')
Vue.use(Bootstrap)
// Back to Top
Vue.use(BackToTop)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
