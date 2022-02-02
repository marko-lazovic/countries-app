import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },  
  {
    path: '/country/:name',
    name: 'Country',    
    component: () => import('../views/SingleCountry.vue'),
    props: true,
  },
  {
    path: '/:notFound(.*)',
    name: 'Not Found',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
