import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { FormSchema } from "./form-schema";

export default function UniqueCodeField({
  control,
}: {
  control: Control<FormSchema>;
}) {
  return (
    <FormField
      control={control}
      name="uniqueCode"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Unique Code</FormLabel>
          <FormControl>
            <Input
              placeholder="Property Unique Code"
              {...field}
            />
          </FormControl>
          <FormDescription>For human-readable identification</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
