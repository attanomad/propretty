import { NavItemProps } from "@/components/nav-item";
import { House, LayoutDashboard, Settings, ShoppingCart } from "lucide-react";

export const topMenuItemList: NavItemProps[] = [
  { children: "Dashboard", icon: LayoutDashboard, path: "/" },
  { children: "Properties", icon: House, path: "/properties" },
  { children: "Orders", icon: ShoppingCart, path: "/orders" },
];

export const bottomMenuItemList: NavItemProps[] = [
  { children: "Settings", icon: Settings, path: "/settings" },
];
