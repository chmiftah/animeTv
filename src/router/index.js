import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: () => import(/* webpackChunkName: "about" */ '../views/Details.vue')
  },
  {
    path: '/search/:query',
    name: 'Search',
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue')
  },
  {
    path: '/tv',
    name: 'Tv',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tv.vue')
  },
  {
    path: '/movie',
    name: 'Movie',
    component: () => import(/* webpackChunkName: "about" */ '../views/Movie.vue')
  },
  {
    path: '/people',
    name: 'People',
    component: () => import(/* webpackChunkName: "about" */ '../views/People.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass : "bg-gray-700 md:bg-gray-900 md:text-gray-400 m-2 rounded-md",
})

export default router
