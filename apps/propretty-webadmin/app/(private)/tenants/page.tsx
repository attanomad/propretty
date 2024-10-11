import {
  FindTenantsDocument,
  FindTenantsQuery,
  FindTenantsQueryVariables,
} from "@/gql/graphql";
import { getClient } from "@/lib/apollo-client";
import { ServerActionBaseResponse } from "@/lib/server-actions.types";
import { ApolloError } from "@apollo/client";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import TenantListTable from "./TenantListTable";
import { searchParamsToPagination, toURLSearchParams } from "./utils";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("TenantsPage");

  return {
    title: t("title"),
  };
}

export default async function TenantsPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[]>;
}) {
  const { skip, take } = searchParamsToPagination(
    toURLSearchParams(searchParams || {})
  );
  const t = await getTranslations("TenantsPage");
  const { code, message, data } = await findTenants({ take, skip });

  if (code !== 0) throw new Error(message);

  return (
    <div>
      <h1>{t("title")}</h1>
      <TenantListTable data={data!} />
    </div>
  );
}

async function findTenants(
  variables?: FindTenantsQueryVariables
): Promise<
  ServerActionBaseResponse<FindTenantsQuery["findManyAndCountTenants"]>
> {
  try {
    const { data } = await getClient().query<
      FindTenantsQuery,
      FindTenantsQueryVariables
    >({
      variables,
      query: FindTenantsDocument,
    });

    return { code: 0, message: "success", data: data.findManyAndCountTenants };
  } catch (e) {
    console.log(`Failed to find tenants: `, JSON.stringify(e));

    let code: number | null = null;
    let message: string = "";

    if (e instanceof ApolloError) {
      if (e.graphQLErrors.length > 0) {
        message = e.graphQLErrors[0].message || "GraphQL error occurred";
      }

      // Handle network error
      if (e.networkError) {
        message = "Network error occurred";
      }
    } else {
      // If it's not an ApolloError, handle it as a generic error
      console.log("Unexpected Error: ", e);
      message = "Unexpected error occurred";
    }

    return { code: code ?? 500, message: message || "something went wrong" };
  }
}
