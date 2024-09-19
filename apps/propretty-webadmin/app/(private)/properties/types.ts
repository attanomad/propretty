export interface BaseResponse<T = unknown> {
  code: number;
  message: string;
  data?: T;
  request_id: string;
}

export interface Property {
  id: string;
  name: string;
  uniqueCode: string;
  type: PropertyType;
  createdAt: string;
  updatedAt: string;
}

export interface PropertyType {
  id: string;
  name: string;
  description: string | null;
}
