import { ReactNode } from "react";

export default function AmenitiesPageLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <div className="p-4">{children}</div>;
}
