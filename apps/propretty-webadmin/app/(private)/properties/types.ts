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
  priceList: { currency: SupportedCurrency; price: number }[];
  commercialStatus?: CommercialStatus;
  status: PropertyStatus;
  uniqueCode: string;
  type: PropertyType;
  mediaList: PropertyMedia[];
  amenities: Amenity[];
  createdAt: string;
  updatedAt: string;
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
