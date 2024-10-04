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
import { CommercialStatus } from "@propretty/common";
import { Control } from "react-hook-form";
import { FormSchema } from "./form-schema";

// const colorClassMap: Record<CommercialStatus, string> = {
//   AVAILABLE:
//     "text-green-700 bg-green-200 focus:bg-green-200 focus:text-green-700",
//   PENDING:
//     "text-yellow-700 bg-yellow-200 focus:text-yellow-700 focus:bg-yellow-200",
//   RENTED:
//     "text-orange-700 bg-orange-200 focus:text-orange-700 focus:bg-orange-200",
//   SOLD: "text-orange-700 bg-orange-200 focus:text-orange-700 focus:bg-orange-200",
// };

export default function CommercialStatusField({
  control,
}: {
  control: Control<FormSchema>;
}) {
  return (
    <FormField
      control={control}
      name="commercialStatus"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Commercial Status</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select commercial status" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {Object.values(CommercialStatus).map((s) => (
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
