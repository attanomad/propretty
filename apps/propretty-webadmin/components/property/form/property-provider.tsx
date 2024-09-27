import { Property } from "@/app/(private)/properties/types";
import { createContext, ReactNode, useContext } from "react";

export const PropertyContext = createContext<Property | null>(null);

export function PropertyProvider({
  property,
  children,
}: {
  property?: Property;
  children: ReactNode;
}) {
  return (
    <PropertyContext.Provider value={property ?? null}>
      {children}
    </PropertyContext.Provider>
  );
}

export const useProperty = () => {
  const property = useContext(PropertyContext);

  return property;
};
