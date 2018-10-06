import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SmartStart from '@/components/SmartStart'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/SmartStart',
      name: 'SmartStart',
      component: SmartStart
    },
    {
      path: '/About',
      name: 'About',
      component: About
    }
  ],
  mode: 'history'
})
