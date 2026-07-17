"use client";

import { LogOut } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { navigation } from "@/config/navigation";
import { useAuthStore } from "@/store/auth-store";
import { removeTokenCookie } from "@/lib/cookies";

interface MobileDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function MobileDrawer({ open, onOpenChange }: MobileDrawerProps) {
  const clearAuth = useAuthStore((s) => s.clear);
  const sidebarItems = navigation.sidebar.filter(
    (item) => item.title !== "Logout",
  );

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-64 p-0">
        <SheetHeader className="p-4 pb-2">
          <SheetTitle>
            <div className="flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
                CN
              </div>
              <span className="text-sm font-semibold">CodexNepal</span>
            </div>
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-1 px-2 py-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <SheetClose key={item.title} asChild>
                <a
                  href={item.href}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                >
                  <Icon className="size-4" />
                  {item.title}
                </a>
              </SheetClose>
            );
          })}
        </nav>

        <Separator className="my-2" />

        <div className="px-2">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 rounded-md px-3 text-sm text-destructive hover:text-destructive"
              >
                <LogOut className="size-4" />
                Logout
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogMedia>
                  <LogOut />
                </AlertDialogMedia>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  You will be logged out of your account. This action cannot be
                  undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={async () => {
                    try {
                      await fetch("/api/auth/logout", { method: "POST" });
                    } catch {
                    } finally {
                      clearAuth();
                      removeTokenCookie();
                      window.location.href = "/auth/login";
                    }
                  }}
                >
                  Logout
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </SheetContent>
    </Sheet>
  );
}
