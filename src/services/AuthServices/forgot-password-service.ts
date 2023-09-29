/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiBackend } from 'src/boot/axios';

// Função para enviar o pedido de redefinição de senha
export async function requestPasswordReset(email: string) {
  try {
    const response = await apiBackend.post('/auth/forgot-password', {
      email,
    });

    if (response.status === 200) {
      // O pedido de redefinição foi bem-sucedido, você pode retornar qualquer valor desejado aqui
      return true;
    }
  } catch (error: any) {
    console.error(error.response);
    throw error;
  }
}

// Função para redefinir a senha com base no token enviado por e-mail
export async function resetPassword(
  email: string,
  token: string,
  newPassword: string
) {
  try {
    const response = await apiBackend.post('/auth/reset-password', {
      email,
      token,
      newPassword,
    });

    if (response.status === 200) {
      // A redefinição de senha foi bem-sucedida, você pode retornar qualquer valor desejado aqui
      return true;
    }
  } catch (error: any) {
    console.error(error.response);
    throw error;
  }
}
