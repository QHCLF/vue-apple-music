import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import database from './views/databases/Databases.vue'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
      path: '/',
      name: 'database',
      component: database
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: () => import('./views/recommend/Recommend.vue')
    },
    {
      path: '/browse',
      name: 'browse',
      component: () => import('./views/browse/Browse.vue')
    },
    {
      path: '/broadcast',
      name: 'broadcast',
      component: () => import('./views/broadcast/Broadcast.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/search/Search.vue')
    }
  ]
})
