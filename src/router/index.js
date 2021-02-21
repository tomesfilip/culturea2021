import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MainMap from '../views/MainMap.vue'
import ProMedia from '../views/ProMedia.vue'
import NotFound from '../views/NotFound.vue'

// for production add 2021/ to all paths
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/map',
    name: 'MainMap',
    component: MainMap
  },
  {
    path: '/pro-media',
    name: 'ProMedia',
    component: ProMedia
  },
  // catch all 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
