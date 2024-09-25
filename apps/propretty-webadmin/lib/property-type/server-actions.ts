"use server";

import { PropertyType } from "@/app/(private)/properties/types";
import { getClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";
import { ServerActionBaseResponse } from "../server-actions.types";

export async function findPropertyTypes(): Promise<
  ServerActionBaseResponse<PropertyType[]>
> {
  try {
    const { data } = await getClient().query<{ propertyTypes: PropertyType[] }>(
      {
        query: gql`
          query {
            propertyTypes {
              id
              name
              description
            }
          }
        `,
      }
    );

    return { code: 0, message: "success", data: data.propertyTypes };
  } catch (e) {
    console.log(`Failed to find property types: `, JSON.stringify(e));

    return { code: 1, message: "something went wrong" };
  }

  // console.log("gql data: ", data);
}
