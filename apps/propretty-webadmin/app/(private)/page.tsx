import { PageTitle } from "@/components/dashboard/PageTitle";
import { getTranslations } from "next-intl/server";

export default async function DashboardPage() {
  const t = await getTranslations("DashboardPage");

  return (
    <div className="p-4">
      <h1>Home</h1>
      <PageTitle>{t("title")}</PageTitle>
    </div>
  );
}
