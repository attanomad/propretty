import { Amenity } from "@/app/(private)/amenities/actions";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { findAmenities } from "@/lib/amenity/server-actions";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  Control,
  ControllerRenderProps,
  useFormContext,
} from "react-hook-form";
import { toast } from "sonner";
import { FormSchema } from "../form-schema";
import { useProperty } from "../property-provider";

export default function PropertyAmenitiesField({
  control,
}: {
  control: Control<FormSchema>;
}) {
  const property = useProperty();
  const { amenities, isLoading } = useInitAmenities();

  return (
    <AmenityCheckedIndexProvider amenities={property?.amenities}>
      {isLoading || !amenities ? (
        <Loader2 className={cn("animate-spin")} />
      ) : amenities && amenities.length === 0 ? (
        <p>No anemities</p>
      ) : (
        amenities.map((item) => (
          <Field
            control={control}
            item={item}
          />
        ))
      )}
    </AmenityCheckedIndexProvider>
  );
}

const Field = ({
  item,
  control,
}: {
  item: Amenity;
  control: Control<FormSchema>;
}) => {
  console.warn("Rendering form field...");
  const renderProp = useCallback(
    ({ field }: { field: ControllerRenderProps<FormSchema> }) => (
      <FieldCheckbox
        onChange={field.onChange}
        item={item}
      />
    ),
    [item]
  );

  return (
    <FormField
      key={item.id}
      control={control}
      name="amenityIdList"
      render={renderProp}
    />
  );
};

interface AmenityCheckedIndexContextData {
  index: AmenityCheckedIndex;
  setIndexById: (id: string, isChecked: boolean) => void;
}
const AmenityCheckedIndexContext =
  createContext<AmenityCheckedIndexContextData>({
    index: {},
    setIndexById() {},
  });

const AmenityCheckedIndexProvider = ({
  children,
  amenities,
}: {
  children: ReactNode;
  amenities?: Amenity[];
}) => {
  const [amenityCheckedIndexById, setAmenityCheckedIndexById] =
    useState<AmenityCheckedIndex>({});

  useEffect(() => {
    if (!amenities) {
      setAmenityCheckedIndexById({});
      return;
    }

    setAmenityCheckedIndexById(
      amenities.reduce<AmenityCheckedIndex>((obj, a) => {
        obj[a.id] = true;

        return obj;
      }, {})
    );
  }, [amenities]);

  return (
    <AmenityCheckedIndexContext.Provider
      value={{
        index: amenityCheckedIndexById,
        setIndexById: (id, checked) =>
          setAmenityCheckedIndexById((prevState) => ({
            ...prevState,
            [id]: checked,
          })),
      }}
    >
      {children}
    </AmenityCheckedIndexContext.Provider>
  );
};

const countMap: Record<string, number> = {};
const FieldCheckbox = ({
  onChange,
  item,
}: {
  onChange: ControllerRenderProps<FormSchema>["onChange"];
  item: Amenity;
}) => {
  if (!countMap[item.id]) {
    countMap[item.id] = 0;
  }
  console.log("onChange: ", item.id, countMap[item.id]++);
  const { index, setIndexById } = useAmenityCheckedIndex();
  const isChecked = index[item.id] ?? false;
  const handleCheckedChange = () => {
    setIndexById(item.id, !isChecked);
    onChange(Object.keys(index).filter((id) => index[id]));
  };

  return (
    <FormItem>
      <FormControl>
        <Checkbox
          checked={isChecked}
          onCheckedChange={handleCheckedChange}
        />
      </FormControl>
      <FormLabel className="text-sm font-normal">{item.name}</FormLabel>
      {item.description && (
        <FormDescription>{item.description}</FormDescription>
      )}
      <FormMessage />
    </FormItem>
  );
};

const useInitAmenities = () => {
  const { amenities, isLoading } = useAmenities();
  const { setValue } = useFormContext<FormSchema>();

  useEffect(() => {
    if (!amenities) return;

    setValue(
      "amenityIdList",
      amenities.map((a) => a.id)
    );
  }, [amenities]);

  return {
    amenities,
    isLoading,
  };
};

export type AmenityCheckedIndex = Record<string, boolean>;

const useAmenityCheckedIndex = () => {
  return useContext(AmenityCheckedIndexContext);
};

const useAmenities = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [amenityList, setAmenityList] = useState<Amenity[] | null>(null);

  useEffect(() => {
    const fetchAmenities = async () => {
      setIsLoading(true);

      const { code, message, data } = await findAmenities();

      if (code !== 0) {
        toast.error(message, { richColors: true });
        setIsLoading(false);

        return;
      }

      if (data) {
        setAmenityList(data);
      }

      setIsLoading(false);
    };

    fetchAmenities();
  }, []);

  return { amenities: amenityList, isLoading: isLoading || !amenityList };
};
