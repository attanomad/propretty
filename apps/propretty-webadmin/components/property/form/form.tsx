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
import { createProperty, updateProperty } from "@/lib/property/server-actions";
import { PropertyStatus } from "@/lib/property/types";
import { ServerActionBaseResponse } from "@/lib/server-actions.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectProps } from "@radix-ui/react-select";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import {
  ControllerRenderProps,
  useFieldArray,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  status: z.nativeEnum(PropertyStatus),
  uniqueCode: z.string().max(50).optional(),
  typeId: z.string().cuid(),
  mediaList: z
    .array(
      z.object({
        id: z.string().cuid(),
        url: z.string().url(),
      })
    )
    .min(1),
});

type FormSchema = z.infer<typeof formSchema>;

const defaultFormValues: z.infer<typeof formSchema> = {
  name: "",
  status: PropertyStatus.Active,
  typeId: "",
  uniqueCode: "",
  mediaList: [],
};

const propertyToForm = ({
  name,
  status,
  uniqueCode,
  type,
  mediaList,
}: Property): z.infer<typeof formSchema> => {
  return {
    name,
    status,
    uniqueCode,
    typeId: type.id,
    mediaList,
  };
};

export default function PropertyForm({ property }: { property?: Property }) {
  //   console.log("property: ", property);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: property ? propertyToForm(property) : defaultFormValues,
    mode: "onChange",
  });
  const isUpdate = !!property;
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const data = {
      ...values,
      mediaList: values.mediaList.map((m) => m.id),
    };
    let res: ServerActionBaseResponse<Property>;

    if (isUpdate) {
      res = await updateProperty(property.id, data);

      if (res.code === 0) {
        toast.success(`Product Updated`, {
          position: "top-center",
          richColors: true,
        });
      }

      toast.error(`Failed to update property: ${res.message}`, {
        richColors: true,
      });
    } else {
      res = await createProperty(data);

      if (res.code === 0 && res.data) {
        router.push(`/properties/${res.data.id}`);

        return;
      }

      toast.error(`Failed to create property: ${res.message}`, {
        richColors: true,
      });
    }
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

        <FormField
          control={form.control}
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

        <FormField
          control={form.control}
          name={`status`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select property status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(PropertyStatus).map((s) => (
                    <SelectItem
                      key={s}
                      value={s}
                    >
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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

        <Button type="submit">{isUpdate ? "Update" : "Create"}</Button>
      </form>
    </Form>
  );
}

const PropertyTypeSelector = ({ onValueChange, value }: SelectProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [propertyTypes, setPropertyTypes] = useState<PropertyType[]>([]);

  useEffect(() => {
    const fetchPropTypes = async () => {
      setIsLoading(true);
      console.log("finding property types...");

      const { code, message, data } = await findPropertyTypes();

      if (code !== 0) {
        toast.error(message, { richColors: true });
        setIsLoading(false);

        return;
      }

      if (data) {
        setPropertyTypes(data);
      }

      console.log("finished finding property types...");
      setIsLoading(false);
    };

    fetchPropTypes();
  }, [setIsLoading]);

  console.log(`isLoading = ${isLoading}`);

  return isLoading ? (
    <Loader2 />
  ) : (
    <Select
      onValueChange={onValueChange}
      defaultValue={value}
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

// const PropertyTypeOptions = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [propertyTypes, setPropertyTypes] = useState<PropertyType[]>([]);

//   useEffect(() => {
//     const fetchPropTypes = async () => {
//       setIsLoading(true);

//       const { code, message, data } = await findPropertyTypes();

//       if (code !== 0) {
//         toast.error(message, { richColors: true });
//         setIsLoading(false);

//         return;
//       }

//       if (data) {
//         setPropertyTypes(data);
//       }

//       setIsLoading(false);
//     };

//     fetchPropTypes();
//   }, []);

//   return isLoading ? (
//     <Loader2 />
//   ) : (
//     <SelectContent>
//       {propertyTypes.map((p) => (
//         <SelectItem
//           key={p.id}
//           value={p.id}
//         >
//           {p.name}
//         </SelectItem>
//       ))}
//     </SelectContent>
//   );
// };

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
