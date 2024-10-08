import { NavItemProps } from "@/components/nav-item";
import {
  CircleUser,
  Contact,
  File,
  Handshake,
  House,
  LandPlot,
  LayoutDashboard,
  Settings,
  UserRound,
} from "lucide-react";

export const topMenuItemList: NavItemProps[] = [
  { children: "Dashboard", icon: LayoutDashboard, path: "/" },
  { children: "Properties", icon: LandPlot, path: "/properties" },
  { children: "Amenities", icon: House, path: "/amenities" },
  { children: "Media", icon: File, path: "/media" },
  { children: "Contacts", icon: Contact, path: "/contacts" },
  { children: "Agents", icon: CircleUser, path: "/agents" },
  { children: "Tenants", icon: UserRound, path: "/tenants" },
  { children: "Leases", icon: Handshake, path: "/leases" },
];

export const bottomMenuItemList: NavItemProps[] = [
  { children: "Settings", icon: Settings, path: "/settings" },
];
