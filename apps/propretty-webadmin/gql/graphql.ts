/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** An arbitrary-precision Decimal type */
  Decimal: { input: any; output: any; }
};

export type Amenity = {
  __typename?: 'Amenity';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type CreateAmenityInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreatePriceInput = {
  currency: Scalars['String']['input'];
  price: Scalars['Decimal']['input'];
};

export type CreatePropertyInput = {
  amenityIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commercialStatus?: InputMaybe<PropertyCommercialStatus>;
  description?: InputMaybe<Scalars['String']['input']>;
  floorSize?: InputMaybe<Scalars['Decimal']['input']>;
  furnishing?: InputMaybe<PropertyFurnishing>;
  landSize?: InputMaybe<Scalars['Decimal']['input']>;
  location?: InputMaybe<UpsertLocationInput>;
  mediaList?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name: Scalars['String']['input'];
  priceList?: InputMaybe<Array<CreatePriceInput>>;
  status: PropertyStatus;
  typeId: Scalars['String']['input'];
  uniqueCode?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePropertyTypeInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type File = {
  __typename?: 'File';
  id: Scalars['String']['output'];
  mimetype: Scalars['String']['output'];
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Location = {
  __typename?: 'Location';
  address?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  latitude?: Maybe<Scalars['Decimal']['output']>;
  longitude?: Maybe<Scalars['Decimal']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  subdistrict?: Maybe<Scalars['String']['output']>;
};

export type LoginInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAmenity: Amenity;
  createProperty: Property;
  createPropertyType: PropertyType;
  generateSignedUrl: Scalars['String']['output'];
  login: Token;
  updateProperty: Property;
};


export type MutationCreateAmenityArgs = {
  createAmenityData: CreateAmenityInput;
};


export type MutationCreatePropertyArgs = {
  createPropertyData: CreatePropertyInput;
};


export type MutationCreatePropertyTypeArgs = {
  createPropertyTypeData: CreatePropertyTypeInput;
};


export type MutationGenerateSignedUrlArgs = {
  mimeType: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  credentials: LoginInput;
};


export type MutationUpdatePropertyArgs = {
  id: Scalars['String']['input'];
  updatePropertyData: UpdatePropertyInput;
};

export type Price = {
  __typename?: 'Price';
  currency: Scalars['String']['output'];
  id: Scalars['String']['output'];
  price: Scalars['Decimal']['output'];
};

export type Property = {
  __typename?: 'Property';
  amenities: Array<Amenity>;
  commercialStatus?: Maybe<PropertyCommercialStatus>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  floorSize?: Maybe<Scalars['Decimal']['output']>;
  furnishing?: Maybe<PropertyFurnishing>;
  id: Scalars['String']['output'];
  landSize?: Maybe<Scalars['Decimal']['output']>;
  location?: Maybe<Location>;
  mediaList: Array<PropertyMedia>;
  name: Scalars['String']['output'];
  priceList: Array<Price>;
  status: PropertyStatus;
  type: PropertyType;
  uniqueCode?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export enum PropertyCommercialStatus {
  Available = 'AVAILABLE',
  Pending = 'PENDING',
  Rented = 'RENTED',
  Sold = 'SOLD'
}

export enum PropertyFurnishing {
  FullyFurnished = 'FULLY_FURNISHED',
  SemiFurnished = 'SEMI_FURNISHED',
  Unfurnished = 'UNFURNISHED'
}

export type PropertyMedia = {
  __typename?: 'PropertyMedia';
  id: Scalars['String']['output'];
  mimetype: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export enum PropertyStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type PropertyType = {
  __typename?: 'PropertyType';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  amenities: Array<Amenity>;
  files: Array<File>;
  findProperty?: Maybe<Property>;
  properties: Array<Maybe<Property>>;
  propertyTypes: Array<PropertyType>;
};


export type QueryAmenitiesArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFindPropertyArgs = {
  id: Scalars['String']['input'];
};


export type QueryPropertiesArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  typeId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPropertyTypesArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Token = {
  __typename?: 'Token';
  accessToken: Scalars['String']['output'];
};

export type UpdatePropertyInput = {
  amenityIds?: InputMaybe<Array<Scalars['String']['input']>>;
  commercialStatus?: InputMaybe<PropertyCommercialStatus>;
  description?: InputMaybe<Scalars['String']['input']>;
  floorSize?: InputMaybe<Scalars['Decimal']['input']>;
  furnishing?: InputMaybe<PropertyFurnishing>;
  landSize?: InputMaybe<Scalars['Decimal']['input']>;
  location?: InputMaybe<UpsertLocationInput>;
  mediaList?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  priceList?: InputMaybe<Array<CreatePriceInput>>;
  status?: InputMaybe<PropertyStatus>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  uniqueCode?: InputMaybe<Scalars['String']['input']>;
};

export type UpsertLocationInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  district?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Decimal']['input']>;
  longitude?: InputMaybe<Scalars['Decimal']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  subdistrict?: InputMaybe<Scalars['String']['input']>;
};

export type FindAmenitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAmenitiesQuery = { __typename?: 'Query', amenities: Array<{ __typename?: 'Amenity', id: string, name: string, description?: string | null }> };

export type CreateAmenityMutationVariables = Exact<{
  name: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateAmenityMutation = { __typename?: 'Mutation', createAmenity: { __typename?: 'Amenity', id: string, name: string, description?: string | null } };

export type LoginMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Token', accessToken: string } };

export type FindFilesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindFilesQuery = { __typename?: 'Query', files: Array<{ __typename?: 'File', id: string, name: string, url: string, mimetype: string }> };

export type FindPropertyTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindPropertyTypesQuery = { __typename?: 'Query', propertyTypes: Array<{ __typename?: 'PropertyType', id: string, name: string, description?: string | null }> };

export type PropertyAttributesFragment = { __typename?: 'Property', id: string, name: string, status: PropertyStatus, uniqueCode?: string | null, landSize?: any | null, floorSize?: any | null, mediaList: Array<{ __typename?: 'PropertyMedia', id: string }>, priceList: Array<{ __typename?: 'Price', currency: string, price: any }>, type: { __typename?: 'PropertyType', id: string, name: string }, amenities: Array<{ __typename?: 'Amenity', id: string, name: string }> };

export type CreatePropertyMutationVariables = Exact<{
  name: Scalars['String']['input'];
  status: PropertyStatus;
  typeId: Scalars['String']['input'];
  uniqueCode?: InputMaybe<Scalars['String']['input']>;
  mediaList?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  priceList?: InputMaybe<Array<CreatePriceInput> | CreatePriceInput>;
  amenityIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  location?: InputMaybe<UpsertLocationInput>;
  landSize?: InputMaybe<Scalars['Decimal']['input']>;
  floorSize?: InputMaybe<Scalars['Decimal']['input']>;
}>;


export type CreatePropertyMutation = { __typename?: 'Mutation', createProperty: { __typename?: 'Property', id: string, name: string, status: PropertyStatus, uniqueCode?: string | null, landSize?: any | null, floorSize?: any | null, mediaList: Array<{ __typename?: 'PropertyMedia', id: string }>, priceList: Array<{ __typename?: 'Price', currency: string, price: any }>, type: { __typename?: 'PropertyType', id: string, name: string }, amenities: Array<{ __typename?: 'Amenity', id: string, name: string }> } };

export type UpdatePropertyMutationVariables = Exact<{
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  uniqueCode?: InputMaybe<Scalars['String']['input']>;
  landSize?: InputMaybe<Scalars['Decimal']['input']>;
  floorSize?: InputMaybe<Scalars['Decimal']['input']>;
  location?: InputMaybe<UpsertLocationInput>;
  mediaList?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  priceList?: InputMaybe<Array<CreatePriceInput> | CreatePriceInput>;
  amenityIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type UpdatePropertyMutation = { __typename?: 'Mutation', updateProperty: { __typename?: 'Property', id: string, name: string, status: PropertyStatus, uniqueCode?: string | null, landSize?: any | null, floorSize?: any | null, mediaList: Array<{ __typename?: 'PropertyMedia', id: string }>, priceList: Array<{ __typename?: 'Price', currency: string, price: any }>, type: { __typename?: 'PropertyType', id: string, name: string }, amenities: Array<{ __typename?: 'Amenity', id: string, name: string }> } };

export type FindPropertyByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FindPropertyByIdQuery = { __typename?: 'Query', findProperty?: { __typename?: 'Property', name: string, description?: string | null, status: PropertyStatus, uniqueCode?: string | null, id: string, commercialStatus?: PropertyCommercialStatus | null, furnishing?: PropertyFurnishing | null, floorSize?: any | null, landSize?: any | null, location?: { __typename?: 'Location', id: string, address?: string | null, subdistrict?: string | null, district?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, latitude?: any | null, longitude?: any | null } | null, priceList: Array<{ __typename?: 'Price', id: string, price: any, currency: string }>, type: { __typename?: 'PropertyType', id: string, name: string }, mediaList: Array<{ __typename?: 'PropertyMedia', id: string, url: string, mimetype: string }>, amenities: Array<{ __typename?: 'Amenity', id: string, name: string }> } | null };

export type FindPropertiesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindPropertiesQuery = { __typename?: 'Query', properties: Array<{ __typename?: 'Property', id: string, name: string, uniqueCode?: string | null, createdAt: any, updatedAt: any, type: { __typename?: 'PropertyType', id: string, name: string }, mediaList: Array<{ __typename?: 'PropertyMedia', url: string }> } | null> };

export const PropertyAttributesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyAttributes"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCode"}},{"kind":"Field","name":{"kind":"Name","value":"landSize"}},{"kind":"Field","name":{"kind":"Name","value":"floorSize"}},{"kind":"Field","name":{"kind":"Name","value":"mediaList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"priceList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"amenities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<PropertyAttributesFragment, unknown>;
export const FindAmenitiesDocument = {"__meta__":{"hash":"f916832c776f53b9ffe69b1df2d87d93fdc02c10"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindAmenities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amenities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<FindAmenitiesQuery, FindAmenitiesQueryVariables>;
export const CreateAmenityDocument = {"__meta__":{"hash":"9ed095dfb8d28663a5e785a4b5c483f21079e9b5"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAmenity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAmenity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createAmenityData"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<CreateAmenityMutation, CreateAmenityMutationVariables>;
export const LoginDocument = {"__meta__":{"hash":"d0f4769aa18d1f04a71c8d20d4a52980873d780b"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"credentials"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const FindFilesDocument = {"__meta__":{"hash":"cdf351fbe9b417810a55872fb5ca8fa08b2ee1b2"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindFiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"mimetype"}}]}}]}}]} as unknown as DocumentNode<FindFilesQuery, FindFilesQueryVariables>;
export const FindPropertyTypesDocument = {"__meta__":{"hash":"8d74b64796136c9e234c58d313d0be9c6beddcf2"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindPropertyTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propertyTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<FindPropertyTypesQuery, FindPropertyTypesQueryVariables>;
export const CreatePropertyDocument = {"__meta__":{"hash":"e8555fc951848f2da9f0adf3215b00e64d5bf638"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProperty"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyStatus"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"typeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uniqueCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mediaList"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"priceList"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePriceInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amenityIds"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"location"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertLocationInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"landSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"floorSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProperty"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createPropertyData"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"typeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"typeId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"uniqueCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uniqueCode"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"mediaList"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mediaList"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"priceList"},"value":{"kind":"Variable","name":{"kind":"Name","value":"priceList"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amenityIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amenityIds"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"Variable","name":{"kind":"Name","value":"location"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"landSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"landSize"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"floorSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"floorSize"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyAttributes"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyAttributes"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCode"}},{"kind":"Field","name":{"kind":"Name","value":"landSize"}},{"kind":"Field","name":{"kind":"Name","value":"floorSize"}},{"kind":"Field","name":{"kind":"Name","value":"mediaList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"priceList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"amenities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreatePropertyMutation, CreatePropertyMutationVariables>;
export const UpdatePropertyDocument = {"__meta__":{"hash":"485887cb9a5d7cb00e31cb6e87883f7ce6335800"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProperty"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"typeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uniqueCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"landSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"floorSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"location"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertLocationInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mediaList"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"priceList"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePriceInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amenityIds"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProperty"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"updatePropertyData"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"typeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"typeId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"uniqueCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uniqueCode"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"landSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"landSize"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"floorSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"floorSize"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"mediaList"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mediaList"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"priceList"},"value":{"kind":"Variable","name":{"kind":"Name","value":"priceList"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"Variable","name":{"kind":"Name","value":"location"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"amenityIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amenityIds"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyAttributes"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyAttributes"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCode"}},{"kind":"Field","name":{"kind":"Name","value":"landSize"}},{"kind":"Field","name":{"kind":"Name","value":"floorSize"}},{"kind":"Field","name":{"kind":"Name","value":"mediaList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"priceList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"amenities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdatePropertyMutation, UpdatePropertyMutationVariables>;
export const FindPropertyByIdDocument = {"__meta__":{"hash":"5dbc604a273865d1e929f33ece493d9506a3d523"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindPropertyById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findProperty"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCode"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commercialStatus"}},{"kind":"Field","name":{"kind":"Name","value":"furnishing"}},{"kind":"Field","name":{"kind":"Name","value":"floorSize"}},{"kind":"Field","name":{"kind":"Name","value":"landSize"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"subdistrict"}},{"kind":"Field","name":{"kind":"Name","value":"district"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}},{"kind":"Field","name":{"kind":"Name","value":"priceList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediaList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"mimetype"}}]}},{"kind":"Field","name":{"kind":"Name","value":"amenities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<FindPropertyByIdQuery, FindPropertyByIdQueryVariables>;
export const FindPropertiesDocument = {"__meta__":{"hash":"9d74766b3cc263f381e60099b9ff3dac20b1e092"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCode"}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediaList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FindPropertiesQuery, FindPropertiesQueryVariables>;