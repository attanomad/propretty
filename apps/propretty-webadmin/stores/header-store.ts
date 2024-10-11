import { createStore } from "zustand/vanilla";

export interface HeaderState {
  title?: string;
}

export interface HeaderActions {
  setTitle: (title: string) => void;
}

export type HeaderStore = HeaderState & HeaderActions;

export const defaultInitialState: HeaderState = { title: "" };
export const createHeaderStore = (
  initState: HeaderState = defaultInitialState
) => {
  return createStore<HeaderStore>()((set) => ({
    ...initState,
    setTitle: (title) => set(() => ({ title })),
  }));
};
