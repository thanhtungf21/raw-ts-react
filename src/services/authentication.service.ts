import { isValidEmail } from "@/utils/isValidEmail";
import api from "./api";
import { LoginForm } from "@/types/authentication.types";

export const authenticationServices = {
  login: async ({ email, password }: LoginForm) => {
    try {
      if (!isValidEmail(email)) {
        throw new Error("Invalid email format. Please check your email.");
      }
      const body = {
        email,
        password,
      };
      const response = await api.post("/api/login", body);
      return response.data;
    } catch (error) {
      console.log({ error });
      throw error;
    }
  },
};
