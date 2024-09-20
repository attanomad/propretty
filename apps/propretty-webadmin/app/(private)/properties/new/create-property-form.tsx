"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PropertyType } from "../types";
import { createProperty, findPropertyTypes } from "./actions";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  uniqueCode: z.string().min(2).max(50).optional(),
  typeId: z.string(),
});

export default function CreatePropertyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const result = await createProperty(values);

    console.log("result: ", result);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
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

        <FormField
          control={form.control}
          name="uniqueCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Code</FormLabel>
              <FormControl>
                <Input
                  placeholder="Property Code"
                  {...field}
                />
              </FormControl>
              <FormDescription>The property unique code</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="typeId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Property Type</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a property type" />
                  </SelectTrigger>
                </FormControl>
                <PropertyTypeOptions />
              </Select>
              <FormDescription>The property type</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

const PropertyTypeOptions = () => {
  const [propertyTypes, setPropertyTypes] = useState<PropertyType[]>([]);

  useEffect(() => {
    const fetchPropTypes = async () => {
      const foundPropTypes = await findPropertyTypes();
      setPropertyTypes(foundPropTypes);
    };

    fetchPropTypes();
  }, []);

  return (
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
  );
};
