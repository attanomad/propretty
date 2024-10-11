import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  search: z.string(),
});

export type SearchBoxFormSchema = z.infer<typeof formSchema>;

export interface SearchBoxProps {
  defaultValue?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: SearchBoxFormSchema) => void;
}

export default function SearchBox(props: SearchBoxProps) {
  const t = useTranslations("SearchBox");
  const tg = useTranslations("generic");
  const form = useForm<SearchBoxFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { search: props.defaultValue ?? "" },
  });
  const onSubmit = (data: SearchBoxFormSchema) => {
    console.log("data: ", data);
    if (typeof props.onSubmit === "function") {
      props.onSubmit(data);
    }
  };
  const onInvalid = (e: any) => {
    console.log("invalid form: ", e);
  };

  return (
    <div className="relative flex-1 md:grow-0">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit, onInvalid)}>
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <FormField
            control={form.control}
            name="search"
            render={({ field: { onBlur, onChange, ...rest } }) => {
              const handleChange = (...args: any[]) => {
                onChange(...args);

                if (typeof props.onChange === "function") {
                  props.onChange(args[0]);
                }
              };

              return (
                <FormItem>
                  <FormControl>
                    <Input
                      {...rest}
                      onChange={handleChange}
                      type="search"
                      placeholder={t("placeholder", { name: tg("Tenants") })}
                      className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          />
        </form>
      </Form>
    </div>
  );
}
