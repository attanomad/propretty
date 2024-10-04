import {
  FormControl,
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
import {
  convertAreaMeasurementUnit,
  SupportedAreaMeasurementUnit,
  SupportedAreaMeasurementUnitInfo,
} from "@propretty/common";
import { HTMLProps } from "react";
import { useFormContext } from "react-hook-form";
import { FormSchema } from "./form-schema";

export default function LandSizeField(props: HTMLProps<HTMLDivElement>) {
  const { control, getValues, setValue } = useFormContext<FormSchema>();

  return (
    <>
      <FormField
        control={control}
        name="landSize.unit"
        render={({ field: { value: currentUnit, onChange } }) => {
          const handleChange = (newUnit: SupportedAreaMeasurementUnit) => {
            const sizeValue = getValues("landSize.value");

            setValue(
              "landSize.value",
              convertAreaMeasurementUnit(sizeValue, currentUnit, newUnit)
            );
            onChange(newUnit);
          };

          return (
            <FormItem {...props}>
              <FormLabel>Unit</FormLabel>
              <Select
                onValueChange={handleChange}
                defaultValue={currentUnit}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a unit" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.entries(SupportedAreaMeasurementUnitInfo).map(
                    ([key, info]) => {
                      return (
                        <SelectItem
                          key={key}
                          value={key}
                        >
                          {info.name}
                        </SelectItem>
                      );
                    }
                  )}
                </SelectContent>
              </Select>
              {/* <FormDescription>The property decription</FormDescription> */}
              <FormMessage />
            </FormItem>
          );
        }}
      />

      <FormField
        control={control}
        name="landSize.value"
        render={({ field }) => {
          return (
            <FormItem {...props}>
              <FormLabel>Land Size</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  placeholder="Value"
                />
              </FormControl>
              {/* <FormDescription>The property decription</FormDescription> */}
              <FormMessage />
            </FormItem>
          );
        }}
      />
    </>
  );
}
