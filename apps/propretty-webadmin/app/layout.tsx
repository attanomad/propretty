import { ApolloWrapper } from "@/lib/apollo-wrapper";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Propretty Admin",
  description: "Manage your properties with ease",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ApolloWrapper>
            <AntdRegistry>{children}</AntdRegistry>
          </ApolloWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
