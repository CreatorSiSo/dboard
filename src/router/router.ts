import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/actions',
      name: 'Actions',
      component: () => import('@/views/actions/ActionsView.vue'),
    },
    {
      path: '/actions/:id',
      name: 'ActionDetails',
      component: () => import('@/views/actions/ActionView.vue'),
      props: true,
    },
    {
      path: '/devices',
      name: 'Devices',
      component: () => import('@/views/devices/DevicesView.vue'),
    },
    {
      path: '/devices/:id',
      name: 'DeviceDetails',
      component: () => import('@/views/devices/DeviceView.vue'),
      props: true,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('@/views/SettingsView.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: () => import('@/views/404View.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = 'dBoard - ' + to.name?.toString();
  next();
});

export default router;
