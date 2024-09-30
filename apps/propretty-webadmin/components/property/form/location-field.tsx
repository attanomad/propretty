import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { GoogleMap } from "@react-google-maps/api";
import { HTMLProps } from "react";
import { useFormContext } from "react-hook-form";
import { FormSchema } from "./form-schema";

export const defaultMapContainerStyle = {
  width: "100%",
  height: "80vh",
  borderRadius: "15px 0px 0px 15px",
};

const defaultMapCenter = {
  lat: 35.8799866,
  lng: 76.5048004,
};
const defaultMapZoom = 18;
const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "satellite",
};

export default function LocationField(props: HTMLProps<HTMLDivElement>) {
  const { control } = useFormContext<FormSchema>();

  return (
    <>
      <div className="w-full">
        <GoogleMap
          mapContainerStyle={defaultMapContainerStyle}
          center={defaultMapCenter}
          zoom={defaultMapZoom}
          options={defaultMapOptions}
        ></GoogleMap>
      </div>
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
