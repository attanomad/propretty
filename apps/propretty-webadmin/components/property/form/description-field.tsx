import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { HTMLProps } from "react";
import { Control } from "react-hook-form";
import { FormSchema } from "./form-schema";

export default function DescriptionField({
  control,
  ...rest
}: {
  control: Control<FormSchema>;
} & HTMLProps<HTMLDivElement>) {
  return (
    <FormField
      control={control}
      name="description"
      render={({ field }) => (
        <FormItem {...rest}>
          <FormLabel>Description</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Property description"
              {...field}
            />
          </FormControl>
          <FormDescription>The property decription</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
