"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { bottomMenuItemList, topMenuItemList } from "@/config/nav-menu";
import { useMutableSearchParams } from "@/hooks/mutable-search-params";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Nav from "./nav";

export default function Sidebar() {
  const t = useTranslations("Sidebar");
  const { isOpen, toggle } = useSidebar();
  const Icon = isOpen ? PanelLeftClose : PanelLeftOpen;

  return (
    <aside
      className={`inset-y-0 left-0 z-10 hidden flex-col border-r bg-background sm:flex shrink-0 transition-all ${isOpen ? "w-48" : "w-14"}`}
    >
      <Nav
        items={topMenuItemList.map((m) => ({
          ...m,
          show: isOpen ? "both" : "icon",
          tooltip: true,
        }))}
        className="flex flex-col items-center gap-4 px-2 sm:py-5"
      />
      <div className="mt-auto flex flex-col gap-4 px-2 sm:py-5">
        <Nav
          items={bottomMenuItemList.map((m) => ({
            ...m,
            show: isOpen ? "both" : "icon",
            tooltip: true,
          }))}
          className="flex flex-col items-center gap-4"
        />
        <div
          className={`flex flex-col gap-4 ${isOpen ? "items-end" : "items-center"}`}
        >
          <Tooltip>
            <TooltipTrigger
              asChild
              onClick={toggle}
            >
              <div
                className={`size-8 rounded-full flex items-center justify-center text-muted-foreground`}
              >
                <Icon className="size-5" />
              </div>
            </TooltipTrigger>
            <TooltipContent side="right">
              {t(isOpen ? "close" : "open")}
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </aside>
  );
}

const useSidebar = () => {
  const [searchParams, update] = useMutableSearchParams();
  const [isOpen, setIsOpen] = useState(searchParams.get("sidebar") === "1");
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((v) => !v);

  useEffect(() => {
    update({ sidebar: isOpen ? "1" : "0" });
  }, [open]);

  return { isOpen, open, close, toggle };
};
