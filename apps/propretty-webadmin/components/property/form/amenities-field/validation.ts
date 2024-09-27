import { Property } from "@/app/(private)/properties/types";
import { z } from "zod";

const schema = z.array(z.string().cuid()).optional();

type Schema = z.infer<typeof schema>;

export const amenitiesFieldValidation = {
  schema,
  defaultValue: [],
  dataToForm(property: Property): Schema {
    return property.amenities.map(({ id }) => id);
  },
  formToCreateVariables(field: Schema): string[] {
    return field ?? [];
  },
  formToUpdateVariables(field: Schema): string[] {
    return field ?? [];
  },
};
