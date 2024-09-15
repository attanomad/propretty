"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { bottomMenuItemList, topMenuItemList } from "@/config/nav-menu";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { PanelLeft } from "lucide-react";
import { useState } from "react";
import NavItem from "../nav-item";

const menuItemList = [...topMenuItemList, ...bottomMenuItemList];

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
    >
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="sm:hidden"
        >
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="sm:max-w-xs"
      >
        <VisuallyHidden asChild>
          <SheetTitle>Navigation Menu</SheetTitle>
        </VisuallyHidden>
        <VisuallyHidden asChild>
          <SheetDescription>Application main navigation menu</SheetDescription>
        </VisuallyHidden>

        <nav className="grid gap-6 text-lg font-medium">
          {menuItemList.map((m) => (
            <NavItem
              onClick={() => setOpen(false)}
              key={m.path}
              path={m.path}
              icon={m.icon}
              show={m.show}
              tooltip={m.tooltip}
            >
              {m.children}
            </NavItem>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
