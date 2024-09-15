import { ReactNode } from "react";

export default function SettingsPageLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <div className="p-4">{children}</div>;
}
