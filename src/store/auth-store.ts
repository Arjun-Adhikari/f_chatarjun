import { create } from "zustand";

export interface User {
  id: string;
  name: string;
  email?: string;
}

interface AuthState {
  accessToken: string | null;
  user: User | null;
  setAccessToken: (token: string) => void;
  setUser: (user: User) => void;
  clear: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  user: null,
  setAccessToken: (token) => {
    set({ accessToken: token });
  },
  setUser: (user) => set({ user }),
  clear: () => {
    set({ accessToken: null, user: null });
  },
}));
