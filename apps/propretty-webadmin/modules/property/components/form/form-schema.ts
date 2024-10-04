import { Property } from "@/app/(private)/properties/types";
import {
  CommercialStatus,
  FurnishingType,
  PropertyStatus,
  SupportedAreaMeasurementUnit,
  SupportedCurrenciesCount,
  SupportedCurrency,
  convertAreaMeasurementUnit,
} from "@propretty/common";
import { z } from "zod";
import {
  CreatePropertyVariables,
  UpdatePropertyVariables,
} from "../../actions/property";
import { amenitiesFieldValidation } from "./amenities-field/validation";
import { pictureFieldValidation } from "./picture-field/validation";

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().optional(),
  status: z.nativeEnum(PropertyStatus),
  commercialStatus: z.nativeEnum(CommercialStatus).optional(),
  furnishing: z.nativeEnum(FurnishingType).optional(),
  priceList: z
    .array(
      z.object({
        currency: z
          .nativeEnum(SupportedCurrency)
          .default(SupportedCurrency.USD),
        price: z.coerce.number().multipleOf(0.01).nonnegative().min(0),
      })
    )
    .max(SupportedCurrenciesCount),
  uniqueCode: z.string().max(50).optional(),
  typeId: z.string().cuid(),
  mediaList: pictureFieldValidation.schema,
  [amenitiesFieldValidation.formKey]: amenitiesFieldValidation.schema,
  landSize: z
    .object({
      value: z.number({ coerce: true }),
      unit: z
        .nativeEnum(SupportedAreaMeasurementUnit)
        .default(SupportedAreaMeasurementUnit.SQM),
    })
    .optional(),
  floorSize: z
    .object({
      value: z.number({ coerce: true }),
      unit: z
        .nativeEnum(SupportedAreaMeasurementUnit)
        .default(SupportedAreaMeasurementUnit.SQM),
    })
    .optional(),
  location: z
    .object({
      id: z.string().cuid().optional().default(""),
      address: z.string().optional().default(""),
      subdistrict: z.string().optional().default(""),
      district: z.string().optional().default(""),
      province: z.string().optional().default(""),
      country: z.string().optional().default(""),
      postalCode: z.string().length(5).optional().default(""),
      latitude: z.number().optional(),
      longitude: z.number().optional(),
    })
    .optional(),
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
  landSize: { value: 0, unit: SupportedAreaMeasurementUnit.SQM },
  floorSize: { value: 0, unit: SupportedAreaMeasurementUnit.SQM },
  // location: { latitude: 12.727345, longitude: 100.890256 },
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
    landSize,
    floorSize,
    location,
  } = property;

  return {
    name,
    description,
    commercialStatus,
    priceList,
    status,
    uniqueCode,
    location: location
      ? {
          ...(Object.fromEntries(
            Object.entries(location).map(([key, value]) => [key, value ?? ""])
          ) as NonNullable<FormSchema["location"]>),
          latitude: location.latitude
            ? parseFloat(location.latitude)
            : undefined,
          longitude: location.longitude
            ? parseFloat(location.longitude)
            : undefined,
        }
      : undefined,
    landSize: { value: landSize || 0, unit: SupportedAreaMeasurementUnit.SQM },
    floorSize: {
      value: floorSize || 0,
      unit: SupportedAreaMeasurementUnit.SQM,
    },
    typeId: type.id,
    mediaList: pictureFieldValidation.convert(property),
    [amenitiesFieldValidation.formKey]:
      amenitiesFieldValidation.propertyToSchema(property),
  };
};

export const convertFormToCreateVariables = (
  form: FormSchema
): CreatePropertyVariables => {
  const { landSize, floorSize, location, ...rest } = form;
  return {
    ...rest,
    landSize:
      landSize && landSize.value > 0
        ? convertAreaMeasurementUnit(
            landSize.value,
            landSize.unit,
            SupportedAreaMeasurementUnit.SQM
          )
        : undefined,
    floorSize:
      floorSize && floorSize.value > 0
        ? convertAreaMeasurementUnit(
            floorSize.value,
            floorSize.unit,
            SupportedAreaMeasurementUnit.SQM
          )
        : undefined,
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
  const { landSize, floorSize, ...rest } = form;

  return {
    ...rest,
    landSize:
      landSize && landSize.value > 0
        ? convertAreaMeasurementUnit(
            landSize.value,
            landSize.unit,
            SupportedAreaMeasurementUnit.SQM
          )
        : undefined,
    floorSize:
      floorSize && floorSize.value > 0
        ? convertAreaMeasurementUnit(
            floorSize.value,
            floorSize.unit,
            SupportedAreaMeasurementUnit.SQM
          )
        : undefined,
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
