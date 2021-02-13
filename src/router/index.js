import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/liveChart',
    name: 'Live Chart',
    component: () => import('../views/LiveChart/index.vue'),
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
