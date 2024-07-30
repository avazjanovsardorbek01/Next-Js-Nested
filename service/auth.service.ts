import http from "@/api/interceptors";
import { setDataFromCookie } from "@/helpers/cookie";
import { SignIn, SignUp } from "@/types/auth-types";

export const login = async (data: SignIn) => {
  try {
    const response = await http.post("/login", data);
    if (response.status === 200) {
      setDataFromCookie("access_token", response?.data?.access_token);
      setDataFromCookie("refresh_token", response?.data?.refresh_token);
    }
    return response.status;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const register = async (data: SignUp) => {
  try {
    const response = await http.post("/user", data);
    return response.status;
  } catch (error) {
    console.error("Register error:", error);
    throw error;
  }
};
