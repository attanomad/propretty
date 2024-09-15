"use client";

import { LucideProps } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  forwardRef,
  ForwardRefExoticComponent,
  HTMLProps,
  RefAttributes,
} from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export interface NavItemProps extends HTMLProps<HTMLAnchorElement> {
  path: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  show?: "icon" | "title" | "both";
  tooltip?: boolean;
}

const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ path, icon: Icon, show, tooltip, children, className, ...rest }, ref) => {
    const currentPathname = usePathname();
    const active = path === currentPathname;
    const showIcon = !show || show === "icon" || show === "both";
    const showTitle = !show || show === "title" || show === "both";
    const link = (
      <Link
        ref={ref}
        {...rest}
        href={path}
        className={`w-full flex items-center gap-4 transition-colors md:h-8 ${className || ""}${active ? " text-foreground" : " text-muted-foreground"}`}
      >
        {showIcon && (
          <div
            className={`h-8 w-8 rounded-full flex items-center justify-center${active ? " bg-foreground text-background" : " hover:text-foreground"}`}
          >
            <Icon className="w-5 h-5" />
          </div>
        )}
        {showTitle && children}
      </Link>
    );

    return !tooltip ? (
      link
    ) : (
      <Tooltip>
        <TooltipTrigger asChild>{link}</TooltipTrigger>
        <TooltipContent side="right">{children}</TooltipContent>
      </Tooltip>
    );
  }
);

export default NavItem;
