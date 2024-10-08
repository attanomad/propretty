import { FindTenantsQuery, Tenant, TenantWhereInput } from "@/gql/graphql";
import { getClient } from "@/lib/apollo-client";
import { ServerActionBaseResponse } from "@/lib/server-actions.types";
import { ApolloError, gql } from "@apollo/client";
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
  const { data: tenants } = await findTenants();

  return (
    <div>
      <h1>{t("title")}</h1>
      <TenantListTable tenants={tenants as Tenant[]} />
    </div>
  );
}

const findTenants = async (
  variables?: TenantWhereInput
): Promise<ServerActionBaseResponse<FindTenantsQuery["findTenants"]>> => {
  try {
    const { data } = await getClient().query<
      FindTenantsQuery,
      TenantWhereInput
    >({
      variables,
      query: gql`
        query FindTenants($where: TenantWhereInput) {
          findTenants(where: $where) {
            id
            nationalId
            firstName
            lastName
            gender
            createdAt
            updatedAt
          }
        }
      `,
    });

    return { code: 0, message: "Success", data: data?.findTenants };
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
};
