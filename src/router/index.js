import { createRouter, createMemoryHistory } from 'vue-router';
import Home from './../components/tw_index.vue';

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
  ]
});

export default router;
