import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { HTMLProps } from "react";
import { Control } from "react-hook-form";
import { FormSchema } from "./form-schema";

export default function NameField({
  control,
  ...rest
}: {
  control: Control<FormSchema>;
} & HTMLProps<HTMLDivElement>) {
  return (
    <FormField
      control={control}
      name="name"
      render={({ field }) => (
        <FormItem {...rest}>
          <FormLabel>Name</FormLabel>
          <FormControl>
            <Input
              placeholder="Property name"
              {...field}
            />
          </FormControl>
          <FormDescription>The property name</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
