import { ReactNode } from "react";

export default function PropertiesPageLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <div className="p-4">{children}</div>;
}
