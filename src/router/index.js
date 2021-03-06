import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProMedia from '../views/ProMedia.vue'

// for production add 2021/ to all paths
const routes = [
  {
    path: '/2021/',
    name: 'Home',
    component: Home
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
