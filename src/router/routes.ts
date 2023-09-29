import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('pages/ExternalPages/HomePage.vue'),
      },
      {
        path: '/sobre-mim',
        name: 'sobre-mim',
        component: () => import('pages/ExternalPages/SobreMimPage.vue'),
      },
      {
        path: '/curriculo',
        name: 'curriculo',
        component: () => import('pages/ExternalPages/CurriculoPage.vue'),
      },
      {
        path: '/portfolio',
        name: 'portfolio',
        component: () => import('pages/ExternalPages/PortfolioPage.vue'),
      },
      {
        path: '/contato',
        name: 'contato',
        component: () => import('pages/ExternalPages/ContatoPage.vue'),
      },
    ],
  },
  {
    path: '/painel-adm',
    name: 'painel-adm',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {
        path: '/',
        component: () => import('pages/InternalPages/AuthPage.vue'),
        children: [
          {
            path: '/',
            component: () =>
              import(
                'components/InternalComponents/AuthComponents/AuthForms.vue'
              ),
            children: [
              {
                path: '/painel-adm/login',
                name: 'login',
                component: () =>
                  import(
                    'components/InternalComponents/AuthComponents/LoginForm.vue'
                  ),
              },
              {
                path: '/painel-adm/cadastro',
                name: 'cadastro',
                component: () =>
                  import(
                    'components/InternalComponents/AuthComponents/RegisterForm.vue'
                  ),
              },
              {
                path: '/painel-adm/esqueci-a-senha',
                name: 'esqueci-a-senha',
                component: () =>
                  import(
                    'components/InternalComponents/AuthComponents/ForgotPassword.vue'
                  ),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/AppLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('pages/InternalPages/DashboardPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
