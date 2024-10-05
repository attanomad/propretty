import { Property } from "@/gql/graphql";
import { z } from "zod";

const schema = z.record(z.string().cuid(), z.boolean());

export type Schema = z.infer<typeof schema>;

export const amenitiesFieldValidation = {
  formKey: "amenityIndex" as const,
  gqlKey: "amenityIds" as const,
  schema,
  defaultValue: {},
  propertyToSchema(property: Property): Schema {
    return property.amenities.reduce<Schema>((obj, a) => {
      obj[a.id] = true;

      return obj;
    }, {});
  },
  formToCreateVariables(field: Schema): string[] {
    return Object.entries(field)
      .filter(([k, v]) => v)
      .map(([k]) => k);
  },
  formToUpdateVariables(field: Schema): string[] {
    return Object.entries(field)
      .filter(([k, v]) => v)
      .map(([k]) => k);
  },
};
