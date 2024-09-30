import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

import { Textarea } from "@/components/ui/textarea";
import { HTMLProps } from "react";
import { useFormContext } from "react-hook-form";
import { FormSchema } from "./form-schema";

export const defaultMapContainerStyle = {
  width: "100%",
  height: "80vh",
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
  const { control, setValue } = useFormContext<FormSchema>();

  return (
    <>
      <APIProvider
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string}
      >
        <div className="w-full">
          <Map
            {...defaultMapOptions}
            defaultZoom={defaultMapZoom}
            defaultCenter={defaultMapCenter}
            style={defaultMapContainerStyle}
          >
            <Marker
              position={defaultMapCenter}
              draggable
              onDragEnd={(e) => {
                if (e.latLng) {
                  setValue("location.lat", e.latLng?.lat());
                  setValue("location.lng", e.latLng?.lng());
                }
              }}
            />
          </Map>
        </div>
      </APIProvider>
      <FormField
        control={control}
        name="description"
        render={({ field }) => (
          <FormItem {...props}>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Property location"
                {...field}
              />
            </FormControl>
            <FormDescription>The property location</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );

  //   return (
  //     <FormField
  //       control={control}
  //       name="description"
  //       render={({ field }) => (
  //         <FormItem {...props}>
  //           <FormLabel>Location</FormLabel>
  //           <FormControl>
  //             <Textarea
  //               placeholder="Property location"
  //               {...field}
  //             />
  //           </FormControl>
  //           <FormDescription>The property location</FormDescription>
  //           <FormMessage />
  //         </FormItem>
  //       )}
  //     />
  //   );
}
