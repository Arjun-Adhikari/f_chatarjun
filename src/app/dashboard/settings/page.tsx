import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Bell, Shield } from "lucide-react";

const settingsLinks = [
  {
    title: "Account",
    href: "/dashboard/settings/account",
    icon: User,
    description: "Manage your profile and personal information",
  },
  {
    title: "Connected Channels",
    href: "/dashboard/settings/channels",
    icon: Bell,
    description: "Connect Facebook, Instagram, and WhatsApp accounts",
  },
  {
    title: "Security",
    href: "/dashboard/settings/security",
    icon: Shield,
    description: "Password and authentication settings",
  },
];

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Manage your account settings and connected channels.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {settingsLinks.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.title} href={item.href}>
              <Card className="transition-colors hover:bg-muted/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon className="size-5 text-muted-foreground" />
                    <CardTitle className="text-sm">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-xs">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
