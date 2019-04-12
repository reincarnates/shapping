import Vue from 'vue'
import Router from 'vue-router'

// import homePage from "../views/HomePage/HomePage";
// import CommodityDetails from "../views/CommodityDetails/CommodityDetails";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: (resolve) => require(['@/views/HomePage/HomePage'], resolve)
      // component: homePage,
    },
    {
      path: '/details',
      name: '商品详情',
      component: (resolve) => require(['@/views/CommodityDetails/CommodityDetails'], resolve),
    }
  ]
})
