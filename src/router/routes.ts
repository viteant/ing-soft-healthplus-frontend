import {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      requiresAuth: true,
    },
    children: [
      {path: '', component: () => import('pages/doctor/DoctorPage.vue')},
      {path: '/patients', component: () => import('pages/PatientPage.vue')},
      {path: '/administratives', component: () => import('pages/AdministrativeUserPage.vue')},
      {
        path: '/doctor',
        children: [
          {path: '', component: () => import('pages/doctor/DoctorPage.vue')},
          {path: 'schedule', component: () => import('pages/doctor/SchedulePage.vue')},

        ]
      },

    ],
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {
        path: 'login', name: 'login', component: () => import('pages/LoginPage.vue')
      },
      {
        path: 'register', name: 'register', component: () => import('pages/RegisterPage.vue')
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
