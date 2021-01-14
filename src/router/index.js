import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Map from '../views/Map.vue'
import ProMedia from '../views/ProMedia.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/2021/',
    name: 'Home',
    component: Home
  },
  {
    path: '/2021/map',
    name: 'Map',
    component: Map
  },
  {
    path: '/2021/pro-media',
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
