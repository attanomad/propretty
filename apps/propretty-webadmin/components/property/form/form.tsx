"use client";

import { Property } from "@/app/(private)/properties/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { createProperty, updateProperty } from "@/lib/property/server-actions";
import { ServerActionBaseResponse } from "@/lib/server-actions.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import PropertyAmenitiesField from "./amenities-field/amenities-field";
import CommercialStatusField from "./commercial-status-field";
import DescriptionField from "./description-field";
import {
  convertFormToCreateVariables,
  convertFormToUpdateVariables,
  convertPropertyToForm,
  defaultFormValues,
  formSchema,
  FormSchema,
} from "./form-schema";
import NameField from "./name-field";
import PictureField from "./picture-field/picture-field";
import PriceListField from "./price-list-field";
import { PropertyProvider } from "./property-provider";
import PropertyTypeField from "./property-type-field";
import StatusField from "./status-field";
import UniqueCodeField from "./unique-code-field";

export default function PropertyForm({ property }: { property?: Property }) {
  const router = useRouter();
  const defaultValues = property
    ? convertPropertyToForm(property)
    : defaultFormValues;
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: "onChange",
  });
  const isUpdate = !!property;
  async function onSubmit(values: FormSchema) {
    console.log(values);
    let res: ServerActionBaseResponse<Property>;

    if (isUpdate) {
      res = await updateProperty(
        property.id,
        convertFormToUpdateVariables(values)
      );

      if (res.code === 0) {
        toast.success(`Product Updated`, {
          position: "top-center",
          richColors: true,
        });

        return;
      }

      toast.error(`Failed to update property: ${res.message}`, {
        richColors: true,
      });
    } else {
      res = await createProperty(convertFormToCreateVariables(values));

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

  return (
    <PropertyProvider property={property}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, onInvalid)}
          className="space-y-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Media Files</CardTitle>
              <CardDescription>
                Images and/or videos of the property up to 50 files
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PictureField control={form.control} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>General Information</CardTitle>
              {/* <CardDescription>
              Property prices in different currencies
            </CardDescription> */}
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <NameField
                control={form.control}
                className="col-span-2"
              />
              <DescriptionField
                control={form.control}
                className="col-span-2"
              />
              <UniqueCodeField control={form.control} />
              <PropertyTypeField control={form.control} />
              <CommercialStatusField control={form.control} />
              <StatusField control={form.control} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prices</CardTitle>
              <CardDescription>
                Property prices in different currencies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PriceListField control={form.control} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Amenities</CardTitle>
              <CardDescription>
                Amenities or features of the property
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PropertyAmenitiesField control={form.control} />
            </CardContent>
          </Card>

          <Button type="submit">{isUpdate ? "Update" : "Create"}</Button>
        </form>
      </Form>
    </PropertyProvider>
  );
}
