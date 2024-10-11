"use client";

import { createHeaderStore, HeaderStore } from "@/stores/header-store";
import { createContext, ReactNode, useContext, useRef } from "react";
import { useStore } from "zustand";

export type HeaderStoreApi = ReturnType<typeof createHeaderStore>;

export const HeaderStoreContext = createContext<HeaderStoreApi | undefined>(
  undefined
);

export const HeaderStoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<HeaderStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createHeaderStore();
  }

  return (
    <HeaderStoreContext.Provider value={storeRef.current}>
      {children}
    </HeaderStoreContext.Provider>
  );
};

export const useHeaderStore = <T,>(selector: (store: HeaderStore) => T) => {
  const headerStoreContext = useContext(HeaderStoreContext);

  if (!headerStoreContext)
    throw new Error(`useHeaderStore must be used withing HeaderStoreProvider`);

  return useStore(headerStoreContext, selector);
};
