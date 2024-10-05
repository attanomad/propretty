import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PropertyType } from "@/gql/graphql";
import { cn } from "@/lib/utils";
import { findPropertyTypes } from "@/modules/property-type/actions/property-type.actions";
import { SelectProps } from "@radix-ui/react-select";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Control } from "react-hook-form";
import { toast } from "sonner";
import { FormSchema } from "./form-schema";

export default function PropertyTypeField({
  control,
}: {
  control: Control<FormSchema>;
}) {
  return (
    <FormField
      control={control}
      name="typeId"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Property Type</FormLabel>
          <PropertyTypeSelector
            onValueChange={field.onChange}
            defaultValue={field.value}
          />
          <FormDescription>The property type</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

const PropertyTypeSelector = ({ onValueChange, defaultValue }: SelectProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [propertyTypes, setPropertyTypes] = useState<PropertyType[] | null>(
    null
  );

  useEffect(() => {
    const fetchPropTypes = async () => {
      setIsLoading(true);

      const { code, message, data } = await findPropertyTypes();

      if (code !== 0) {
        toast.error(message, { richColors: true });
        setIsLoading(false);

        return;
      }

      if (data) {
        setPropertyTypes(data);
      }

      setIsLoading(false);
    };

    fetchPropTypes();
  }, [setIsLoading]);

  return isLoading || !propertyTypes ? (
    <Loader2 className={cn("animate-spin")} />
  ) : (
    <Select
      onValueChange={onValueChange}
      defaultValue={defaultValue}
    >
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder="Select a property type" />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {propertyTypes.map((p) => (
          <SelectItem
            key={p.id}
            value={p.id}
          >
            {p.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
