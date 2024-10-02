import {
  CommercialStatus,
  PropertyStatus,
  SupportedCurrency,
} from "@/lib/property/types";
import { Amenity } from "../amenities/actions";

export interface BaseResponse<T = unknown> {
  code: number;
  message: string;
  data?: T;
  request_id: string;
}

export interface Property {
  id: string;
  name: string;
  description?: string;
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
