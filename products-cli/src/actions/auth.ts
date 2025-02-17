import { productsApi } from '../config/api/productsApi';
import { User } from '../domain/entities/user';
import type { AuthResponse } from '../infrastructure/interfaces/auth.response';

const returnUserToken = (data: AuthResponse) => {
  const user: User = {
    id: data.id,
    email: data.email,
    fullName: data.fullName,
    isActive: data.isActive,
    roles: data.roles,
  };

  return {
    user,
    token: data.token,
  };
};

export const authLogin = async (email: string, password: string) => {
  email = email.toLowerCase();

  try {
    const { data } = await productsApi.post<AuthResponse>('/auth/login', {
      email,
      password,
    });

    return returnUserToken(data);
  } catch (error) {
    console.log(error);
    return null;
  }
};
