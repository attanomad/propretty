import { Amenity } from "../amenity";
import {
  CommercialStatus,
  PropertyStatus,
  SupportedAreaMeasurementUnit,
  SupportedCurrency,
} from "./property.enums";

export interface Property {
  id: string;
  name: string;
  description: string | null;
  landSize?: number;
  floorSize?: number;
  priceList: { currency: SupportedCurrency; price: number }[];
  commercialStatus?: CommercialStatus;
  status: PropertyStatus;
  uniqueCode: string;
  type: PropertyType;
  mediaList: PropertyMedia[];
  amenities: Amenity[];
  location?: Location;
  createdAt: string;
  updatedAt: string;
}

export interface Location {
  id: string;
  address?: string | null;
  subdistrict?: string | null;
  district?: string | null;
  province?: string | null;
  country?: string | null;
  postalCode?: string | null;
  latitude?: string | null; // Decimal string
  longitude?: string | null; // Decimal string
}

export interface PropertyType {
  id: string;
  name: string;
  description: string | null;
}

export interface PropertyMedia {
  id: string;
  url: string;
  mimetype: string;
}

export const SupportedCurrenciesCount = Object.values(SupportedCurrency).length;

export interface AreaMeasurementUnitInfo {
  name: string;
  description: string;
  notation: string;
}

export const SupportedAreaMeasurementUnitInfo: Record<
  SupportedAreaMeasurementUnit,
  AreaMeasurementUnitInfo
> = {
  SQM: { name: "Square Meter", description: "", notation: "m²" },
  SQF: { name: "Square Feet", description: "", notation: "f²" },
  SQW: {
    name: "Square Wah",
    description: "Commonly used in Thailand",
    notation: "w²",
  },
  SQY: { name: "Square Yard", description: "", notation: "yd²" },
  SQCM: { name: "Square Centimeter", description: "", notation: "cm²" },
  Rai: {
    name: "Rai",
    description: "Commonly used in Thailand",
    notation: "Rai",
  },
  Ngan: {
    name: "Ngan",
    description: "Commonly used in Thailand",
    notation: "cm²",
  },
};
