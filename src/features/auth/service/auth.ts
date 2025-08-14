import { authData, type DataSource } from "../data/auth";
import type { LoginInput, LoginOutput } from "../model/login";

interface Service {
  login(params: LoginInput): Promise<LoginOutput>;
}

export class AuthService implements Service {
  private readonly data: DataSource;

  constructor(data: DataSource) {
    this.data = data;
  }

  async login(params: LoginInput): Promise<LoginOutput> {
    return await this.data.login(params);
  }
}

export const authService = new AuthService(authData);
