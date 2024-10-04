import { Amenity } from "@/app/(private)/amenities/actions";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { findAmenities } from "@/lib/amenity/server-actions";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Control, useFormContext } from "react-hook-form";
import { toast } from "sonner";
import { FormSchema } from "../form-schema";
import { amenitiesFieldValidation, Schema } from "./validation";

export default function AmenitiesField({
  control,
}: {
  control: Control<FormSchema>;
}) {
  const { amenities, isLoading } = useInitAmenities();

  return isLoading || !amenities ? (
    <Loader2 className={cn("animate-spin")} />
  ) : amenities && amenities.length === 0 ? (
    <p>No anemities</p>
  ) : (
    amenities?.map((item) => (
      <FormField
        key={item.id}
        control={control}
        name={`amenityIndex.${item.id}`}
        render={({ field }) => (
          <FormItem className="flex items-center gap-4">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel className="text-sm font-normal !m-0">
              {item.name}
            </FormLabel>
            {/* {item.description && (
        <FormDescription>{item.description}</FormDescription>
      )} */}
            <FormMessage />
          </FormItem>
        )}
      />
    ))
  );
}

const useInitAmenities = () => {
  const { amenities, isLoading } = useAmenities();
  const { setValue, getValues } = useFormContext<FormSchema>();
  const existingIndex = getValues(amenitiesFieldValidation.formKey);

  useEffect(() => {
    if (!amenities) return;

    setValue(
      amenitiesFieldValidation.formKey,
      amenities.reduce<Schema>((obj, a) => {
        obj[a.id] = existingIndex[a.id] ?? false;

        return obj;
      }, {})
    );
  }, [amenities, existingIndex]);

  return {
    amenities,
    isLoading,
  };
};

const useAmenities = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [amenityList, setAmenityList] = useState<Amenity[] | null>(null);

  useEffect(() => {
    const fetchAmenities = async () => {
      setIsLoading(true);

      const { code, message, data } = await findAmenities();

      if (code !== 0) {
        toast.error(message, { richColors: true });
        setIsLoading(false);

        return;
      }

      if (data) {
        setAmenityList(data);
      }

      setIsLoading(false);
    };

    fetchAmenities();
  }, []);

  return { amenities: amenityList, isLoading: isLoading || !amenityList };
};
