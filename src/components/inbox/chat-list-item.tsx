"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarBadge } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { Chat } from "@/types/chat";
import { navigation } from "@/config/navigation";

interface ChatListItemProps {
  chat: Chat;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function formatTime(date: Date) {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h`;
  return date.toLocaleDateString([], { month: "short", day: "numeric" });
}

export default function ChatListItem({ chat }: ChatListItemProps) {
  const platformNav = navigation.navbar.find(
    (n) => n.title === chat.platform,
  );
  const PlatformIcon = platformNav?.icon;

  const brandColor =
    chat.platform === "WhatsApp"
      ? "#25D366"
      : chat.platform === "Messenger"
        ? "#0084FF"
        : chat.platform === "Instagram"
          ? "#D4537E"
          : undefined;

  return (
    <div className="flex items-start gap-3 px-4 py-3 hover:bg-muted/50 transition-colors cursor-pointer">
      <div className="relative shrink-0">
        <Avatar>
          <AvatarFallback>{getInitials(chat.name)}</AvatarFallback>
        </Avatar>
        {PlatformIcon && brandColor && (
          <AvatarBadge
            className="flex items-center justify-center"
            style={{ backgroundColor: brandColor }}
          >
            <PlatformIcon className="size-2.5 text-white" />
          </AvatarBadge>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <span className="truncate text-sm font-medium">{chat.name}</span>
          <span className="shrink-0 text-xs text-muted-foreground">
            {formatTime(chat.timestamp)}
          </span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="truncate text-sm text-muted-foreground">
            {chat.lastMessage}
          </span>
          {chat.unread > 0 && (
            <Badge
              variant="destructive"
              className="shrink-0 rounded-full px-1.5 py-0 text-[10px]"
            >
              {chat.unread}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}
