import type { AxiosInstance } from "axios";
import { authClient } from "@/lib/clients/http";
import { handleHTTPError } from "@/lib/errors/error-http";
import type { LoginInput, LoginOutput } from "../model/login";

export interface DataSource {
  login(params: LoginInput): Promise<LoginOutput>;
}

export class AuthDataSource implements DataSource {
  private readonly api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  async login(params: LoginInput): Promise<LoginOutput> {
    try {
      const { data } = await this.api.post<LoginOutput>("/auth/login", params);
      return data;
    } catch (error) {
      handleHTTPError(error, "login");
    }
  }
}

export const authData = new AuthDataSource(authClient);
