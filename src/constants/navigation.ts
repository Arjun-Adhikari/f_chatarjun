// src/config/navigation.ts

import {
  User,
  LogOut,
  Bell,
  MessageSquare, // Use a generic chat icon for the "All" option
} from "lucide-react";

import { 
  FaWhatsapp, 
  FaFacebookMessenger, 
  FaInstagram 
} from 'react-icons/fa';

export const navigation = {
  navbar: [
    {
      title: "All",
      href: "/chats",
      icon: MessageSquare, 
    },
    {
      title: "Messenger",
      href: "/chats",
      icon: FaFacebookMessenger
    },
    {
      title: "Instagram",
      href: "/chats",
      icon: FaInstagram
    },
    {
      title: "WhatsApp",
      href: "/chats",
      icon: FaWhatsapp
    },
  ],

  sidebar: [
    {
      title: "Account",
      href: "/account",
      icon: User,
    },
    {
      title: "Security",
      href: "/security",
      icon: User,
    },
    {
      title: "Connected Apps",
      href: "/connectedapps",
      icon: Bell,
    },
    {
      title: "Logout",
      href: "/logout",
      icon: LogOut,
    },
  ],
} as const;
