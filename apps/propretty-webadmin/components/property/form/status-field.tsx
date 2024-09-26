import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PropertyStatus } from "@/lib/property/types";
import { Control } from "react-hook-form";
import { FormSchema } from "./form-schema";

export default function StatusField({
  control,
}: {
  control: Control<FormSchema>;
}) {
  return (
    <FormField
      control={control}
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
  );
}
