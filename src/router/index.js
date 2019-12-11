import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/admin',
    name: 'admin',    
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue')
  },
  {
    path: '/user',
    name: 'user',    
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
  },
  {
    path: '/signup',
    name: 'signup',    
    component: () => import(/* webpackChunkName: "about" */ '../views/login/Signup.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass:'active',
  routes
})

export default router
