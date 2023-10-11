import { createRouter, createWebHashHistory } from 'vue-router';
import Index from '../components/tw_index.vue';

const router = createRouter({
  base: './',
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
  ]
})
export default router
