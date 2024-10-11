"use client";

import { bottomMenuItemList, topMenuItemList } from "@/config/nav-menu";
import Nav from "./nav";

export default function Sidebar() {
  return (
    <aside className="inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex shrink-0">
      <Nav
        items={topMenuItemList.map((m) => ({
          ...m,
          show: "icon",
          tooltip: true,
        }))}
        className="flex flex-col items-center gap-4 px-2 sm:py-5"
      />

      <Nav
        items={bottomMenuItemList.map((m) => ({
          ...m,
          show: "icon",
          tooltip: true,
        }))}
        className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5"
      />
    </aside>
  );
}
