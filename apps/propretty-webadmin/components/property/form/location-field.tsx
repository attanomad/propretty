import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  APIProvider,
  Map,
  Marker,
  useMarkerRef,
} from "@vis.gl/react-google-maps";

import { Input } from "@/components/ui/input";
import { HTMLProps, useCallback, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FormSchema } from "./form-schema";

export const defaultMapContainerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "15px 0px 0px 15px",
};

const defaultMapCenter = {
  lat: 12.727345,
  lng: 100.890256,
};
const defaultMapZoom = 18;
const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "satellite",
};

export default function LocationField(props: HTMLProps<HTMLDivElement>) {
  const [markerRef, marker] = useMarkerRef();
  const [initialMarkerPosition, setInitialMarkerPosition] = useState<Record<
    "lat" | "lng",
    number
  > | null>(null);
  const { control, setValue, getValues } = useFormContext<FormSchema>();
  const lat = getValues("location.latitude");
  const lng = getValues("location.longitude");
  const mapCenter = useCallback(
    () => initialMarkerPosition ?? defaultMapCenter,
    [initialMarkerPosition]
  );

  useEffect(() => {
    if (lat && lng) {
      setInitialMarkerPosition({
        lat,
        lng,
      });
    }
  }, [lat, lng]);

  return (
    <>
      <APIProvider
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string}
      >
        <div className="w-full min-h-64">
          <Map
            {...defaultMapOptions}
            defaultZoom={defaultMapZoom}
            defaultCenter={mapCenter()}
            style={defaultMapContainerStyle}
          >
            <Marker
              ref={markerRef}
              position={initialMarkerPosition}
              draggable
              onDragEnd={(e) => {
                if (e.latLng) {
                  setValue("location.latitude", e.latLng.lat());
                  setValue("location.longitude", e.latLng.lng());
                }
              }}
            />
          </Map>
        </div>
      </APIProvider>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <FormField
          control={control}
          name="location.address"
          render={({ field }) => (
            <FormItem {...props}>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="Address"
                  {...field}
                />
              </FormControl>
              <FormDescription>Location address</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="location.subdistrict"
          render={({ field }) => (
            <FormItem {...props}>
              <FormLabel>Subdistrict</FormLabel>
              <FormControl>
                <Input
                  placeholder="Subdistrict"
                  {...field}
                />
              </FormControl>
              <FormDescription>Location Subdistrict</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="location.district"
          render={({ field }) => (
            <FormItem {...props}>
              <FormLabel>District</FormLabel>
              <FormControl>
                <Input
                  placeholder="District"
                  {...field}
                />
              </FormControl>
              <FormDescription>Location District</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="location.province"
          render={({ field }) => (
            <FormItem {...props}>
              <FormLabel>Province</FormLabel>
              <FormControl>
                <Input
                  placeholder="Province"
                  {...field}
                />
              </FormControl>
              <FormDescription>Location Province</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="location.postalCode"
          render={({ field }) => (
            <FormItem {...props}>
              <FormLabel>Postal Code</FormLabel>
              <FormControl>
                <Input
                  placeholder="Postal Code"
                  {...field}
                />
              </FormControl>
              <FormDescription>Location Postal Code</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="location.country"
          render={({ field }) => (
            <FormItem {...props}>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input
                  placeholder="Country"
                  {...field}
                />
              </FormControl>
              <FormDescription>Location Country</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
