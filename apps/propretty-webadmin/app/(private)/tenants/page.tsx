import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import TenantListTable from "./TenantListTable";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("TenantsPage");

  return {
    title: t("title"),
  };
}

export default async function TenantsPage() {
  const t = await getTranslations("TenantsPage");

  return (
    <div>
      <h1>{t("title")}</h1>
      <TenantListTable  />
    </div>
  );
}

;
