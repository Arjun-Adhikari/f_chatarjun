export interface Channel {
  id: string;
  type: 'facebook' | 'instagram' | 'whatsapp';
  name: string;
  external_account_id: string;
  access_token: string | null;
  webhook_verify_token: string | null;
  status: 'active' | 'disconnected';
  created_at: string;
  updated_at: string;
}

export interface Customer {
  id: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface CustomerChannelIdentity {
  id: string;
  customer_id: string;
  channel_id: string;
  external_user_id: string;
  raw_profile: Record<string, unknown> | null;
  created_at: string;
  updated_at: string;
}

export interface Conversation {
  id: string;
  customer_id: string;
  channel_id: string;
  assigned_agent_id: string | null;
  status: 'open' | 'pending' | 'closed' | 'snoozed';
  last_message_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Message {
  id: string;
  conversation_id: string;
  sender_type: 'customer' | 'agent' | 'bot';
  sender_id: string | null;
  external_message_id: string | null;
  content: string | null;
  message_type: 'text' | 'image' | 'video' | 'audio' | 'file' | 'template';
  media_url: string | null;
  status: 'sent' | 'delivered' | 'read' | 'failed';
  raw_payload: Record<string, unknown> | null;
  created_at: string;
}

export interface WebhookEvent {
  id: string;
  channel_id: string | null;
  payload: Record<string, unknown>;
  processed: boolean;
  created_at: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string | null;
  isAdmin: boolean;
  contact: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface ApiListResponse<T> {
  success: boolean;
  message: string;
  data: T[];
}
