"use client";

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
import { FurnishingType } from "@propretty/common";
import { HTMLProps } from "react";
import { useFormContext } from "react-hook-form";
import { FormSchema } from "./form-schema";

export default function FurnishingField(props: HTMLProps<HTMLDivElement>) {
  const { control } = useFormContext<FormSchema>();

  return (
    <FormField
      control={control}
      name="furnishing"
      render={({ field: { onChange, value } }) => (
        <FormItem {...props}>
          <FormLabel>Furnishing</FormLabel>
          <Select
            onValueChange={onChange}
            defaultValue={value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a property type" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {Object.values(FurnishingType).map((v) => (
                <SelectItem
                  key={v}
                  value={v}
                >
                  {v}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormDescription>The property furnishing info</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
