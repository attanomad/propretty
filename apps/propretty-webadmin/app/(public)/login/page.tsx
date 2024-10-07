import LocaleSwitcher from "@/components/i18n/locale-switcher";
import LoginForm from "@/modules/auth/components/login-form";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("LoginPage");

  return {
    title: t("title"),
    description: "Manage your properties with ease",
  };
}

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <LoginForm />
      <LocaleSwitcher />
    </div>
  );
}
