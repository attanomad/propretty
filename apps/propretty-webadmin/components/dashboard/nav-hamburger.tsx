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
import Nav from "../nav";

const menuItemList = [...topMenuItemList, ...bottomMenuItemList];

export default function NavHamburger() {
  return (
    <Sheet>
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

        <Nav
          items={menuItemList.map((m) => ({ ...m, show: "both" }))}
          className="grid gap-6 text-lg font-medium"
        />
      </SheetContent>
    </Sheet>
  );
}
