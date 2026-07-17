import axios from "axios";

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://aone-backend.vercel.app';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default api;