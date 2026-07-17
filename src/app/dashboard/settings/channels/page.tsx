"use client";

import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { api } from "@/lib/axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { FaFacebookMessenger, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { toast } from "sonner";
import type { Channel, ApiListResponse, ApiResponse } from "@/types/database";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

type ChannelWithIcon = Channel & { icon: React.ReactNode };

const channelIcons: Record<string, React.ReactNode> = {
  facebook: <FaFacebookMessenger className="size-5 text-blue-600" />,
  instagram: <FaInstagram className="size-5 text-pink-600" />,
  whatsapp: <FaWhatsapp className="size-5 text-green-600" />,
};

const platformLabel: Record<string, string> = {
  facebook: "Messenger",
  instagram: "Instagram",
  whatsapp: "WhatsApp",
};

export default function ChannelsSettingsPage() {
  const searchParams = useSearchParams();
  const [channels, setChannels] = useState<ChannelWithIcon[]>([]);
  const [loading, setLoading] = useState(true);
  const [connecting, setConnecting] = useState(false);
  const [disconnecting, setDisconnecting] = useState<string | null>(null);

  const fetchChannels = useCallback(async () => {
    try {
      const res = await api.get<ApiListResponse<Channel>>("/channels");
      setChannels(
        (res.data.data || []).map((ch) => ({
          ...ch,
          icon: channelIcons[ch.type] || null,
        })),
      );
    } catch {
      toast.error("Failed to load channels");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchChannels();
  }, [fetchChannels]);

  useEffect(() => {
    const connected = searchParams.get("connected");
    const reconnected = searchParams.get("reconnected");
    if (connected === "true") {
      toast.success("Facebook connected successfully");
      fetchChannels();
    }
    if (reconnected === "true") {
      toast.success("Facebook reconnected successfully");
      fetchChannels();
    }
  }, [searchParams, fetchChannels]);

  const handleConnect = () => {
    setConnecting(true);
    window.location.href = `${API_URL}/channels/facebook/connect`;
  };

  const handleDisconnect = async (channelId: string) => {
    setDisconnecting(channelId);
    try {
      const res = await api.put<ApiResponse<Channel>>(
        `/channels/facebook/${channelId}/disconnect`,
      );
      if (res.data.success) {
        toast.success("Channel disconnected");
        fetchChannels();
      }
    } catch {
      toast.error("Failed to disconnect channel");
    } finally {
      setDisconnecting(null);
    }
  };

  const handleReconnect = (channelId: string) => {
    window.location.href = `${API_URL}/channels/facebook/reconnect/${channelId}`;
  };

  const facebookChannels = channels.filter((ch) => ch.type === "facebook");
  const otherChannels = channels.filter((ch) => ch.type !== "facebook");

  return (
    <div className="mx-auto max-w-3xl space-y-8 p-6">
      <div>
        <h1 className="text-2xl font-bold">Connected Channels</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Connect your social media accounts to receive and reply to messages.
        </p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <FaFacebookMessenger className="size-6 text-blue-600" />
            <div>
              <CardTitle className="text-lg">Facebook Messenger</CardTitle>
              <p className="text-muted-foreground text-sm">
                Connect a Facebook Page to manage Messenger conversations
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-3">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          ) : facebookChannels.length > 0 ? (
            <div className="space-y-3">
              {facebookChannels.map((channel) => (
                <div
                  key={channel.id}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div className="flex items-center gap-3">
                    <FaFacebookMessenger className="size-5 text-blue-600" />
                    <div>
                      <p className="font-medium">{channel.name}</p>
                      <Badge
                        variant={
                          channel.status === "active"
                            ? "default"
                            : "secondary"
                        }
                        className="mt-0.5"
                      >
                        {channel.status === "active" ? "Connected" : "Disconnected"}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {channel.status === "disconnected" && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleReconnect(channel.id)}
                      >
                        Reconnect
                      </Button>
                    )}
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDisconnect(channel.id)}
                      disabled={disconnecting === channel.id}
                    >
                      {disconnecting === channel.id
                        ? "Disconnecting..."
                        : "Disconnect"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 py-6 text-center">
              <FaFacebookMessenger className="size-10 text-muted-foreground" />
              <div>
                <p className="font-medium">No Facebook Page connected</p>
                <p className="text-muted-foreground text-sm">
                  Connect your Facebook Page to start receiving messages
                </p>
              </div>
              <Button onClick={handleConnect} disabled={connecting}>
                {connecting ? "Connecting..." : "Connect Facebook Page"}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {otherChannels.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Other Channels</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {otherChannels.map((channel) => (
              <div
                key={channel.id}
                className="flex items-center justify-between rounded-lg border p-3"
              >
                <div className="flex items-center gap-3">
                  {channel.icon}
                  <div>
                    <p className="font-medium">{channel.name}</p>
                    <p className="text-muted-foreground text-sm">
                      {platformLabel[channel.type] || channel.type}
                    </p>
                  </div>
                </div>
                <Badge
                  variant={
                    channel.status === "active" ? "default" : "secondary"
                  }
                >
                  {channel.status === "active" ? "Connected" : "Disconnected"}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
