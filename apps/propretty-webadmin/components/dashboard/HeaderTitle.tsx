"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useHeaderStore } from "@/providers/header-store.provider";

export function HeaderTitle() {
  const title = useHeaderStore((state) => state.title);

  return title ? <h1>{title}</h1> : <Skeleton className="w-20 h-6" />;
}
