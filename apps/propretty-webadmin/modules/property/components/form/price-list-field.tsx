"use client";

import { Button } from "@/components/ui/button";
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
import { SupportedCurrency } from "@propretty/common";
import { Trash } from "lucide-react";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  Control,
  FieldPath,
  useFieldArray,
  useFormContext,
} from "react-hook-form";
import { FormSchema } from "./form-schema";

export default function PriceListField() {
  const { control } = useFormContext<FormSchema>();
  const { fields, remove, append } = useFieldArray<FormSchema, "priceList">({
    control: control,
    name: "priceList",
  });
  const handleClick = ({
    availables,
    use,
    index,
  }: PriceCurrencyContextValue) => {
    if (availables.length > 0) {
      const c = availables[0];
      use(c, Object.keys(index).length);
      append({ currency: c, price: 0 });
    }
  };
  const initialIndex = fields.reduce<CurrencyIndex>((obj, f, index) => {
    obj[f.currency as SupportedCurrency] = index;

    return obj;
  }, {} as CurrencyIndex);

  return (
    <div>
      <div className="flex flex-col items-start p-4 gap-4">
        <PriceCurrencyProvider index={initialIndex}>
          {fields.map((f, index) => {
            const handleDelete = (ctx: PriceCurrencyContextValue) => {
              const found = Object.entries(ctx.index).find(
                ([c, idx]) => idx === index
              );

              if (!found) throw new Error(`Could not find currency to remove`);

              ctx.remove(found[0] as SupportedCurrency);
              remove(index);
            };

            return (
              <PriceField
                key={f.id}
                control={control}
                index={index}
                onDelete={handleDelete}
              />
            );
          })}
          <AddPriceButton onClick={handleClick} />
        </PriceCurrencyProvider>
      </div>
    </div>
  );
}

const AddPriceButton = ({
  onClick,
}: {
  onClick: (ctx: PriceCurrencyContextValue) => void;
}) => {
  const ctx = useCurrencies();
  const { availables } = ctx;
  const handleClick =
    typeof onClick === "function" ? () => onClick(ctx) : undefined;

  return (
    <Button
      type="button"
      variant={"outline"}
      disabled={availables.length === 0}
      onClick={handleClick}
    >
      Add Price
    </Button>
  );
};

interface PriceCurrencyContextValue {
  index: CurrencyIndex;
  availables: Array<SupportedCurrency>;
  use: (c: SupportedCurrency, fid: FieldIndex) => void;
  remove: (c: SupportedCurrency) => void;
}
const PriceCurrencyContext = createContext<PriceCurrencyContextValue>({
  index: {} as CurrencyIndex,
  availables: [],
  use: () => {},
  remove: () => {},
});

type FieldIndex = number;
type CurrencyIndex = Record<SupportedCurrency, FieldIndex>;

const PriceCurrencyProvider = ({
  children,
  index: initialIndex,
}: {
  index?: CurrencyIndex;
  children: ReactNode;
}) => {
  const [index, setIndex] = useState<CurrencyIndex>(
    initialIndex || ({} as CurrencyIndex)
  );
  const [availables, setAvailables] = useState<Array<SupportedCurrency>>([]);

  useEffect(() => {
    const newAvailables = Object.values(SupportedCurrency).filter(
      (c) => typeof index[c] === "undefined"
    );

    setAvailables(newAvailables);
  }, [index]);

  const use = (c: SupportedCurrency, fid: FieldIndex) =>
    setIndex((prev) => ({ ...prev, [c]: fid }));
  const remove = (c: SupportedCurrency) =>
    setIndex((prev) => {
      const n = { ...prev };
      delete n[c];
      return n;
    });

  return (
    <PriceCurrencyContext.Provider value={{ index, availables, use, remove }}>
      {children}
    </PriceCurrencyContext.Provider>
  );
};

const useCurrencies = () => {
  return useContext(PriceCurrencyContext);
};

const PriceField = ({
  control,
  index,
  onDelete,
}: {
  control: Control<FormSchema>;
  index: number;
  onDelete?: (ctx: PriceCurrencyContextValue) => void;
}) => {
  const ctx = useCurrencies();
  const handleDeleteClick =
    typeof onDelete === "function" ? () => onDelete(ctx) : undefined;

  return (
    <div className="flex items-end gap-4">
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
          variant="outline"
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
          {/* <FormDescription>Price Amount</FormDescription> */}
          <FormControl>
            <Input
              type="number"
              {...field}
            />
          </FormControl>
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
  index: FieldIndex;
}) => {
  const { use, remove, index: currencyIndex } = useCurrencies();
  const name: FieldPath<FormSchema> = `priceList.${index}.currency`;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        const handleChange = (newValue: SupportedCurrency) => {
          onChange(newValue);
          use(newValue, index);
          remove(value as SupportedCurrency);
        };

        return (
          <FormItem>
            <FormLabel>Currency</FormLabel>
            {/* <FormDescription>Currency of the price</FormDescription> */}
            <Select
              onValueChange={handleChange}
              defaultValue={value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a currency" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {Object.values(SupportedCurrency).map((c) => {
                  const foundIndex = currencyIndex[c];
                  const disabled =
                    typeof foundIndex === "number" && foundIndex !== index;

                  return (
                    <SelectItem
                      key={c}
                      value={c}
                      disabled={disabled}
                    >
                      {c}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
