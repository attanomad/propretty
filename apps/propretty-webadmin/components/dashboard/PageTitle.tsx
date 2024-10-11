"use client";

import { useHeaderStore } from "@/providers/header-store.provider";

export const PageTitle = ({ children }: { children: string }) => {
  const setTitle = useHeaderStore((state) => state.setTitle);

  setTitle(children);

  return null;
};
