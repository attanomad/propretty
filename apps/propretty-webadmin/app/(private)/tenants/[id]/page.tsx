import { FindTenantByIdQuery, TenantWhereUniqueInput } from "@/gql/graphql";
import { getClient } from "@/lib/apollo-client";
import { ServerActionBaseResponse } from "@/lib/server-actions.types";
import { ApolloError, gql } from "@apollo/client";

export default async function ViewTenant({
  params: { id },
}: {
  params: { id: string };
}) {
  const tenant = await findTenantById({ id });

  if (!tenant) {
    return <h1>The tenant could not be found</h1>;
  }

  return (
    <div>
      <h1>Tenant</h1>
      <pre>{JSON.stringify(tenant, null, 2)}</pre>
    </div>
  );
}

const findTenantById = async (
  variables?: TenantWhereUniqueInput
): Promise<
  ServerActionBaseResponse<FindTenantByIdQuery["findUniqueTenant"]>
> => {
  try {
    const { data } = await getClient().query<
      FindTenantByIdQuery,
      TenantWhereUniqueInput
    >({
      variables,
      query: gql`
        query FindTenantById($id: String!) {
          findUniqueTenant(where: { id: $id }) {
            id
            nationalId
            firstName
          }
        }
      `,
    });

    return { code: 0, message: "Success", data: data?.findUniqueTenant };
  } catch (e) {
    console.log(`Failed to find tenant by ID: `, JSON.stringify(e));

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
