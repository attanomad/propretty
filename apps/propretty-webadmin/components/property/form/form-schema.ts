import { Property } from "@/app/(private)/properties/types";
import {
  CreatePropertyVariables,
  UpdatePropertyVariables,
} from "@/lib/property/server-actions";
import {
  CommercialStatus,
  PropertyStatus,
  SupportedCurrenciesCount,
} from "@/lib/property/types";
import { z } from "zod";
import { amenitiesFieldValidation } from "./amenities-field/validation";
import { pictureFieldValidation } from "./picture-field/validation";

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().optional(),
  status: z.nativeEnum(PropertyStatus),
  commercialStatus: z.nativeEnum(CommercialStatus).optional(),
  priceList: z
    .array(
      z.object({
        currency: z.string(),
        price: z.coerce.number().multipleOf(0.01).nonnegative().min(0),
      })
    )
    .max(SupportedCurrenciesCount),
  uniqueCode: z.string().max(50).optional(),
  typeId: z.string().cuid(),
  mediaList: pictureFieldValidation.schema,
  [amenitiesFieldValidation.formKey]: amenitiesFieldValidation.schema,
});

export type FormSchema = z.infer<typeof formSchema>;

export const defaultFormValues: FormSchema = {
  name: "",
  description: "",
  status: PropertyStatus.Active,
  commercialStatus: CommercialStatus.AVAILABLE,
  priceList: [],
  typeId: "",
  uniqueCode: "",
  mediaList: pictureFieldValidation.defaultValue,
  [amenitiesFieldValidation.formKey]: amenitiesFieldValidation.defaultValue,
};

export const convertPropertyToForm = (property: Property): FormSchema => {
  const {
    name,
    description,
    commercialStatus,
    priceList,
    status,
    uniqueCode,
    type,
  } = property;

  return {
    name,
    description,
    commercialStatus,
    priceList,
    status,
    uniqueCode,
    typeId: type.id,
    mediaList: pictureFieldValidation.convert(property),
    [amenitiesFieldValidation.formKey]:
      amenitiesFieldValidation.propertyToSchema(property),
  };
};

export const convertFormToCreateVariables = (
  form: FormSchema
): CreatePropertyVariables => {
  return {
    ...form,
    mediaList: form.mediaList
      ? pictureFieldValidation.formToUpdateVariables(form.mediaList)
      : undefined,
    [amenitiesFieldValidation.gqlKey]: form[amenitiesFieldValidation.formKey]
      ? amenitiesFieldValidation.formToUpdateVariables(
          form[amenitiesFieldValidation.formKey]
        )
      : undefined,
  };
};

export const convertFormToUpdateVariables = (
  form: FormSchema
): UpdatePropertyVariables => {
  return {
    ...form,
    mediaList: form.mediaList
      ? pictureFieldValidation.formToUpdateVariables(form.mediaList)
      : undefined,
    [amenitiesFieldValidation.gqlKey]: form[amenitiesFieldValidation.formKey]
      ? amenitiesFieldValidation.formToUpdateVariables(
          form[amenitiesFieldValidation.formKey]
        )
      : undefined,
  };
};
