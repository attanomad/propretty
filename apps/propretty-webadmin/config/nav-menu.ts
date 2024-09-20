import { NavItemProps } from "@/components/nav-item";
import {
  CircleUser,
  Contact,
  File,
  House,
  LayoutDashboard,
  Settings,
} from "lucide-react";

export const topMenuItemList: NavItemProps[] = [
  { children: "Dashboard", icon: LayoutDashboard, path: "/" },
  { children: "Properties", icon: House, path: "/properties" },
  { children: "Amenities", icon: House, path: "/amenities" },
  { children: "Media", icon: File, path: "/media" },
  { children: "Contacts", icon: Contact, path: "/contacts" },
  { children: "Agents", icon: CircleUser, path: "/agents" },
];

export const bottomMenuItemList: NavItemProps[] = [
  { children: "Settings", icon: Settings, path: "/settings" },
];
