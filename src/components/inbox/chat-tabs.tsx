"use client";

import { ChevronRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { navigation } from "@/config/navigation";

interface ChatTabsProps {
  value: string;
  onValueChange: (value: string) => void;
}

export default function ChatTabs({ value, onValueChange }: ChatTabsProps) {
  return (
    <div className="relative border-b">
      <ScrollArea className="w-full">
        <Tabs value={value} onValueChange={onValueChange}>
          <TabsList variant="line" className="w-full justify-start rounded-none bg-transparent px-4">
            {navigation.navbar.map((tab) => {
              const Icon = tab.icon;
              const isActive = value === tab.title;
              return (
                <TabsTrigger
                  key={tab.title}
                  value={tab.title}
                  className="gap-1.5 px-3 py-2 text-xs"
                >
                  <Icon
                    className={
                      isActive && tab.title !== "All"
                        ? ""
                        : "text-muted-foreground"
                    }
                    style={
                      isActive && tab.title !== "All"
                        ? {
                            color:
                              tab.title === "WhatsApp"
                                ? "#25D366"
                                : tab.title === "Messenger"
                                  ? "#0084FF"
                                  : tab.title === "Instagram"
                                    ? "#D4537E"
                                    : undefined,
                          }
                        : undefined
                    }
                  />
                  {tab.title}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex w-8 items-center justify-center bg-gradient-to-l from-background to-transparent md:hidden">
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
      </div>
    </div>
  );
}
