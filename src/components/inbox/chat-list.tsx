"use client";

import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { mockChats, type Chat } from "@/types/chat";
import ChatListItem from "./chat-list-item";

interface ChatListProps {
  platformFilter: string;
}

export default function ChatList({ platformFilter }: ChatListProps) {
  const [loading, setLoading] = useState(true);
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const filtered =
        platformFilter === "All"
          ? mockChats
          : mockChats.filter((c) => c.platform === platformFilter);
      setChats(filtered);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [platformFilter]);

  if (loading) {
    return (
      <div className="space-y-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i}>
            <div className="flex items-center gap-3 px-4 py-3">
              <Skeleton className="size-8 shrink-0 rounded-full" />
              <div className="flex flex-1 flex-col gap-1.5">
                <Skeleton className="h-3.5 w-1/3" />
                <Skeleton className="h-3 w-2/3" />
              </div>
            </div>
            <Separator />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-0">
      {chats.map((chat) => (
        <div key={chat.id}>
          <ChatListItem chat={chat} />
          <Separator />
        </div>
      ))}
      {chats.length === 0 && (
        <p className="py-12 text-center text-sm text-muted-foreground">
          No conversations found.
        </p>
      )}
    </div>
  );
}
