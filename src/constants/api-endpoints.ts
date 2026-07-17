export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    REFRESH: "/auth/refresh",
  },

  USER: {
    PROFILE: "/users/profile",
    UPDATE: "/users/profile",
  },

  POST: {
    LIST: "/posts",
    CREATE: "/posts",
  },

  CHANNELS: {
    LIST: "/channels",
    GET: (id: string) => `/channels/${id}`,
    CREATE: "/channels",
    UPDATE: (id: string) => `/channels/${id}`,
    DELETE: (id: string) => `/channels/${id}`,
    WEBHOOK_EVENTS: {
      LIST: (channelId: string) => `/channels/${channelId}/webhook-events`,
      GET: (channelId: string, id: string) => `/channels/${channelId}/webhook-events/${id}`,
    },
  },

  CUSTOMERS: {
    LIST: "/customers",
    GET: (id: string) => `/customers/${id}`,
    CREATE: "/customers",
    UPDATE: (id: string) => `/customers/${id}`,
    DELETE: (id: string) => `/customers/${id}`,
    IDENTITIES: {
      LIST: (customerId: string) => `/customers/${customerId}/identities`,
      CREATE: (customerId: string) => `/customers/${customerId}/identities`,
      DELETE: (customerId: string, id: string) => `/customers/${customerId}/identities/${id}`,
    },
    CONVERSATIONS: {
      LIST: (customerId: string) => `/customers/${customerId}/conversations`,
      GET: (customerId: string, id: string) => `/customers/${customerId}/conversations/${id}`,
      CREATE: (customerId: string) => `/customers/${customerId}/conversations`,
      UPDATE: (customerId: string, id: string) => `/customers/${customerId}/conversations/${id}`,
      DELETE: (customerId: string, id: string) => `/customers/${customerId}/conversations/${id}`,
    },
  },

  MESSAGES: {
    LIST: (conversationId: string) => `/conversations/${conversationId}/messages`,
    GET: (conversationId: string, id: string) => `/conversations/${conversationId}/messages/${id}`,
    CREATE: (conversationId: string) => `/conversations/${conversationId}/messages`,
  },
};



// #### We can use like this

// import api from "@/lib/api";
// import { API_ENDPOINTS } from "@/constants/api-endpoints";

// export const getProfile = () => {
//   return api.get(API_ENDPOINTS.USER.PROFILE);
// };