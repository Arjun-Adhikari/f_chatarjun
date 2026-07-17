import axios from "axios";
import { useAuthStore } from "@/store/auth-store";
import { API_URL } from "@/config/api";
import { removeTokenCookie } from "@/lib/cookies";

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

const AUTH_EXCLUDED_PATHS = [
  "/auth/login",
  "/auth/register",
];

function isExcluded(url: string | undefined): boolean {
  if (!url) return false;
  return AUTH_EXCLUDED_PATHS.some((path) => url.includes(path));
}

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && !isExcluded(error.config?.url)) {
      useAuthStore.getState().clear();
      removeTokenCookie();
      if (typeof window !== "undefined") {
        window.location.href = "/auth/login";
      }
    }
    return Promise.reject(error);
  },
);

export { api };
