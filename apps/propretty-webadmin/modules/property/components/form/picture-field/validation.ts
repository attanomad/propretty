import { Property } from "@/app/(private)/properties/types";
import { z } from "zod";
import { MAX_MEDIA_COUNT, MIN_MEDIA_COUNT } from "./constants";

const schema = z
  .array(
    z.object({
      id: z.string().cuid(),
      url: z.string().url(),
      _isReady: z.boolean(),
    })
  )
  .min(MIN_MEDIA_COUNT)
  .max(MAX_MEDIA_COUNT);

type Schema = z.infer<typeof schema>;

export const pictureFieldValidation = {
  schema,
  defaultValue: [],
  convert(property: Property): Schema {
    return property.mediaList.map((m) => ({ ...m, _isReady: true }));
  },
  dataToForm(property: Property): Schema {
    return property.mediaList.map((m) => ({ ...m, _isReady: true }));
  },
  formToCreateVariables(field: Schema): string[] {
    return field ? field.filter((a) => a._isReady).map((a) => a.id) : [];
  },
  formToUpdateVariables(field: Schema): string[] {
    return field ? field.filter((a) => a._isReady).map((a) => a.id) : [];
  },
};
