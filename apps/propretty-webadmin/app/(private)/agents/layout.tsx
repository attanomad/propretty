import { ReactNode } from "react";

export default function AgentsPageLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <div className="p-4">{children}</div>;
}
