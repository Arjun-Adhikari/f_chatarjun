"use client"

import { navigation } from "@/constants/navigation";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-2">
      {navigation.sidebar.map((item) => (
        <Link key={item.title} href={item.href} className="flex items-center gap-2">
          <item.icon className="size-5" />
          <span>{item.title}</span>
        </Link>
      ))}
    </aside>
  );
}
