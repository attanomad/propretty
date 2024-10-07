"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/modules/auth/actions/auth.actions";
import Image from "next/image";
import Link from "next/link";
import LocaleSwitcher from "../i18n/locale-switcher";

export default function ProfileMenu() {
  const handleLogout = () => {
    logout();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full"
        >
          <Image
            src="/placeholder-user.jpg"
            width={36}
            height={36}
            alt="Avatar"
            className="overflow-hidden rounded-full"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/settings">Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem className="flex justify-center">
          <LocaleSwitcher />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <Button
          className="w-full"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
