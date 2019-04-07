import Vue from 'vue'
import Router from 'vue-router'

import homePage from "../views/HomePage/HomePage";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      // component: (resolve) => require(['@/views/HomePage/HomePage'], resolve)
      component:homePage
    }
  ]
})
