// src/router/authGuard.ts

import {
  RouteRecordRaw,
  NavigationGuardNext,
  RouteLocationNormalized,
} from 'vue-router';
import { isAuthenticated } from 'src/services/AuthServices/login-service';
import { Notify } from 'quasar';

export async function authGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  // Verifica se a rota tem metadados definidos e se requer autenticação
  const requiresAuth = to.matched.some(
    (record: RouteRecordRaw) => record.meta && record.meta.requiresAuth
  );

  if (requiresAuth && !isAuthenticated()) {
    // Se a rota requer autenticação e o usuário não está autenticado, redirecione para a página de login
    next({ name: 'login' });
    Notify.create({
      progress: true,
      textColor: 'white',
      icon: 'warning',
      color: 'negative',
      message: 'Você precisa estar logado para acessar esta página.',
      actions: [
        {
          icon: 'close',
          color: 'white',
        },
      ],
    });
  } else {
    // Se o usuário está autenticado ou a rota não requer autenticação, continue a navegação
    next();

    // Se o usuário acabou de ser autenticado com sucesso, redirecione para a rota "dashboard"
    if (requiresAuth && isAuthenticated()) {
      next({ name: 'dashboard' });
    }
  }
}
