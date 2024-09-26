import { Button } from "@/components/ui/button";
import {
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
import {
  SupportedCurrenciesCount,
  SupportedCurrency,
} from "@/lib/property/types";
import { Trash } from "lucide-react";
import { Control, FieldPath, useFieldArray } from "react-hook-form";
import { FormSchema } from "./form-schema";

export default function PriceListField({
  control,
}: {
  control: Control<FormSchema>;
}) {
  const { fields, append, remove } = useFieldArray<FormSchema, "priceList">({
    control: control,
    name: "priceList",
  });
  const addPrice = () => append({ currency: SupportedCurrency.USD, price: 0 });

  return (
    <div>
      {/* <Label>Prices</Label> */}
      <div className="flex flex-col items-start p-4 gap-4">
        {fields.map((f, index) => (
          <PriceField
            key={f.id}
            control={control}
            index={index}
            onDelete={() => remove(index)}
          />
          // <FormField
          //   key={f.id}
          //   control={control}
          //   name={`priceList.${index}.currency`}
          //   render={({ field }) => (
          //     <FormItem>
          //       <FormLabel>Currency</FormLabel>
          //       <FormControl>
          //         <Input
          //           type="number"
          //           {...field}
          //         />
          //       </FormControl>
          //       <FormDescription>Currency of the price</FormDescription>
          //       <FormMessage />
          //     </FormItem>
          //   )}
          // />
        ))}
        {/* <PriceField
          control={control}
          index={fields.length}
        /> */}
        <Button
          type="button"
          variant={"outline"}
          disabled={fields.length == SupportedCurrenciesCount}
          onClick={addPrice}
        >
          Add Price
        </Button>
      </div>
    </div>
  );
}

const PriceField = ({
  control,
  index,
  onDelete,
}: {
  control: Control<FormSchema>;
  index: number;
  onDelete?: () => void;
}) => {
  const handleDeleteClick =
    typeof onDelete === "function" ? onDelete : undefined;

  return (
    <div className="flex items-start gap-4">
      <CurrencyField
        control={control}
        index={index}
      />
      <AmountField
        control={control}
        index={index}
      />
      <div className="flex items-center h-full">
        <Button
          type="button"
          variant={"destructive"}
          onClick={handleDeleteClick}
          className="size-8 rounded-full p-1"
        >
          <Trash className="size-4" />
        </Button>
      </div>
    </div>
  );
};

const AmountField = ({
  control,
  index,
}: {
  control: Control<FormSchema>;
  index: number;
}) => {
  const name: FieldPath<FormSchema> = `priceList.${index}.price`;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Amount</FormLabel>
          <FormControl>
            <Input
              type="number"
              {...field}
            />
          </FormControl>
          <FormDescription>Price Amount</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const CurrencyField = ({
  control,
  index,
}: {
  control: Control<FormSchema>;
  index: number;
}) => {
  const name: FieldPath<FormSchema> = `priceList.${index}.currency`;
  //   const value = useWatch({ name, control });

  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <FormItem>
          <FormLabel>Currency</FormLabel>
          <Select
            onValueChange={onChange}
            defaultValue={value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a currency" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {Object.values(SupportedCurrency).map((c) => (
                <SelectItem
                  key={c}
                  value={c}
                >
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormDescription>Currency of the price</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
