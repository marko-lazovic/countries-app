import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import store from '../store/index.js';

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
    beforeEnter(to, _, next) {
      const checkName = store.getters.countries.find(item => item.name.common === to.params.name);
      if (checkName === undefined) {
        next('/not-found');
      } else {
        next();
      }
    }
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
