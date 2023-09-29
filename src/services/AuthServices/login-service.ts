/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiBackend } from 'src/boot/axios';
import { useUserStore } from 'src/stores/user-store';

// Função para realizar o login do usuário
export async function loginUser(username: string, password: string) {
  try {
    const response = await apiBackend.post('/auth/login', {
      email: username,
      password: password,
    });

    if (response.status === 200) {
      const loggedUser = response.data;
      const userStore = useUserStore();
      userStore.loginUser(
        loggedUser.aluno_id,
        loggedUser.access_token,
        loggedUser.token_type,
        true
      );
      return loggedUser;
    }
  } catch (error: any) {
    console.error(error.response);
    throw error;
  }
}

// Função para realizar o logout do usuário
export function logoutUser() {
  const userStore = useUserStore();
  userStore.loginUser('', '', '', false);
  return true;
}

// Função para verificar se o usuário está autenticado
export function isAuthenticated() {
  const userStore = useUserStore();
  return userStore.loggedInUser.isLoggedIn;
}
