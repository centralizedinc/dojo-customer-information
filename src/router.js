import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Table from './views/Table.vue'
import Register from './views/Register.vue'
import View from './views/View.vue'

Vue.use(Router)

export default new Router({
  
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [{
        path: '',
        name: "Dashboard",
        component: () => import("./views/Dashboard.vue")
      }]
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/view',
      name: 'view',
      component: View
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
