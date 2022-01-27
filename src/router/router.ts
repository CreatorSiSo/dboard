import { createRouter, createWebHistory } from 'vue-router';

import Home from '$views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/actions',
    name: 'Actions',
    component: () => import('$views/actions/Actions.vue'),
  },
  {
    path: '/actions/:id',
    name: 'ActionDetails',
    component: () => import('$views/actions/ActionDetails.vue'),
  },
  {
    path: '/devices',
    name: 'Devices',
    component: () => import('$views/devices/Devices.vue'),
  },
  {
    path: '/devices/:id',
    name: 'DeviceDetails',
    component: () => import('$views/devices/DeviceDetails.vue'),
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('$views/Settings.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
