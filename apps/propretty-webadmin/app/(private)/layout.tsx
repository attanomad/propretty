import Header from "@/components/dashboard/header";
import Sidebar from "@/components/sidebar";
import { TooltipProvider } from "@radix-ui/react-tooltip";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <TooltipProvider>
        <Sidebar />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <Header />
          <main>{children}</main>
        </div>
      </TooltipProvider>
    </div>
  );
}
