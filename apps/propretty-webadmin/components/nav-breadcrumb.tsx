"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

const breadcrumbLabelByPath: Record<string, string> = {
  "": "Home",
  properties: "Properties",
  settings: "Settings",
};

export default function NavBreadcrumb() {
  const pathname = usePathname();
  const pathList = pathname === "/" ? [""] : pathname.split("/");

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {pathList.map((p, idx) => {
          if (!breadcrumbLabelByPath[p]) {
            breadcrumbLabelByPath[p] = p[0].toUpperCase() + p.slice(1);
          }

          const label = breadcrumbLabelByPath[p];

          return (
            <>
              <BreadcrumbItem key={p}>
                <BreadcrumbLink asChild>
                  <Link href={p}>{label}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {idx < pathList.length - 1 && <BreadcrumbSeparator />}
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
