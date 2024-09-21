"use client";

import { Property, PropertyType } from "@/app/(private)/properties/types";
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
import { saveMediaFile } from "@/lib/media/server-actions";
import { findPropertyTypes } from "@/lib/property-type/server-actions";
import { createProperty } from "@/lib/property/server-actions";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import {
  ControllerRenderProps,
  useFieldArray,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  uniqueCode: z.string().min(1).max(50).optional(),
  typeId: z.string().uuid(),
  mediaList: z
    .array(
      z.object({
        id: z.string().uuid(),
        url: z.string().url(),
      })
    )
    .min(1),
});

type FormSchema = z.infer<typeof formSchema>;

const defaultFormValues: z.infer<typeof formSchema> = {
  name: "",
  typeId: "",
  uniqueCode: "",
  mediaList: [],
};

const propertyToForm = ({
  name,
  uniqueCode,
  type,
  mediaList,
}: Property): z.infer<typeof formSchema> => {
  return {
    name,
    uniqueCode,
    typeId: type.id,
    mediaList,
  };
};

export default function PropertyForm({ property }: { property?: Property }) {
  //   console.log("property: ", property);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: property ? propertyToForm(property) : defaultFormValues,
    mode: "onChange",
  });
  const { control } = form;
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const result = await createProperty({
      ...values,
      mediaList: values.mediaList.map((m) => m.id),
    });

    console.log("result: ", result);
  }

  function onInvalid(errors: any) {
    console.log("errors: ", errors);
  }

  //   console.log("mediaList: ", mediaList);

  return (
    <Form {...form}>
      <form
        // action={saveProperty}
        onSubmit={form.handleSubmit(onSubmit, onInvalid)}
        className="space-y-8"
      >
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

        {/* {mediaList.map((f, index) => ( */}
        <FormField
          // key={f.id}
          control={form.control}
          // name="file"
          name={`mediaList`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Picture</FormLabel>
              <FormControl>
                <MediaInput
                  form={form}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Images and/or videos of the property
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* ))} */}

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

const MediaInput = ({
  form,
  onChange,
  value,
  ...field
}: {
  form: UseFormReturn<FormSchema>;
} & ControllerRenderProps<FormSchema>) => {
  const { fields, replace } = useFieldArray<FormSchema, "mediaList">({
    control: form.control,
    name: "mediaList",
  });

  async function handleChange(e: ChangeEvent<HTMLInputElement>) {
    console.log("change: ", e);
    // onChange(e);

    if (!e.target.files) {
      onChange(e);

      return;
    }

    const promises = [];

    for (const index in [...e.target.files]) {
      const file = e.target.files[index];
      const formData = new FormData();

      console.log("file: ", file);
      formData.append("file", file);

      promises.push(
        saveMediaFile(formData).then((res) => {
          if (res.code !== 0) {
            throw new Error(`Failed to upload image: ${res.message}`);
          }

          console.log("media file saved", res);

          return res.data!;
          //   form.setValue(field.name, res.data!.id, { shouldValidate: true });
          //   const urls = urlList.slice();
          //   urls[index] = res.data!.url;
          //   setUrlList(urls);
        })
      );
    }

    const responseList = await Promise.all(promises);

    console.log("responseList: ", responseList);

    replace(responseList);

    // form.formState.
    // onChange(e);
  }

  return (
    <div>
      {fields.map((field) => (
        <Image
          key={field.id}
          src={field.url}
          alt="image"
          width={100}
          height={100}
        />
      ))}
      <Input
        type="file"
        {...field}
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
};
