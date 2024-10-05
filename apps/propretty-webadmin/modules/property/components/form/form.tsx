"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import {
  CreatePropertyMutation,
  Property,
  UpdatePropertyMutation,
} from "@/gql/graphql";
import { ServerActionBaseResponse } from "@/lib/server-actions.types";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { createProperty, updateProperty } from "../../actions/property.actions";
import AmenitiesField from "./amenities-field/amenities-field";
import CommercialStatusField from "./commercial-status-field";
import DescriptionField from "./description-field";
import FloorSizeField from "./floor-size-field";
import {
  convertFormToCreateVariables,
  convertFormToUpdateVariables,
  FormSchema,
} from "./form-schema";
import { usePropertyForm } from "./form.hooks";
import FurnishingField from "./furnishing-field";
import LandSizeField from "./land-size-field";
import LocationField from "./location-field";
import NameField from "./name-field";
import PictureField from "./picture-field/picture-field";
import PriceListField from "./price-list-field";
import { PropertyProvider } from "./property-provider";
import PropertyTypeField from "./property-type-field";
import StatusField from "./status-field";
import UniqueCodeField from "./unique-code-field";

export default function PropertyForm({ property }: { property?: Property }) {
  const router = useRouter();
  const form = usePropertyForm(property);
  const isUpdate = !!property;
  async function onSubmit(values: FormSchema) {
    let res: ServerActionBaseResponse<
      | CreatePropertyMutation["createProperty"]
      | UpdatePropertyMutation["updateProperty"]
    >;

    if (isUpdate) {
      res = await updateProperty(
        convertFormToUpdateVariables(property.id, values)
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
              <FurnishingField />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sizing</CardTitle>
              <CardDescription>Property sizing</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <LandSizeField />
              <FloorSizeField />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Location</CardTitle>
              <CardDescription>Property location and address</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <LocationField />
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
              <PriceListField />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Amenities</CardTitle>
              <CardDescription>
                Amenities or features of the property
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* <PropertyAmenitiesField control={form.control} /> */}
              <AmenitiesField control={form.control} />
            </CardContent>
          </Card>

          <Button type="submit">{isUpdate ? "Update" : "Create"}</Button>
        </form>
      </Form>
    </PropertyProvider>
  );
}
