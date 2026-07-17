import type { AxiosInstance } from "axios";

export function setupInterceptors(api: AxiosInstance) {
  api.interceptors.request.use(
    (config) => {
      // Runs before every request

      // Example:
      // const token = localStorage.getItem("accessToken");
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`;
      // }

      return config;
    },
    (error) => Promise.reject(error)
  );


  
  api.interceptors.response.use(
    (response) => {
      // Runs after every successful response
      return response;
    },
    async (error) => {
      // Runs for every error response

      if (error.response?.status === 401) {
        console.log("Unauthorized");
        // Refresh token or redirect to login
      }

      return Promise.reject(error);
    }
  );
}