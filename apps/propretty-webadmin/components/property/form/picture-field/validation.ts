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

export const pictureFieldValidation = {
  schema,
  defaultValue: [],
  convert(property: Property): z.infer<typeof schema> {
    return property.mediaList.map((m) => ({ ...m, _isReady: true }));
  },
};
