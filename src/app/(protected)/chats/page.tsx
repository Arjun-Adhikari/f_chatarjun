"use client";

import { useState } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppSidebar from "@/components/inbox/app-sidebar";
import ChatHeader from "@/components/inbox/chat-header";
import ChatTabs from "@/components/inbox/chat-tabs";
import ChatList from "@/components/inbox/chat-list";
import MobileDrawer from "@/components/inbox/mobile-drawer";

export default function ChatsPage() {
  const [platform, setPlatform] = useState("All");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <TooltipProvider>
      <SidebarProvider defaultOpen={true}>
        <AppSidebar />
        <SidebarInset>
          <ChatHeader onMenuClick={() => setMobileOpen(true)} />
          <ChatTabs value={platform} onValueChange={setPlatform} />
          <div className="flex-1 overflow-auto">
            <ChatList platformFilter={platform} />
          </div>
        </SidebarInset>
        <MobileDrawer open={mobileOpen} onOpenChange={setMobileOpen} />
      </SidebarProvider>
    </TooltipProvider>
  );
}
