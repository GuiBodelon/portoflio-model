/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiBackend } from 'src/boot/axios';

// Função para realizar o registro do usuário
export async function registerUser(
  fullName: string,
  email: string,
  user: string,
  password: string
) {
  try {
    const response = await apiBackend.post('/auth/register', {
      fullName,
      email,
      user,
      password,
    });

    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.error(error.response);
    throw error;
  }
}
