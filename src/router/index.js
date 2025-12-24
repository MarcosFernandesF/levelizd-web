import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Games from '@/pages/Games.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/games', component: Games }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router;
