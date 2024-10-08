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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type Amenity = {
  __typename?: 'Amenity';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type BigIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['String']['input']>;
  divide?: InputMaybe<Scalars['String']['input']>;
  increment?: InputMaybe<Scalars['String']['input']>;
  multiply?: InputMaybe<Scalars['String']['input']>;
  set?: InputMaybe<Scalars['String']['input']>;
};

export type BigIntFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedBigIntFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DecimalFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Decimal']['input']>;
  divide?: InputMaybe<Scalars['Decimal']['input']>;
  increment?: InputMaybe<Scalars['Decimal']['input']>;
  multiply?: InputMaybe<Scalars['Decimal']['input']>;
  set?: InputMaybe<Scalars['Decimal']['input']>;
};

export type DecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type DecimalNullableFilter = {
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type EnumLeaseStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<LeaseStatus>;
};

export type EnumLeaseStatusFilter = {
  equals?: InputMaybe<LeaseStatus>;
  in?: InputMaybe<Array<LeaseStatus>>;
  not?: InputMaybe<NestedEnumLeaseStatusFilter>;
  notIn?: InputMaybe<Array<LeaseStatus>>;
};

export type EnumPermissionSubjectFieldUpdateOperationsInput = {
  set?: InputMaybe<PermissionSubject>;
};

export type EnumPermissionSubjectFilter = {
  equals?: InputMaybe<PermissionSubject>;
  in?: InputMaybe<Array<PermissionSubject>>;
  not?: InputMaybe<NestedEnumPermissionSubjectFilter>;
  notIn?: InputMaybe<Array<PermissionSubject>>;
};

export type EnumPropertyCommercialStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<PropertyCommercialStatus>;
};

export type EnumPropertyCommercialStatusFilter = {
  equals?: InputMaybe<PropertyCommercialStatus>;
  in?: InputMaybe<Array<PropertyCommercialStatus>>;
  not?: InputMaybe<NestedEnumPropertyCommercialStatusFilter>;
  notIn?: InputMaybe<Array<PropertyCommercialStatus>>;
};

export type EnumPropertyFurnishingNullableFilter = {
  equals?: InputMaybe<PropertyFurnishing>;
  in?: InputMaybe<Array<PropertyFurnishing>>;
  not?: InputMaybe<NestedEnumPropertyFurnishingNullableFilter>;
  notIn?: InputMaybe<Array<PropertyFurnishing>>;
};

export type EnumPropertyListingStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<PropertyListingStatus>;
};

export type EnumPropertyListingStatusFilter = {
  equals?: InputMaybe<PropertyListingStatus>;
  in?: InputMaybe<Array<PropertyListingStatus>>;
  not?: InputMaybe<NestedEnumPropertyListingStatusFilter>;
  notIn?: InputMaybe<Array<PropertyListingStatus>>;
};

export type EnumPropertyListingTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<PropertyListingType>;
};

export type EnumPropertyListingTypeFilter = {
  equals?: InputMaybe<PropertyListingType>;
  in?: InputMaybe<Array<PropertyListingType>>;
  not?: InputMaybe<NestedEnumPropertyListingTypeFilter>;
  notIn?: InputMaybe<Array<PropertyListingType>>;
};

export type EnumPropertyMaintenanceRequestStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<PropertyMaintenanceRequestStatus>;
};

export type EnumPropertyMaintenanceRequestStatusFilter = {
  equals?: InputMaybe<PropertyMaintenanceRequestStatus>;
  in?: InputMaybe<Array<PropertyMaintenanceRequestStatus>>;
  not?: InputMaybe<NestedEnumPropertyMaintenanceRequestStatusFilter>;
  notIn?: InputMaybe<Array<PropertyMaintenanceRequestStatus>>;
};

export type EnumPropertyStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<PropertyStatus>;
};

export type EnumPropertyStatusFilter = {
  equals?: InputMaybe<PropertyStatus>;
  in?: InputMaybe<Array<PropertyStatus>>;
  not?: InputMaybe<NestedEnumPropertyStatusFilter>;
  notIn?: InputMaybe<Array<PropertyStatus>>;
};

export type File = {
  __typename?: 'File';
  Property?: Maybe<Array<PropertyGenerated>>;
  _count: FileCount;
  id: Scalars['ID']['output'];
  mimetype: Scalars['String']['output'];
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['String']['output'];
};

export type FileCount = {
  __typename?: 'FileCount';
  Property: Scalars['Int']['output'];
};

export type FileCreateNestedManyWithoutPropertyInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutPropertyInput>>;
  create?: InputMaybe<Array<FileCreateWithoutPropertyInput>>;
};

export type FileCreateOrConnectWithoutPropertyInput = {
  create: FileCreateWithoutPropertyInput;
  where: FileWhereUniqueInput;
};

export type FileCreateWithoutPropertyInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  mimetype: Scalars['String']['input'];
  name: Scalars['String']['input'];
  path: Scalars['String']['input'];
  size: Scalars['String']['input'];
};

export type FileListRelationFilter = {
  every?: InputMaybe<FileWhereInput>;
  none?: InputMaybe<FileWhereInput>;
  some?: InputMaybe<FileWhereInput>;
};

export type FileOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FileScalarWhereInput = {
  AND?: InputMaybe<Array<FileScalarWhereInput>>;
  NOT?: InputMaybe<Array<FileScalarWhereInput>>;
  OR?: InputMaybe<Array<FileScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  mimetype?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  size?: InputMaybe<BigIntFilter>;
};

export type FileUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  mimetype?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  size?: InputMaybe<BigIntFieldUpdateOperationsInput>;
};

export type FileUpdateManyWithWhereWithoutPropertyInput = {
  data: FileUpdateManyMutationInput;
  where: FileScalarWhereInput;
};

export type FileUpdateManyWithoutPropertyNestedInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutPropertyInput>>;
  create?: InputMaybe<Array<FileCreateWithoutPropertyInput>>;
  delete?: InputMaybe<Array<FileWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FileScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FileWhereUniqueInput>>;
  set?: InputMaybe<Array<FileWhereUniqueInput>>;
  update?: InputMaybe<Array<FileUpdateWithWhereUniqueWithoutPropertyInput>>;
  updateMany?: InputMaybe<Array<FileUpdateManyWithWhereWithoutPropertyInput>>;
  upsert?: InputMaybe<Array<FileUpsertWithWhereUniqueWithoutPropertyInput>>;
};

export type FileUpdateWithWhereUniqueWithoutPropertyInput = {
  data: FileUpdateWithoutPropertyInput;
  where: FileWhereUniqueInput;
};

export type FileUpdateWithoutPropertyInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  mimetype?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  size?: InputMaybe<BigIntFieldUpdateOperationsInput>;
};

export type FileUpsertWithWhereUniqueWithoutPropertyInput = {
  create: FileCreateWithoutPropertyInput;
  update: FileUpdateWithoutPropertyInput;
  where: FileWhereUniqueInput;
};

export type FileWhereInput = {
  AND?: InputMaybe<Array<FileWhereInput>>;
  NOT?: InputMaybe<Array<FileWhereInput>>;
  OR?: InputMaybe<Array<FileWhereInput>>;
  Property?: InputMaybe<PropertyListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  mimetype?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  size?: InputMaybe<BigIntFilter>;
};

export type FileWhereUniqueInput = {
  AND?: InputMaybe<Array<FileWhereInput>>;
  NOT?: InputMaybe<Array<FileWhereInput>>;
  OR?: InputMaybe<Array<FileWhereInput>>;
  Property?: InputMaybe<PropertyListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  mimetype?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  size?: InputMaybe<BigIntFilter>;
};

export type FileWithUrl = {
  __typename?: 'FileWithUrl';
  Property?: Maybe<Array<PropertyGenerated>>;
  _count: FileCount;
  id: Scalars['ID']['output'];
  mimetype: Scalars['String']['output'];
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type JsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Lease = {
  __typename?: 'Lease';
  _count: LeaseCount;
  createdAt: Scalars['DateTime']['output'];
  depositAmount: Scalars['Decimal']['output'];
  endDate: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  maintenanceRequests?: Maybe<Array<PropertyMaintenanceRequest>>;
  property: PropertyGenerated;
  propertyId: Scalars['String']['output'];
  rentAmount: Scalars['Decimal']['output'];
  startedDate: Scalars['DateTime']['output'];
  status: LeaseStatus;
  tenant: Tenant;
  tenantId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type LeaseCount = {
  __typename?: 'LeaseCount';
  maintenanceRequests: Scalars['Int']['output'];
};

export type LeaseCreateManyPropertyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  depositAmount: Scalars['Decimal']['input'];
  endDate: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  rentAmount: Scalars['Decimal']['input'];
  startedDate: Scalars['DateTime']['input'];
  status: LeaseStatus;
  tenantId: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LeaseCreateManyPropertyInputEnvelope = {
  data: Array<LeaseCreateManyPropertyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LeaseCreateManyTenantInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  depositAmount: Scalars['Decimal']['input'];
  endDate: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  propertyId: Scalars['String']['input'];
  rentAmount: Scalars['Decimal']['input'];
  startedDate: Scalars['DateTime']['input'];
  status: LeaseStatus;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LeaseCreateManyTenantInputEnvelope = {
  data: Array<LeaseCreateManyTenantInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LeaseCreateNestedManyWithoutPropertyInput = {
  connect?: InputMaybe<Array<LeaseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LeaseCreateOrConnectWithoutPropertyInput>>;
  create?: InputMaybe<Array<LeaseCreateWithoutPropertyInput>>;
  createMany?: InputMaybe<LeaseCreateManyPropertyInputEnvelope>;
};

export type LeaseCreateNestedManyWithoutTenantInput = {
  connect?: InputMaybe<Array<LeaseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LeaseCreateOrConnectWithoutTenantInput>>;
  create?: InputMaybe<Array<LeaseCreateWithoutTenantInput>>;
  createMany?: InputMaybe<LeaseCreateManyTenantInputEnvelope>;
};

export type LeaseCreateNestedOneWithoutMaintenanceRequestsInput = {
  connect?: InputMaybe<LeaseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeaseCreateOrConnectWithoutMaintenanceRequestsInput>;
  create?: InputMaybe<LeaseCreateWithoutMaintenanceRequestsInput>;
};

export type LeaseCreateOrConnectWithoutMaintenanceRequestsInput = {
  create: LeaseCreateWithoutMaintenanceRequestsInput;
  where: LeaseWhereUniqueInput;
};

export type LeaseCreateOrConnectWithoutPropertyInput = {
  create: LeaseCreateWithoutPropertyInput;
  where: LeaseWhereUniqueInput;
};

export type LeaseCreateOrConnectWithoutTenantInput = {
  create: LeaseCreateWithoutTenantInput;
  where: LeaseWhereUniqueInput;
};

export type LeaseCreateWithoutMaintenanceRequestsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  depositAmount: Scalars['Decimal']['input'];
  endDate: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  property: PropertyCreateNestedOneWithoutLeasesInput;
  rentAmount: Scalars['Decimal']['input'];
  startedDate: Scalars['DateTime']['input'];
  status: LeaseStatus;
  tenant: TenantCreateNestedOneWithoutLeasesInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LeaseCreateWithoutPropertyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  depositAmount: Scalars['Decimal']['input'];
  endDate: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  maintenanceRequests?: InputMaybe<PropertyMaintenanceRequestCreateNestedManyWithoutLeaseInput>;
  rentAmount: Scalars['Decimal']['input'];
  startedDate: Scalars['DateTime']['input'];
  status: LeaseStatus;
  tenant: TenantCreateNestedOneWithoutLeasesInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LeaseCreateWithoutTenantInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  depositAmount: Scalars['Decimal']['input'];
  endDate: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  maintenanceRequests?: InputMaybe<PropertyMaintenanceRequestCreateNestedManyWithoutLeaseInput>;
  property: PropertyCreateNestedOneWithoutLeasesInput;
  rentAmount: Scalars['Decimal']['input'];
  startedDate: Scalars['DateTime']['input'];
  status: LeaseStatus;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LeaseListRelationFilter = {
  every?: InputMaybe<LeaseWhereInput>;
  none?: InputMaybe<LeaseWhereInput>;
  some?: InputMaybe<LeaseWhereInput>;
};

export type LeaseOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LeaseRelationFilter = {
  is?: InputMaybe<LeaseWhereInput>;
  isNot?: InputMaybe<LeaseWhereInput>;
};

export type LeaseScalarWhereInput = {
  AND?: InputMaybe<Array<LeaseScalarWhereInput>>;
  NOT?: InputMaybe<Array<LeaseScalarWhereInput>>;
  OR?: InputMaybe<Array<LeaseScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  depositAmount?: InputMaybe<DecimalFilter>;
  endDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  propertyId?: InputMaybe<StringFilter>;
  rentAmount?: InputMaybe<DecimalFilter>;
  startedDate?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumLeaseStatusFilter>;
  tenantId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum LeaseStatus {
  Active = 'Active',
  Expired = 'Expired',
  Pending = 'Pending',
  Terminated = 'Terminated'
}

export type LeaseUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  depositAmount?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  endDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rentAmount?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  startedDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumLeaseStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LeaseUpdateManyWithWhereWithoutPropertyInput = {
  data: LeaseUpdateManyMutationInput;
  where: LeaseScalarWhereInput;
};

export type LeaseUpdateManyWithWhereWithoutTenantInput = {
  data: LeaseUpdateManyMutationInput;
  where: LeaseScalarWhereInput;
};

export type LeaseUpdateManyWithoutPropertyNestedInput = {
  connect?: InputMaybe<Array<LeaseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LeaseCreateOrConnectWithoutPropertyInput>>;
  create?: InputMaybe<Array<LeaseCreateWithoutPropertyInput>>;
  createMany?: InputMaybe<LeaseCreateManyPropertyInputEnvelope>;
  delete?: InputMaybe<Array<LeaseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LeaseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LeaseWhereUniqueInput>>;
  set?: InputMaybe<Array<LeaseWhereUniqueInput>>;
  update?: InputMaybe<Array<LeaseUpdateWithWhereUniqueWithoutPropertyInput>>;
  updateMany?: InputMaybe<Array<LeaseUpdateManyWithWhereWithoutPropertyInput>>;
  upsert?: InputMaybe<Array<LeaseUpsertWithWhereUniqueWithoutPropertyInput>>;
};

export type LeaseUpdateManyWithoutTenantNestedInput = {
  connect?: InputMaybe<Array<LeaseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LeaseCreateOrConnectWithoutTenantInput>>;
  create?: InputMaybe<Array<LeaseCreateWithoutTenantInput>>;
  createMany?: InputMaybe<LeaseCreateManyTenantInputEnvelope>;
  delete?: InputMaybe<Array<LeaseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LeaseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LeaseWhereUniqueInput>>;
  set?: InputMaybe<Array<LeaseWhereUniqueInput>>;
  update?: InputMaybe<Array<LeaseUpdateWithWhereUniqueWithoutTenantInput>>;
  updateMany?: InputMaybe<Array<LeaseUpdateManyWithWhereWithoutTenantInput>>;
  upsert?: InputMaybe<Array<LeaseUpsertWithWhereUniqueWithoutTenantInput>>;
};

export type LeaseUpdateOneRequiredWithoutMaintenanceRequestsNestedInput = {
  connect?: InputMaybe<LeaseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeaseCreateOrConnectWithoutMaintenanceRequestsInput>;
  create?: InputMaybe<LeaseCreateWithoutMaintenanceRequestsInput>;
  update?: InputMaybe<LeaseUpdateToOneWithWhereWithoutMaintenanceRequestsInput>;
  upsert?: InputMaybe<LeaseUpsertWithoutMaintenanceRequestsInput>;
};

export type LeaseUpdateToOneWithWhereWithoutMaintenanceRequestsInput = {
  data: LeaseUpdateWithoutMaintenanceRequestsInput;
  where?: InputMaybe<LeaseWhereInput>;
};

export type LeaseUpdateWithWhereUniqueWithoutPropertyInput = {
  data: LeaseUpdateWithoutPropertyInput;
  where: LeaseWhereUniqueInput;
};

export type LeaseUpdateWithWhereUniqueWithoutTenantInput = {
  data: LeaseUpdateWithoutTenantInput;
  where: LeaseWhereUniqueInput;
};

export type LeaseUpdateWithoutMaintenanceRequestsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  depositAmount?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  endDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  property?: InputMaybe<PropertyUpdateOneRequiredWithoutLeasesNestedInput>;
  rentAmount?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  startedDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumLeaseStatusFieldUpdateOperationsInput>;
  tenant?: InputMaybe<TenantUpdateOneRequiredWithoutLeasesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LeaseUpdateWithoutPropertyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  depositAmount?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  endDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  maintenanceRequests?: InputMaybe<PropertyMaintenanceRequestUpdateManyWithoutLeaseNestedInput>;
  rentAmount?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  startedDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumLeaseStatusFieldUpdateOperationsInput>;
  tenant?: InputMaybe<TenantUpdateOneRequiredWithoutLeasesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LeaseUpdateWithoutTenantInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  depositAmount?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  endDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  maintenanceRequests?: InputMaybe<PropertyMaintenanceRequestUpdateManyWithoutLeaseNestedInput>;
  property?: InputMaybe<PropertyUpdateOneRequiredWithoutLeasesNestedInput>;
  rentAmount?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  startedDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumLeaseStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LeaseUpsertWithWhereUniqueWithoutPropertyInput = {
  create: LeaseCreateWithoutPropertyInput;
  update: LeaseUpdateWithoutPropertyInput;
  where: LeaseWhereUniqueInput;
};

export type LeaseUpsertWithWhereUniqueWithoutTenantInput = {
  create: LeaseCreateWithoutTenantInput;
  update: LeaseUpdateWithoutTenantInput;
  where: LeaseWhereUniqueInput;
};

export type LeaseUpsertWithoutMaintenanceRequestsInput = {
  create: LeaseCreateWithoutMaintenanceRequestsInput;
  update: LeaseUpdateWithoutMaintenanceRequestsInput;
  where?: InputMaybe<LeaseWhereInput>;
};

export type LeaseWhereInput = {
  AND?: InputMaybe<Array<LeaseWhereInput>>;
  NOT?: InputMaybe<Array<LeaseWhereInput>>;
  OR?: InputMaybe<Array<LeaseWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  depositAmount?: InputMaybe<DecimalFilter>;
  endDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  maintenanceRequests?: InputMaybe<PropertyMaintenanceRequestListRelationFilter>;
  property?: InputMaybe<PropertyRelationFilter>;
  propertyId?: InputMaybe<StringFilter>;
  rentAmount?: InputMaybe<DecimalFilter>;
  startedDate?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumLeaseStatusFilter>;
  tenant?: InputMaybe<TenantRelationFilter>;
  tenantId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type LeaseWhereUniqueInput = {
  AND?: InputMaybe<Array<LeaseWhereInput>>;
  NOT?: InputMaybe<Array<LeaseWhereInput>>;
  OR?: InputMaybe<Array<LeaseWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  depositAmount?: InputMaybe<DecimalFilter>;
  endDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  maintenanceRequests?: InputMaybe<PropertyMaintenanceRequestListRelationFilter>;
  property?: InputMaybe<PropertyRelationFilter>;
  propertyId?: InputMaybe<StringFilter>;
  rentAmount?: InputMaybe<DecimalFilter>;
  startedDate?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumLeaseStatusFilter>;
  tenant?: InputMaybe<TenantRelationFilter>;
  tenantId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Location = {
  __typename?: 'Location';
  Property?: Maybe<Array<PropertyGenerated>>;
  _count: LocationCount;
  address?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  latitude?: Maybe<Scalars['Decimal']['output']>;
  longitude?: Maybe<Scalars['Decimal']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  subdistrict?: Maybe<Scalars['String']['output']>;
};

export type LocationCount = {
  __typename?: 'LocationCount';
  Property: Scalars['Int']['output'];
};

export type LocationCreateNestedOneWithoutPropertyInput = {
  connect?: InputMaybe<LocationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LocationCreateOrConnectWithoutPropertyInput>;
  create?: InputMaybe<LocationCreateWithoutPropertyInput>;
};

export type LocationCreateOrConnectWithoutPropertyInput = {
  create: LocationCreateWithoutPropertyInput;
  where: LocationWhereUniqueInput;
};

export type LocationCreateWithoutPropertyInput = {
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

export type LocationNullableRelationFilter = {
  is?: InputMaybe<LocationWhereInput>;
  isNot?: InputMaybe<LocationWhereInput>;
};

export type LocationOrderByWithRelationInput = {
  Property?: InputMaybe<PropertyOrderByRelationAggregateInput>;
  address?: InputMaybe<SortOrderInput>;
  country?: InputMaybe<SortOrderInput>;
  district?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrderInput>;
  longitude?: InputMaybe<SortOrderInput>;
  postalCode?: InputMaybe<SortOrderInput>;
  province?: InputMaybe<SortOrderInput>;
  subdistrict?: InputMaybe<SortOrderInput>;
};

export type LocationUpdateOneWithoutPropertyNestedInput = {
  connect?: InputMaybe<LocationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LocationCreateOrConnectWithoutPropertyInput>;
  create?: InputMaybe<LocationCreateWithoutPropertyInput>;
  delete?: InputMaybe<LocationWhereInput>;
  disconnect?: InputMaybe<LocationWhereInput>;
  update?: InputMaybe<LocationUpdateToOneWithWhereWithoutPropertyInput>;
  upsert?: InputMaybe<LocationUpsertWithoutPropertyInput>;
};

export type LocationUpdateToOneWithWhereWithoutPropertyInput = {
  data: LocationUpdateWithoutPropertyInput;
  where?: InputMaybe<LocationWhereInput>;
};

export type LocationUpdateWithoutPropertyInput = {
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  district?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  province?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  subdistrict?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LocationUpsertWithoutPropertyInput = {
  create: LocationCreateWithoutPropertyInput;
  update: LocationUpdateWithoutPropertyInput;
  where?: InputMaybe<LocationWhereInput>;
};

export type LocationWhereInput = {
  AND?: InputMaybe<Array<LocationWhereInput>>;
  NOT?: InputMaybe<Array<LocationWhereInput>>;
  OR?: InputMaybe<Array<LocationWhereInput>>;
  Property?: InputMaybe<PropertyListRelationFilter>;
  address?: InputMaybe<StringNullableFilter>;
  country?: InputMaybe<StringNullableFilter>;
  district?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  latitude?: InputMaybe<DecimalNullableFilter>;
  longitude?: InputMaybe<DecimalNullableFilter>;
  postalCode?: InputMaybe<StringNullableFilter>;
  province?: InputMaybe<StringNullableFilter>;
  subdistrict?: InputMaybe<StringNullableFilter>;
};

export type LocationWhereUniqueInput = {
  AND?: InputMaybe<Array<LocationWhereInput>>;
  NOT?: InputMaybe<Array<LocationWhereInput>>;
  OR?: InputMaybe<Array<LocationWhereInput>>;
  Property?: InputMaybe<PropertyListRelationFilter>;
  address?: InputMaybe<StringNullableFilter>;
  country?: InputMaybe<StringNullableFilter>;
  district?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<DecimalNullableFilter>;
  longitude?: InputMaybe<DecimalNullableFilter>;
  postalCode?: InputMaybe<StringNullableFilter>;
  province?: InputMaybe<StringNullableFilter>;
  subdistrict?: InputMaybe<StringNullableFilter>;
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
  createTenant: Tenant;
  generateSignedUrl: Scalars['String']['output'];
  login: Token;
  removeTenant: Tenant;
  updateAmenity: Amenity;
  updateProperty: Property;
  updateTenant: Tenant;
};


export type MutationCreateAmenityArgs = {
  createAmenityData: PropertyAmenityCreateInput;
};


export type MutationCreatePropertyArgs = {
  data: PropertyCreateInput;
};


export type MutationCreatePropertyTypeArgs = {
  data: PropertyTypeCreateInput;
};


export type MutationCreateTenantArgs = {
  data: TenantCreateInput;
};


export type MutationGenerateSignedUrlArgs = {
  mimeType: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  credentials: LoginInput;
};


export type MutationRemoveTenantArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateAmenityArgs = {
  data: PropertyAmenityUpdateInput;
  id: Scalars['String']['input'];
};


export type MutationUpdatePropertyArgs = {
  data: PropertyUpdateInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateTenantArgs = {
  data: TenantUpdateInput;
  where: TenantWhereUniqueInput;
};

export type NestedBigIntFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedBigIntFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type NestedDecimalNullableFilter = {
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type NestedEnumLeaseStatusFilter = {
  equals?: InputMaybe<LeaseStatus>;
  in?: InputMaybe<Array<LeaseStatus>>;
  not?: InputMaybe<NestedEnumLeaseStatusFilter>;
  notIn?: InputMaybe<Array<LeaseStatus>>;
};

export type NestedEnumPermissionSubjectFilter = {
  equals?: InputMaybe<PermissionSubject>;
  in?: InputMaybe<Array<PermissionSubject>>;
  not?: InputMaybe<NestedEnumPermissionSubjectFilter>;
  notIn?: InputMaybe<Array<PermissionSubject>>;
};

export type NestedEnumPropertyCommercialStatusFilter = {
  equals?: InputMaybe<PropertyCommercialStatus>;
  in?: InputMaybe<Array<PropertyCommercialStatus>>;
  not?: InputMaybe<NestedEnumPropertyCommercialStatusFilter>;
  notIn?: InputMaybe<Array<PropertyCommercialStatus>>;
};

export type NestedEnumPropertyFurnishingNullableFilter = {
  equals?: InputMaybe<PropertyFurnishing>;
  in?: InputMaybe<Array<PropertyFurnishing>>;
  not?: InputMaybe<NestedEnumPropertyFurnishingNullableFilter>;
  notIn?: InputMaybe<Array<PropertyFurnishing>>;
};

export type NestedEnumPropertyListingStatusFilter = {
  equals?: InputMaybe<PropertyListingStatus>;
  in?: InputMaybe<Array<PropertyListingStatus>>;
  not?: InputMaybe<NestedEnumPropertyListingStatusFilter>;
  notIn?: InputMaybe<Array<PropertyListingStatus>>;
};

export type NestedEnumPropertyListingTypeFilter = {
  equals?: InputMaybe<PropertyListingType>;
  in?: InputMaybe<Array<PropertyListingType>>;
  not?: InputMaybe<NestedEnumPropertyListingTypeFilter>;
  notIn?: InputMaybe<Array<PropertyListingType>>;
};

export type NestedEnumPropertyMaintenanceRequestStatusFilter = {
  equals?: InputMaybe<PropertyMaintenanceRequestStatus>;
  in?: InputMaybe<Array<PropertyMaintenanceRequestStatus>>;
  not?: InputMaybe<NestedEnumPropertyMaintenanceRequestStatusFilter>;
  notIn?: InputMaybe<Array<PropertyMaintenanceRequestStatus>>;
};

export type NestedEnumPropertyStatusFilter = {
  equals?: InputMaybe<PropertyStatus>;
  in?: InputMaybe<Array<PropertyStatus>>;
  not?: InputMaybe<NestedEnumPropertyStatusFilter>;
  notIn?: InputMaybe<Array<PropertyStatus>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NullableDecimalFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Decimal']['input']>;
  divide?: InputMaybe<Scalars['Decimal']['input']>;
  increment?: InputMaybe<Scalars['Decimal']['input']>;
  multiply?: InputMaybe<Scalars['Decimal']['input']>;
  set?: InputMaybe<Scalars['Decimal']['input']>;
};

export type NullableEnumPropertyFurnishingFieldUpdateOperationsInput = {
  set?: InputMaybe<PropertyFurnishing>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Permission = {
  __typename?: 'Permission';
  _count: PermissionCount;
  action: Scalars['String']['output'];
  conditions?: Maybe<Scalars['JSON']['output']>;
  field?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['ID']['output'];
  isAllowed: Scalars['Boolean']['output'];
  roles?: Maybe<Array<Role>>;
  subject: PermissionSubject;
  users?: Maybe<Array<User>>;
};

export type PermissionCount = {
  __typename?: 'PermissionCount';
  roles: Scalars['Int']['output'];
  users: Scalars['Int']['output'];
};

export type PermissionCreateNestedManyWithoutRolesInput = {
  connect?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PermissionCreateOrConnectWithoutRolesInput>>;
  create?: InputMaybe<Array<PermissionCreateWithoutRolesInput>>;
};

export type PermissionCreateNestedManyWithoutUsersInput = {
  connect?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PermissionCreateOrConnectWithoutUsersInput>>;
  create?: InputMaybe<Array<PermissionCreateWithoutUsersInput>>;
};

export type PermissionCreateOrConnectWithoutRolesInput = {
  create: PermissionCreateWithoutRolesInput;
  where: PermissionWhereUniqueInput;
};

export type PermissionCreateOrConnectWithoutUsersInput = {
  create: PermissionCreateWithoutUsersInput;
  where: PermissionWhereUniqueInput;
};

export type PermissionCreateWithoutRolesInput = {
  action: Scalars['String']['input'];
  conditions?: InputMaybe<Scalars['JSON']['input']>;
  field?: InputMaybe<PermissionCreatefieldInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  isAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  subject: PermissionSubject;
  users?: InputMaybe<UserCreateNestedManyWithoutPermissionsInput>;
};

export type PermissionCreateWithoutUsersInput = {
  action: Scalars['String']['input'];
  conditions?: InputMaybe<Scalars['JSON']['input']>;
  field?: InputMaybe<PermissionCreatefieldInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  isAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  roles?: InputMaybe<RoleCreateNestedManyWithoutPermissionsInput>;
  subject: PermissionSubject;
};

export type PermissionCreatefieldInput = {
  set: Array<Scalars['String']['input']>;
};

export type PermissionListRelationFilter = {
  every?: InputMaybe<PermissionWhereInput>;
  none?: InputMaybe<PermissionWhereInput>;
  some?: InputMaybe<PermissionWhereInput>;
};

export type PermissionScalarWhereInput = {
  AND?: InputMaybe<Array<PermissionScalarWhereInput>>;
  NOT?: InputMaybe<Array<PermissionScalarWhereInput>>;
  OR?: InputMaybe<Array<PermissionScalarWhereInput>>;
  action?: InputMaybe<StringFilter>;
  conditions?: InputMaybe<JsonNullableFilter>;
  field?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<StringFilter>;
  isAllowed?: InputMaybe<BoolFilter>;
  subject?: InputMaybe<EnumPermissionSubjectFilter>;
};

export enum PermissionSubject {
  Agent = 'Agent',
  Amenity = 'Amenity',
  Client = 'Client',
  Property = 'Property',
  PropertyType = 'PropertyType',
  Tenant = 'Tenant',
  User = 'User'
}

export type PermissionSubjectActionCompoundUniqueInput = {
  action: Scalars['String']['input'];
  subject: PermissionSubject;
};

export type PermissionUpdateManyMutationInput = {
  action?: InputMaybe<StringFieldUpdateOperationsInput>;
  conditions?: InputMaybe<Scalars['JSON']['input']>;
  field?: InputMaybe<PermissionUpdatefieldInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAllowed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  subject?: InputMaybe<EnumPermissionSubjectFieldUpdateOperationsInput>;
};

export type PermissionUpdateManyWithWhereWithoutRolesInput = {
  data: PermissionUpdateManyMutationInput;
  where: PermissionScalarWhereInput;
};

export type PermissionUpdateManyWithWhereWithoutUsersInput = {
  data: PermissionUpdateManyMutationInput;
  where: PermissionScalarWhereInput;
};

export type PermissionUpdateManyWithoutRolesNestedInput = {
  connect?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PermissionCreateOrConnectWithoutRolesInput>>;
  create?: InputMaybe<Array<PermissionCreateWithoutRolesInput>>;
  delete?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PermissionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  set?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  update?: InputMaybe<Array<PermissionUpdateWithWhereUniqueWithoutRolesInput>>;
  updateMany?: InputMaybe<Array<PermissionUpdateManyWithWhereWithoutRolesInput>>;
  upsert?: InputMaybe<Array<PermissionUpsertWithWhereUniqueWithoutRolesInput>>;
};

export type PermissionUpdateManyWithoutUsersNestedInput = {
  connect?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PermissionCreateOrConnectWithoutUsersInput>>;
  create?: InputMaybe<Array<PermissionCreateWithoutUsersInput>>;
  delete?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PermissionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  set?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  update?: InputMaybe<Array<PermissionUpdateWithWhereUniqueWithoutUsersInput>>;
  updateMany?: InputMaybe<Array<PermissionUpdateManyWithWhereWithoutUsersInput>>;
  upsert?: InputMaybe<Array<PermissionUpsertWithWhereUniqueWithoutUsersInput>>;
};

export type PermissionUpdateWithWhereUniqueWithoutRolesInput = {
  data: PermissionUpdateWithoutRolesInput;
  where: PermissionWhereUniqueInput;
};

export type PermissionUpdateWithWhereUniqueWithoutUsersInput = {
  data: PermissionUpdateWithoutUsersInput;
  where: PermissionWhereUniqueInput;
};

export type PermissionUpdateWithoutRolesInput = {
  action?: InputMaybe<StringFieldUpdateOperationsInput>;
  conditions?: InputMaybe<Scalars['JSON']['input']>;
  field?: InputMaybe<PermissionUpdatefieldInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAllowed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  subject?: InputMaybe<EnumPermissionSubjectFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutPermissionsNestedInput>;
};

export type PermissionUpdateWithoutUsersInput = {
  action?: InputMaybe<StringFieldUpdateOperationsInput>;
  conditions?: InputMaybe<Scalars['JSON']['input']>;
  field?: InputMaybe<PermissionUpdatefieldInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAllowed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  roles?: InputMaybe<RoleUpdateManyWithoutPermissionsNestedInput>;
  subject?: InputMaybe<EnumPermissionSubjectFieldUpdateOperationsInput>;
};

export type PermissionUpdatefieldInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type PermissionUpsertWithWhereUniqueWithoutRolesInput = {
  create: PermissionCreateWithoutRolesInput;
  update: PermissionUpdateWithoutRolesInput;
  where: PermissionWhereUniqueInput;
};

export type PermissionUpsertWithWhereUniqueWithoutUsersInput = {
  create: PermissionCreateWithoutUsersInput;
  update: PermissionUpdateWithoutUsersInput;
  where: PermissionWhereUniqueInput;
};

export type PermissionWhereInput = {
  AND?: InputMaybe<Array<PermissionWhereInput>>;
  NOT?: InputMaybe<Array<PermissionWhereInput>>;
  OR?: InputMaybe<Array<PermissionWhereInput>>;
  action?: InputMaybe<StringFilter>;
  conditions?: InputMaybe<JsonNullableFilter>;
  field?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<StringFilter>;
  isAllowed?: InputMaybe<BoolFilter>;
  roles?: InputMaybe<RoleListRelationFilter>;
  subject?: InputMaybe<EnumPermissionSubjectFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type PermissionWhereUniqueInput = {
  AND?: InputMaybe<Array<PermissionWhereInput>>;
  NOT?: InputMaybe<Array<PermissionWhereInput>>;
  OR?: InputMaybe<Array<PermissionWhereInput>>;
  action?: InputMaybe<StringFilter>;
  conditions?: InputMaybe<JsonNullableFilter>;
  field?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  isAllowed?: InputMaybe<BoolFilter>;
  roles?: InputMaybe<RoleListRelationFilter>;
  subject?: InputMaybe<EnumPermissionSubjectFilter>;
  subject_action?: InputMaybe<PermissionSubjectActionCompoundUniqueInput>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type Price = {
  __typename?: 'Price';
  currency: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  price: Scalars['Decimal']['output'];
  property: PropertyGenerated;
  propertyId: Scalars['String']['output'];
};

export type PriceCreateManyPropertyInput = {
  currency: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Decimal']['input'];
};

export type PriceCreateManyPropertyInputEnvelope = {
  data: Array<PriceCreateManyPropertyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PriceCreateNestedManyWithoutPropertyInput = {
  connect?: InputMaybe<Array<PriceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PriceCreateOrConnectWithoutPropertyInput>>;
  create?: InputMaybe<Array<PriceCreateWithoutPropertyInput>>;
  createMany?: InputMaybe<PriceCreateManyPropertyInputEnvelope>;
};

export type PriceCreateOrConnectWithoutPropertyInput = {
  create: PriceCreateWithoutPropertyInput;
  where: PriceWhereUniqueInput;
};

export type PriceCreateWithoutPropertyInput = {
  currency: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Decimal']['input'];
};

export type PriceCurrencyPropertyIdCompoundUniqueInput = {
  currency: Scalars['String']['input'];
  propertyId: Scalars['String']['input'];
};

export type PriceListRelationFilter = {
  every?: InputMaybe<PriceWhereInput>;
  none?: InputMaybe<PriceWhereInput>;
  some?: InputMaybe<PriceWhereInput>;
};

export type PriceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PriceScalarWhereInput = {
  AND?: InputMaybe<Array<PriceScalarWhereInput>>;
  NOT?: InputMaybe<Array<PriceScalarWhereInput>>;
  OR?: InputMaybe<Array<PriceScalarWhereInput>>;
  currency?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  price?: InputMaybe<DecimalFilter>;
  propertyId?: InputMaybe<StringFilter>;
};

export type PriceUpdateManyMutationInput = {
  currency?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type PriceUpdateManyWithWhereWithoutPropertyInput = {
  data: PriceUpdateManyMutationInput;
  where: PriceScalarWhereInput;
};

export type PriceUpdateManyWithoutPropertyNestedInput = {
  connect?: InputMaybe<Array<PriceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PriceCreateOrConnectWithoutPropertyInput>>;
  create?: InputMaybe<Array<PriceCreateWithoutPropertyInput>>;
  createMany?: InputMaybe<PriceCreateManyPropertyInputEnvelope>;
  delete?: InputMaybe<Array<PriceWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PriceScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PriceWhereUniqueInput>>;
  set?: InputMaybe<Array<PriceWhereUniqueInput>>;
  update?: InputMaybe<Array<PriceUpdateWithWhereUniqueWithoutPropertyInput>>;
  updateMany?: InputMaybe<Array<PriceUpdateManyWithWhereWithoutPropertyInput>>;
  upsert?: InputMaybe<Array<PriceUpsertWithWhereUniqueWithoutPropertyInput>>;
};

export type PriceUpdateWithWhereUniqueWithoutPropertyInput = {
  data: PriceUpdateWithoutPropertyInput;
  where: PriceWhereUniqueInput;
};

export type PriceUpdateWithoutPropertyInput = {
  currency?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type PriceUpsertWithWhereUniqueWithoutPropertyInput = {
  create: PriceCreateWithoutPropertyInput;
  update: PriceUpdateWithoutPropertyInput;
  where: PriceWhereUniqueInput;
};

export type PriceWhereInput = {
  AND?: InputMaybe<Array<PriceWhereInput>>;
  NOT?: InputMaybe<Array<PriceWhereInput>>;
  OR?: InputMaybe<Array<PriceWhereInput>>;
  currency?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  price?: InputMaybe<DecimalFilter>;
  property?: InputMaybe<PropertyRelationFilter>;
  propertyId?: InputMaybe<StringFilter>;
};

export type PriceWhereUniqueInput = {
  AND?: InputMaybe<Array<PriceWhereInput>>;
  NOT?: InputMaybe<Array<PriceWhereInput>>;
  OR?: InputMaybe<Array<PriceWhereInput>>;
  currency?: InputMaybe<StringFilter>;
  currency_propertyId?: InputMaybe<PriceCurrencyPropertyIdCompoundUniqueInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<DecimalFilter>;
  property?: InputMaybe<PropertyRelationFilter>;
  propertyId?: InputMaybe<StringFilter>;
};

export type Property = {
  __typename?: 'Property';
  PropertyListing?: Maybe<Array<PropertyListing>>;
  PropertyOwner?: Maybe<PropertyOwner>;
  _count: PropertyCount;
  amenities?: Maybe<Array<PropertyAmenity>>;
  assignedAgents?: Maybe<Array<User>>;
  commercialStatus: PropertyCommercialStatus;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  floorSize?: Maybe<Scalars['Decimal']['output']>;
  furnishing?: Maybe<PropertyFurnishing>;
  id: Scalars['ID']['output'];
  landSize?: Maybe<Scalars['Decimal']['output']>;
  leases?: Maybe<Array<Lease>>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['String']['output']>;
  maintenanceRequests?: Maybe<Array<PropertyMaintenanceRequest>>;
  mediaList?: Maybe<Array<FileWithUrl>>;
  name: Scalars['String']['output'];
  priceList?: Maybe<Array<Price>>;
  propertyOwnerId?: Maybe<Scalars['String']['output']>;
  status: PropertyStatus;
  type: PropertyType;
  typeId: Scalars['String']['output'];
  uniqueCode?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type PropertyAmenity = {
  __typename?: 'PropertyAmenity';
  _count: PropertyAmenityCount;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  properties?: Maybe<Array<PropertyGenerated>>;
  updatedAt: Scalars['DateTime']['output'];
};

export type PropertyAmenityCount = {
  __typename?: 'PropertyAmenityCount';
  properties: Scalars['Int']['output'];
};

export type PropertyAmenityCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type PropertyAmenityCreateNestedManyWithoutPropertiesInput = {
  connect?: InputMaybe<Array<PropertyAmenityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertyAmenityCreateOrConnectWithoutPropertiesInput>>;
  create?: InputMaybe<Array<PropertyAmenityCreateWithoutPropertiesInput>>;
};

export type PropertyAmenityCreateOrConnectWithoutPropertiesInput = {
  create: PropertyAmenityCreateWithoutPropertiesInput;
  where: PropertyAmenityWhereUniqueInput;
};

export type PropertyAmenityCreateWithoutPropertiesInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type PropertyAmenityListRelationFilter = {
  every?: InputMaybe<PropertyAmenityWhereInput>;
  none?: InputMaybe<PropertyAmenityWhereInput>;
  some?: InputMaybe<PropertyAmenityWhereInput>;
};

export type PropertyAmenityOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PropertyAmenityOrderByWithRelationInput = {
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export enum PropertyAmenityScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type PropertyAmenityScalarWhereInput = {
  AND?: InputMaybe<Array<PropertyAmenityScalarWhereInput>>;
  NOT?: InputMaybe<Array<PropertyAmenityScalarWhereInput>>;
  OR?: InputMaybe<Array<PropertyAmenityScalarWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type PropertyAmenityUpdateInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PropertyAmenityUpdateManyMutationInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PropertyAmenityUpdateManyWithWhereWithoutPropertiesInput = {
  data: PropertyAmenityUpdateManyMutationInput;
  where: PropertyAmenityScalarWhereInput;
};

export type PropertyAmenityUpdateManyWithoutPropertiesNestedInput = {
  connect?: InputMaybe<Array<PropertyAmenityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertyAmenityCreateOrConnectWithoutPropertiesInput>>;
  create?: InputMaybe<Array<PropertyAmenityCreateWithoutPropertiesInput>>;
  delete?: InputMaybe<Array<PropertyAmenityWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PropertyAmenityScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PropertyAmenityWhereUniqueInput>>;
  set?: InputMaybe<Array<PropertyAmenityWhereUniqueInput>>;
  update?: InputMaybe<Array<PropertyAmenityUpdateWithWhereUniqueWithoutPropertiesInput>>;
  updateMany?: InputMaybe<Array<PropertyAmenityUpdateManyWithWhereWithoutPropertiesInput>>;
  upsert?: InputMaybe<Array<PropertyAmenityUpsertWithWhereUniqueWithoutPropertiesInput>>;
};

export type PropertyAmenityUpdateWithWhereUniqueWithoutPropertiesInput = {
  data: PropertyAmenityUpdateWithoutPropertiesInput;
  where: PropertyAmenityWhereUniqueInput;
};

export type PropertyAmenityUpdateWithoutPropertiesInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PropertyAmenityUpsertWithWhereUniqueWithoutPropertiesInput = {
  create: PropertyAmenityCreateWithoutPropertiesInput;
  update: PropertyAmenityUpdateWithoutPropertiesInput;
  where: PropertyAmenityWhereUniqueInput;
};

export type PropertyAmenityWhereInput = {
  AND?: InputMaybe<Array<PropertyAmenityWhereInput>>;
  NOT?: InputMaybe<Array<PropertyAmenityWhereInput>>;
  OR?: InputMaybe<Array<PropertyAmenityWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type PropertyAmenityWhereUniqueInput = {
  AND?: InputMaybe<Array<PropertyAmenityWhereInput>>;
  NOT?: InputMaybe<Array<PropertyAmenityWhereInput>>;
  OR?: InputMaybe<Array<PropertyAmenityWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum PropertyCommercialStatus {
  Available = 'AVAILABLE',
  Pending = 'PENDING',
  Rented = 'RENTED',
  Sold = 'SOLD'
}

export type PropertyCount = {
  __typename?: 'PropertyCount';
  PropertyListing: Scalars['Int']['output'];
  amenities: Scalars['Int']['output'];
  assignedAgents: Scalars['Int']['output'];
  leases: Scalars['Int']['output'];
  maintenanceRequests: Scalars['Int']['output'];
  mediaList: Scalars['Int']['output'];
  priceList: Scalars['Int']['output'];
};

export type PropertyCreateInput = {
  PropertyListing?: InputMaybe<PropertyListingCreateNestedManyWithoutPropertyInput>;
  PropertyOwner?: InputMaybe<PropertyOwnerCreateNestedOneWithoutPropertiesInput>;
  amenities?: InputMaybe<PropertyAmenityCreateNestedManyWithoutPropertiesInput>;
  assignedAgents?: InputMaybe<UserCreateNestedManyWithoutAssignedPropertiesInput>;
  commercialStatus?: InputMaybe<PropertyCommercialStatus>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  floorSize?: InputMaybe<Scalars['Decimal']['input']>;
  furnishing?: InputMaybe<PropertyFurnishing>;
  id?: InputMaybe<Scalars['String']['input']>;
  landSize?: InputMaybe<Scalars['Decimal']['input']>;
  leases?: InputMaybe<LeaseCreateNestedManyWithoutPropertyInput>;
  location?: InputMaybe<LocationCreateNestedOneWithoutPropertyInput>;
  maintenanceRequests?: InputMaybe<PropertyMaintenanceRequestCreateNestedManyWithoutPropertyInput>;
  mediaList?: InputMaybe<FileCreateNestedManyWithoutPropertyInput>;
  name: Scalars['String']['input'];
  priceList?: InputMaybe<PriceCreateNestedManyWithoutPropertyInput>;
  status: PropertyStatus;
  type: PropertyTypeCreateNestedOneWithoutPropertyInput;
  uniqueCode?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PropertyCreateNestedManyWithoutAssignedAgentsInput = {
  connect?: InputMaybe<Array<PropertyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertyCreateOrConnectWithoutAssignedAgentsInput>>;
  create?: InputMaybe<Array<PropertyCreateWithoutAssignedAgentsInput>>;
};

export type PropertyCreateNestedOneWithoutLeasesInput = {
  connect?: InputMaybe<PropertyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PropertyCreateOrConnectWithoutLeasesInput>;
  create?: InputMaybe<PropertyCreateWithoutLeasesInput>;
};

export type PropertyCreateNestedOneWithoutMaintenanceRequestsInput = {
  connect?: InputMaybe<PropertyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PropertyCreateOrConnectWithoutMaintenanceRequestsInput>;
  create?: InputMaybe<PropertyCreateWithoutMaintenanceRequestsInput>;
};

export type PropertyCreateOrConnectWithoutAssignedAgentsInput = {
  create: PropertyCreateWithoutAssignedAgentsInput;
  where: PropertyWhereUniqueInput;
};

export type PropertyCreateOrConnectWithoutLeasesInput = {
  create: PropertyCreateWithoutLeasesInput;
  where: PropertyWhereUniqueInput;
};

export type PropertyCreateOrConnectWithoutMaintenanceRequestsInput = {
  create: PropertyCreateWithoutMaintenanceRequestsInput;
  where: PropertyWhereUniqueInput;
};

export type PropertyCreateWithoutAssignedAgentsInput = {
  PropertyListing?: InputMaybe<PropertyListingCreateNestedManyWithoutPropertyInput>;
  PropertyOwner?: InputMaybe<PropertyOwnerCreateNestedOneWithoutPropertiesInput>;
  amenities?: InputMaybe<PropertyAmenityCreateNestedManyWithoutPropertiesInput>;
  commercialStatus?: InputMaybe<PropertyCommercialStatus>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  floorSize?: InputMaybe<Scalars['Decimal']['input']>;
  furnishing?: InputMaybe<PropertyFurnishing>;
  id?: InputMaybe<Scalars['String']['input']>;
  landSize?: InputMaybe<Scalars['Decimal']['input']>;
  leases?: InputMaybe<LeaseCreateNestedManyWithoutPropertyInput>;
  location?: InputMaybe<LocationCreateNestedOneWithoutPropertyInput>;
  maintenanceRequests?: InputMaybe<PropertyMaintenanceRequestCreateNestedManyWithoutPropertyInput>;
  mediaList?: InputMaybe<FileCreateNestedManyWithoutPropertyInput>;
  name: Scalars['String']['input'];
  priceList?: InputMaybe<PriceCreateNestedManyWithoutPropertyInput>;
  status: PropertyStatus;
  type: PropertyTypeCreateNestedOneWithoutPropertyInput;
  uniqueCode?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PropertyCreateWithoutLeasesInput = {
  PropertyListing?: InputMaybe<PropertyListingCreateNestedManyWithoutPropertyInput>;
  PropertyOwner?: InputMaybe<PropertyOwnerCreateNestedOneWithoutPropertiesInput>;
  amenities?: InputMaybe<PropertyAmenityCreateNestedManyWithoutPropertiesInput>;
  assignedAgents?: InputMaybe<UserCreateNestedManyWithoutAssignedPropertiesInput>;
  commercialStatus?: InputMaybe<PropertyCommercialStatus>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  floorSize?: InputMaybe<Scalars['Decimal']['input']>;
  furnishing?: InputMaybe<PropertyFurnishing>;
  id?: InputMaybe<Scalars['String']['input']>;
  landSize?: InputMaybe<Scalars['Decimal']['input']>;
  location?: InputMaybe<LocationCreateNestedOneWithoutPropertyInput>;
  maintenanceRequests?: InputMaybe<PropertyMaintenanceRequestCreateNestedManyWithoutPropertyInput>;
  mediaList?: InputMaybe<FileCreateNestedManyWithoutPropertyInput>;
  name: Scalars['String']['input'];
  priceList?: InputMaybe<PriceCreateNestedManyWithoutPropertyInput>;
  status: PropertyStatus;
  type: PropertyTypeCreateNestedOneWithoutPropertyInput;
  uniqueCode?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PropertyCreateWithoutMaintenanceRequestsInput = {
  PropertyListing?: InputMaybe<PropertyListingCreateNestedManyWithoutPropertyInput>;
  PropertyOwner?: InputMaybe<PropertyOwnerCreateNestedOneWithoutPropertiesInput>;
  amenities?: InputMaybe<PropertyAmenityCreateNestedManyWithoutPropertiesInput>;
  assignedAgents?: InputMaybe<UserCreateNestedManyWithoutAssignedPropertiesInput>;
  commercialStatus?: InputMaybe<PropertyCommercialStatus>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  floorSize?: InputMaybe<Scalars['Decimal']['input']>;
  furnishing?: InputMaybe<PropertyFurnishing>;
  id?: InputMaybe<Scalars['String']['input']>;
  landSize?: InputMaybe<Scalars['Decimal']['input']>;
  leases?: InputMaybe<LeaseCreateNestedManyWithoutPropertyInput>;
  location?: InputMaybe<LocationCreateNestedOneWithoutPropertyInput>;
  mediaList?: InputMaybe<FileCreateNestedManyWithoutPropertyInput>;
  name: Scalars['String']['input'];
  priceList?: InputMaybe<PriceCreateNestedManyWithoutPropertyInput>;
  status: PropertyStatus;
  type: PropertyTypeCreateNestedOneWithoutPropertyInput;
  uniqueCode?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum PropertyFurnishing {
  FullyFurnished = 'FULLY_FURNISHED',
  SemiFurnished = 'SEMI_FURNISHED',
  Unfurnished = 'UNFURNISHED'
}

export type PropertyGenerated = {
  __typename?: 'PropertyGenerated';
  PropertyListing?: Maybe<Array<PropertyListing>>;
  PropertyOwner?: Maybe<PropertyOwner>;
  _count: PropertyCount;
  amenities?: Maybe<Array<PropertyAmenity>>;
  assignedAgents?: Maybe<Array<User>>;
  commercialStatus: PropertyCommercialStatus;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  floorSize?: Maybe<Scalars['Decimal']['output']>;
  furnishing?: Maybe<PropertyFurnishing>;
  id: Scalars['ID']['output'];
  landSize?: Maybe<Scalars['Decimal']['output']>;
  leases?: Maybe<Array<Lease>>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['String']['output']>;
  maintenanceRequests?: Maybe<Array<PropertyMaintenanceRequest>>;
  mediaList?: Maybe<Array<File>>;
  name: Scalars['String']['output'];
  priceList?: Maybe<Array<Price>>;
  propertyOwnerId?: Maybe<Scalars['String']['output']>;
  status: PropertyStatus;
  type: PropertyType;
  typeId: Scalars['String']['output'];
  uniqueCode?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type PropertyListRelationFilter = {
  every?: InputMaybe<PropertyWhereInput>;
  none?: InputMaybe<PropertyWhereInput>;
  some?: InputMaybe<PropertyWhereInput>;
};

export type PropertyListing = {
  __typename?: 'PropertyListing';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  property: PropertyGenerated;
  propertyId: Scalars['String']['output'];
  status: PropertyListingStatus;
  type: PropertyListingType;
  updatedAt: Scalars['DateTime']['output'];
};

export type PropertyListingCreateManyPropertyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  status: PropertyListingStatus;
  type: PropertyListingType;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PropertyListingCreateManyPropertyInputEnvelope = {
  data: Array<PropertyListingCreateManyPropertyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PropertyListingCreateNestedManyWithoutPropertyInput = {
  connect?: InputMaybe<Array<PropertyListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertyListingCreateOrConnectWithoutPropertyInput>>;
  create?: InputMaybe<Array<PropertyListingCreateWithoutPropertyInput>>;
  createMany?: InputMaybe<PropertyListingCreateManyPropertyInputEnvelope>;
};

export type PropertyListingCreateOrConnectWithoutPropertyInput = {
  create: PropertyListingCreateWithoutPropertyInput;
  where: PropertyListingWhereUniqueInput;
};

export type PropertyListingCreateWithoutPropertyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  status: PropertyListingStatus;
  type: PropertyListingType;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PropertyListingListRelationFilter = {
  every?: InputMaybe<PropertyListingWhereInput>;
  none?: InputMaybe<PropertyListingWhereInput>;
  some?: InputMaybe<PropertyListingWhereInput>;
};

export type PropertyListingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PropertyListingScalarWhereInput = {
  AND?: InputMaybe<Array<PropertyListingScalarWhereInput>>;
  NOT?: InputMaybe<Array<PropertyListingScalarWhereInput>>;
  OR?: InputMaybe<Array<PropertyListingScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  propertyId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumPropertyListingStatusFilter>;
  type?: InputMaybe<EnumPropertyListingTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum PropertyListingStatus {
  Listed = 'LISTED',
  Unlisted = 'UNLISTED'
}

export enum PropertyListingType {
  ForRent = 'FOR_RENT',
  ForSale = 'FOR_SALE'
}

export type PropertyListingUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPropertyListingStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPropertyListingTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PropertyListingUpdateManyWithWhereWithoutPropertyInput = {
  data: PropertyListingUpdateManyMutationInput;
  where: PropertyListingScalarWhereInput;
};

export type PropertyListingUpdateManyWithoutPropertyNestedInput = {
  connect?: InputMaybe<Array<PropertyListingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertyListingCreateOrConnectWithoutPropertyInput>>;
  create?: InputMaybe<Array<PropertyListingCreateWithoutPropertyInput>>;
  createMany?: InputMaybe<PropertyListingCreateManyPropertyInputEnvelope>;
  delete?: InputMaybe<Array<PropertyListingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PropertyListingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PropertyListingWhereUniqueInput>>;
  set?: InputMaybe<Array<PropertyListingWhereUniqueInput>>;
  update?: InputMaybe<Array<PropertyListingUpdateWithWhereUniqueWithoutPropertyInput>>;
  updateMany?: InputMaybe<Array<PropertyListingUpdateManyWithWhereWithoutPropertyInput>>;
  upsert?: InputMaybe<Array<PropertyListingUpsertWithWhereUniqueWithoutPropertyInput>>;
};

export type PropertyListingUpdateWithWhereUniqueWithoutPropertyInput = {
  data: PropertyListingUpdateWithoutPropertyInput;
  where: PropertyListingWhereUniqueInput;
};

export type PropertyListingUpdateWithoutPropertyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPropertyListingStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumPropertyListingTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PropertyListingUpsertWithWhereUniqueWithoutPropertyInput = {
  create: PropertyListingCreateWithoutPropertyInput;
  update: PropertyListingUpdateWithoutPropertyInput;
  where: PropertyListingWhereUniqueInput;
};

export type PropertyListingWhereInput = {
  AND?: InputMaybe<Array<PropertyListingWhereInput>>;
  NOT?: InputMaybe<Array<PropertyListingWhereInput>>;
  OR?: InputMaybe<Array<PropertyListingWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  property?: InputMaybe<PropertyRelationFilter>;
  propertyId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumPropertyListingStatusFilter>;
  type?: InputMaybe<EnumPropertyListingTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PropertyListingWhereUniqueInput = {
  AND?: InputMaybe<Array<PropertyListingWhereInput>>;
  NOT?: InputMaybe<Array<PropertyListingWhereInput>>;
  OR?: InputMaybe<Array<PropertyListingWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  property?: InputMaybe<PropertyRelationFilter>;
  propertyId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumPropertyListingStatusFilter>;
  type?: InputMaybe<EnumPropertyListingTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PropertyMaintenanceRequest = {
  __typename?: 'PropertyMaintenanceRequest';
  _count: PropertyMaintenanceRequestCount;
  activities?: Maybe<Array<PropertyMaintenanceRequestActivity>>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lease: Lease;
  leaseId: Scalars['String']['output'];
  property: PropertyGenerated;
  propertyId: Scalars['String']['output'];
  requestedAt: Scalars['DateTime']['output'];
  status: PropertyMaintenanceRequestStatus;
  tenant: Tenant;
  tenantId: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PropertyMaintenanceRequestActivity = {
  __typename?: 'PropertyMaintenanceRequestActivity';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  request: PropertyMaintenanceRequest;
  requestId: Scalars['String']['output'];
  status: PropertyMaintenanceRequestStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export type PropertyMaintenanceRequestActivityCreateManyRequestInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<PropertyMaintenanceRequestStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PropertyMaintenanceRequestActivityCreateManyRequestInputEnvelope = {
  data: Array<PropertyMaintenanceRequestActivityCreateManyRequestInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PropertyMaintenanceRequestActivityCreateNestedManyWithoutRequestInput = {
  connect?: InputMaybe<Array<PropertyMaintenanceRequestActivityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertyMaintenanceRequestActivityCreateOrConnectWithoutRequestInput>>;
  create?: InputMaybe<Array<PropertyMaintenanceRequestActivityCreateWithoutRequestInput>>;
  createMany?: InputMaybe<PropertyMaintenanceRequestActivityCreateManyRequestInputEnvelope>;
};

export type PropertyMaintenanceRequestActivityCreateOrConnectWithoutRequestInput = {
  create: PropertyMaintenanceRequestActivityCreateWithoutRequestInput;
  where: PropertyMaintenanceRequestActivityWhereUniqueInput;
};

export type PropertyMaintenanceRequestActivityCreateWithoutRequestInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<PropertyMaintenanceRequestStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PropertyMaintenanceRequestActivityListRelationFilter = {
  every?: InputMaybe<PropertyMaintenanceRequestActivityWhereInput>;
  none?: InputMaybe<PropertyMaintenanceRequestActivityWhereInput>;
  some?: InputMaybe<PropertyMaintenanceRequestActivityWhereInput>;
};

export type PropertyMaintenanceRequestActivityScalarWhereInput = {
  AND?: InputMaybe<Array<PropertyMaintenanceRequestActivityScalarWhereInput>>;
  NOT?: InputMaybe<Array<PropertyMaintenanceRequestActivityScalarWhereInput>>;
  OR?: InputMaybe<Array<PropertyMaintenanceRequestActivityScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  requestId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumPropertyMaintenanceRequestStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PropertyMaintenanceRequestActivityUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPropertyMaintenanceRequestStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PropertyMaintenanceRequestActivityUpdateManyWithWhereWithoutRequestInput = {
  data: PropertyMaintenanceRequestActivityUpdateManyMutationInput;
  where: PropertyMaintenanceRequestActivityScalarWhereInput;
};

export type PropertyMaintenanceRequestActivityUpdateManyWithoutRequestNestedInput = {
  connect?: InputMaybe<Array<PropertyMaintenanceRequestActivityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertyMaintenanceRequestActivityCreateOrConnectWithoutRequestInput>>;
  create?: InputMaybe<Array<PropertyMaintenanceRequestActivityCreateWithoutRequestInput>>;
  createMany?: InputMaybe<PropertyMaintenanceRequestActivityCreateManyRequestInputEnvelope>;
  delete?: InputMaybe<Array<PropertyMaintenanceRequestActivityWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PropertyMaintenanceRequestActivityScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PropertyMaintenanceRequestActivityWhereUniqueInput>>;
  set?: InputMaybe<Array<PropertyMaintenanceRequestActivityWhereUniqueInput>>;
  update?: InputMaybe<Array<PropertyMaintenanceRequestActivityUpdateWithWhereUniqueWithoutRequestInput>>;
  updateMany?: InputMaybe<Array<PropertyMaintenanceRequestActivityUpdateManyWithWhereWithoutRequestInput>>;
  upsert?: InputMaybe<Array<PropertyMaintenanceRequestActivityUpsertWithWhereUniqueWithoutRequestInput>>;
};

export type PropertyMaintenanceRequestActivityUpdateWithWhereUniqueWithoutRequestInput = {
  data: PropertyMaintenanceRequestActivityUpdateWithoutRequestInput;
  where: PropertyMaintenanceRequestActivityWhereUniqueInput;
};

export type PropertyMaintenanceRequestActivityUpdateWithoutRequestInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPropertyMaintenanceRequestStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PropertyMaintenanceRequestActivityUpsertWithWhereUniqueWithoutRequestInput = {
  create: PropertyMaintenanceRequestActivityCreateWithoutRequestInput;
  update: PropertyMaintenanceRequestActivityUpdateWithoutRequestInput;
  where: PropertyMaintenanceRequestActivityWhereUniqueInput;
};

export type PropertyMaintenanceRequestActivityWhereInput = {
  AND?: InputMaybe<Array<PropertyMaintenanceRequestActivityWhereInput>>;
  NOT?: InputMaybe<Array<PropertyMaintenanceRequestActivityWhereInput>>;
  OR?: InputMaybe<Array<PropertyMaintenanceRequestActivityWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  request?: InputMaybe<PropertyMaintenanceRequestRelationFilter>;
  requestId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumPropertyMaintenanceRequestStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PropertyMaintenanceRequestActivityWhereUniqueInput = {
  AND?: InputMaybe<Array<PropertyMaintenanceRequestActivityWhereInput>>;
  NOT?: InputMaybe<Array<PropertyMaintenanceRequestActivityWhereInput>>;
  OR?: InputMaybe<Array<PropertyMaintenanceRequestActivityWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  request?: InputMaybe<PropertyMaintenanceRequestRelationFilter>;
  requestId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumPropertyMaintenanceRequestStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PropertyMaintenanceRequestCount = {
  __typename?: 'PropertyMaintenanceRequestCount';
  activities: Scalars['Int']['output'];
};

export type PropertyMaintenanceRequestCreateManyLeaseInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  propertyId: Scalars['String']['input'];
  requestedAt: Scalars['DateTime']['input'];
  status?: InputMaybe<PropertyMaintenanceRequestStatus>;
  tenantId: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PropertyMaintenanceRequestCreateManyLeaseInputEnvelope = {
  data: Array<PropertyMaintenanceRequestCreateManyLeaseInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PropertyMaintenanceRequestCreateManyPropertyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  leaseId: Scalars['String']['input'];
  requestedAt: Scalars['DateTime']['input'];
  status?: InputMaybe<PropertyMaintenanceRequestStatus>;
  tenantId: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PropertyMaintenanceRequestCreateManyPropertyInputEnvelope = {
  data: Array<PropertyMaintenanceRequestCreateManyPropertyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PropertyMaintenanceRequestCreateManyTenantInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  leaseId: Scalars['String']['input'];
  propertyId: Scalars['String']['input'];
  requestedAt: Scalars['DateTime']['input'];
  status?: InputMaybe<PropertyMaintenanceRequestStatus>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PropertyMaintenanceRequestCreateManyTenantInputEnvelope = {
  data: Array<PropertyMaintenanceRequestCreateManyTenantInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PropertyMaintenanceRequestCreateNestedManyWithoutLeaseInput = {
  connect?: InputMaybe<Array<PropertyMaintenanceRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertyMaintenanceRequestCreateOrConnectWithoutLeaseInput>>;
  create?: InputMaybe<Array<PropertyMaintenanceRequestCreateWithoutLeaseInput>>;
  createMany?: InputMaybe<PropertyMaintenanceRequestCreateManyLeaseInputEnvelope>;
};

export type PropertyMaintenanceRequestCreateNestedManyWithoutPropertyInput = {
  connect?: InputMaybe<Array<PropertyMaintenanceRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertyMaintenanceRequestCreateOrConnectWithoutPropertyInput>>;
  create?: InputMaybe<Array<PropertyMaintenanceRequestCreateWithoutPropertyInput>>;
  createMany?: InputMaybe<PropertyMaintenanceRequestCreateManyPropertyInputEnvelope>;
};

export type PropertyMaintenanceRequestCreateNestedManyWithoutTenantInput = {
  connect?: InputMaybe<Array<PropertyMaintenanceRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertyMaintenanceRequestCreateOrConnectWithoutTenantInput>>;
  create?: InputMaybe<Array<PropertyMaintenanceRequestCreateWithoutTenantInput>>;
  createMany?: InputMaybe<PropertyMaintenanceRequestCreateManyTenantInputEnvelope>;
};

export type PropertyMaintenanceRequestCreateOrConnectWithoutLeaseInput = {
  create: PropertyMaintenanceRequestCreateWithoutLeaseInput;
  where: PropertyMaintenanceRequestWhereUniqueInput;
};

export type PropertyMaintenanceRequestCreateOrConnectWithoutPropertyInput = {
  create: PropertyMaintenanceRequestCreateWithoutPropertyInput;
  where: PropertyMaintenanceRequestWhereUniqueInput;
};

export type PropertyMaintenanceRequestCreateOrConnectWithoutTenantInput = {
  create: PropertyMaintenanceRequestCreateWithoutTenantInput;
  where: PropertyMaintenanceRequestWhereUniqueInput;
};

export type PropertyMaintenanceRequestCreateWithoutLeaseInput = {
  activities?: InputMaybe<PropertyMaintenanceRequestActivityCreateNestedManyWithoutRequestInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  property: PropertyCreateNestedOneWithoutMaintenanceRequestsInput;
  requestedAt: Scalars['DateTime']['input'];
  status?: InputMaybe<PropertyMaintenanceRequestStatus>;
  tenant: TenantCreateNestedOneWithoutMaintenanceRequestsInput;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PropertyMaintenanceRequestCreateWithoutPropertyInput = {
  activities?: InputMaybe<PropertyMaintenanceRequestActivityCreateNestedManyWithoutRequestInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lease: LeaseCreateNestedOneWithoutMaintenanceRequestsInput;
  requestedAt: Scalars['DateTime']['input'];
  status?: InputMaybe<PropertyMaintenanceRequestStatus>;
  tenant: TenantCreateNestedOneWithoutMaintenanceRequestsInput;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PropertyMaintenanceRequestCreateWithoutTenantInput = {
  activities?: InputMaybe<PropertyMaintenanceRequestActivityCreateNestedManyWithoutRequestInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lease: LeaseCreateNestedOneWithoutMaintenanceRequestsInput;
  property: PropertyCreateNestedOneWithoutMaintenanceRequestsInput;
  requestedAt: Scalars['DateTime']['input'];
  status?: InputMaybe<PropertyMaintenanceRequestStatus>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PropertyMaintenanceRequestListRelationFilter = {
  every?: InputMaybe<PropertyMaintenanceRequestWhereInput>;
  none?: InputMaybe<PropertyMaintenanceRequestWhereInput>;
  some?: InputMaybe<PropertyMaintenanceRequestWhereInput>;
};

export type PropertyMaintenanceRequestOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PropertyMaintenanceRequestRelationFilter = {
  is?: InputMaybe<PropertyMaintenanceRequestWhereInput>;
  isNot?: InputMaybe<PropertyMaintenanceRequestWhereInput>;
};

export type PropertyMaintenanceRequestScalarWhereInput = {
  AND?: InputMaybe<Array<PropertyMaintenanceRequestScalarWhereInput>>;
  NOT?: InputMaybe<Array<PropertyMaintenanceRequestScalarWhereInput>>;
  OR?: InputMaybe<Array<PropertyMaintenanceRequestScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  leaseId?: InputMaybe<StringFilter>;
  propertyId?: InputMaybe<StringFilter>;
  requestedAt?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumPropertyMaintenanceRequestStatusFilter>;
  tenantId?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum PropertyMaintenanceRequestStatus {
  Cancelled = 'Cancelled',
  Completed = 'Completed',
  InProgress = 'InProgress',
  Pending = 'Pending'
}

export type PropertyMaintenanceRequestUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  requestedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPropertyMaintenanceRequestStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PropertyMaintenanceRequestUpdateManyWithWhereWithoutLeaseInput = {
  data: PropertyMaintenanceRequestUpdateManyMutationInput;
  where: PropertyMaintenanceRequestScalarWhereInput;
};

export type PropertyMaintenanceRequestUpdateManyWithWhereWithoutPropertyInput = {
  data: PropertyMaintenanceRequestUpdateManyMutationInput;
  where: PropertyMaintenanceRequestScalarWhereInput;
};

export type PropertyMaintenanceRequestUpdateManyWithWhereWithoutTenantInput = {
  data: PropertyMaintenanceRequestUpdateManyMutationInput;
  where: PropertyMaintenanceRequestScalarWhereInput;
};

export type PropertyMaintenanceRequestUpdateManyWithoutLeaseNestedInput = {
  connect?: InputMaybe<Array<PropertyMaintenanceRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertyMaintenanceRequestCreateOrConnectWithoutLeaseInput>>;
  create?: InputMaybe<Array<PropertyMaintenanceRequestCreateWithoutLeaseInput>>;
  createMany?: InputMaybe<PropertyMaintenanceRequestCreateManyLeaseInputEnvelope>;
  delete?: InputMaybe<Array<PropertyMaintenanceRequestWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PropertyMaintenanceRequestScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PropertyMaintenanceRequestWhereUniqueInput>>;
  set?: InputMaybe<Array<PropertyMaintenanceRequestWhereUniqueInput>>;
  update?: InputMaybe<Array<PropertyMaintenanceRequestUpdateWithWhereUniqueWithoutLeaseInput>>;
  updateMany?: InputMaybe<Array<PropertyMaintenanceRequestUpdateManyWithWhereWithoutLeaseInput>>;
  upsert?: InputMaybe<Array<PropertyMaintenanceRequestUpsertWithWhereUniqueWithoutLeaseInput>>;
};

export type PropertyMaintenanceRequestUpdateManyWithoutPropertyNestedInput = {
  connect?: InputMaybe<Array<PropertyMaintenanceRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertyMaintenanceRequestCreateOrConnectWithoutPropertyInput>>;
  create?: InputMaybe<Array<PropertyMaintenanceRequestCreateWithoutPropertyInput>>;
  createMany?: InputMaybe<PropertyMaintenanceRequestCreateManyPropertyInputEnvelope>;
  delete?: InputMaybe<Array<PropertyMaintenanceRequestWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PropertyMaintenanceRequestScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PropertyMaintenanceRequestWhereUniqueInput>>;
  set?: InputMaybe<Array<PropertyMaintenanceRequestWhereUniqueInput>>;
  update?: InputMaybe<Array<PropertyMaintenanceRequestUpdateWithWhereUniqueWithoutPropertyInput>>;
  updateMany?: InputMaybe<Array<PropertyMaintenanceRequestUpdateManyWithWhereWithoutPropertyInput>>;
  upsert?: InputMaybe<Array<PropertyMaintenanceRequestUpsertWithWhereUniqueWithoutPropertyInput>>;
};

export type PropertyMaintenanceRequestUpdateManyWithoutTenantNestedInput = {
  connect?: InputMaybe<Array<PropertyMaintenanceRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertyMaintenanceRequestCreateOrConnectWithoutTenantInput>>;
  create?: InputMaybe<Array<PropertyMaintenanceRequestCreateWithoutTenantInput>>;
  createMany?: InputMaybe<PropertyMaintenanceRequestCreateManyTenantInputEnvelope>;
  delete?: InputMaybe<Array<PropertyMaintenanceRequestWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PropertyMaintenanceRequestScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PropertyMaintenanceRequestWhereUniqueInput>>;
  set?: InputMaybe<Array<PropertyMaintenanceRequestWhereUniqueInput>>;
  update?: InputMaybe<Array<PropertyMaintenanceRequestUpdateWithWhereUniqueWithoutTenantInput>>;
  updateMany?: InputMaybe<Array<PropertyMaintenanceRequestUpdateManyWithWhereWithoutTenantInput>>;
  upsert?: InputMaybe<Array<PropertyMaintenanceRequestUpsertWithWhereUniqueWithoutTenantInput>>;
};

export type PropertyMaintenanceRequestUpdateWithWhereUniqueWithoutLeaseInput = {
  data: PropertyMaintenanceRequestUpdateWithoutLeaseInput;
  where: PropertyMaintenanceRequestWhereUniqueInput;
};

export type PropertyMaintenanceRequestUpdateWithWhereUniqueWithoutPropertyInput = {
  data: PropertyMaintenanceRequestUpdateWithoutPropertyInput;
  where: PropertyMaintenanceRequestWhereUniqueInput;
};

export type PropertyMaintenanceRequestUpdateWithWhereUniqueWithoutTenantInput = {
  data: PropertyMaintenanceRequestUpdateWithoutTenantInput;
  where: PropertyMaintenanceRequestWhereUniqueInput;
};

export type PropertyMaintenanceRequestUpdateWithoutLeaseInput = {
  activities?: InputMaybe<PropertyMaintenanceRequestActivityUpdateManyWithoutRequestNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  property?: InputMaybe<PropertyUpdateOneRequiredWithoutMaintenanceRequestsNestedInput>;
  requestedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPropertyMaintenanceRequestStatusFieldUpdateOperationsInput>;
  tenant?: InputMaybe<TenantUpdateOneRequiredWithoutMaintenanceRequestsNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PropertyMaintenanceRequestUpdateWithoutPropertyInput = {
  activities?: InputMaybe<PropertyMaintenanceRequestActivityUpdateManyWithoutRequestNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lease?: InputMaybe<LeaseUpdateOneRequiredWithoutMaintenanceRequestsNestedInput>;
  requestedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPropertyMaintenanceRequestStatusFieldUpdateOperationsInput>;
  tenant?: InputMaybe<TenantUpdateOneRequiredWithoutMaintenanceRequestsNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PropertyMaintenanceRequestUpdateWithoutTenantInput = {
  activities?: InputMaybe<PropertyMaintenanceRequestActivityUpdateManyWithoutRequestNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lease?: InputMaybe<LeaseUpdateOneRequiredWithoutMaintenanceRequestsNestedInput>;
  property?: InputMaybe<PropertyUpdateOneRequiredWithoutMaintenanceRequestsNestedInput>;
  requestedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPropertyMaintenanceRequestStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PropertyMaintenanceRequestUpsertWithWhereUniqueWithoutLeaseInput = {
  create: PropertyMaintenanceRequestCreateWithoutLeaseInput;
  update: PropertyMaintenanceRequestUpdateWithoutLeaseInput;
  where: PropertyMaintenanceRequestWhereUniqueInput;
};

export type PropertyMaintenanceRequestUpsertWithWhereUniqueWithoutPropertyInput = {
  create: PropertyMaintenanceRequestCreateWithoutPropertyInput;
  update: PropertyMaintenanceRequestUpdateWithoutPropertyInput;
  where: PropertyMaintenanceRequestWhereUniqueInput;
};

export type PropertyMaintenanceRequestUpsertWithWhereUniqueWithoutTenantInput = {
  create: PropertyMaintenanceRequestCreateWithoutTenantInput;
  update: PropertyMaintenanceRequestUpdateWithoutTenantInput;
  where: PropertyMaintenanceRequestWhereUniqueInput;
};

export type PropertyMaintenanceRequestWhereInput = {
  AND?: InputMaybe<Array<PropertyMaintenanceRequestWhereInput>>;
  NOT?: InputMaybe<Array<PropertyMaintenanceRequestWhereInput>>;
  OR?: InputMaybe<Array<PropertyMaintenanceRequestWhereInput>>;
  activities?: InputMaybe<PropertyMaintenanceRequestActivityListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lease?: InputMaybe<LeaseRelationFilter>;
  leaseId?: InputMaybe<StringFilter>;
  property?: InputMaybe<PropertyRelationFilter>;
  propertyId?: InputMaybe<StringFilter>;
  requestedAt?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumPropertyMaintenanceRequestStatusFilter>;
  tenant?: InputMaybe<TenantRelationFilter>;
  tenantId?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PropertyMaintenanceRequestWhereUniqueInput = {
  AND?: InputMaybe<Array<PropertyMaintenanceRequestWhereInput>>;
  NOT?: InputMaybe<Array<PropertyMaintenanceRequestWhereInput>>;
  OR?: InputMaybe<Array<PropertyMaintenanceRequestWhereInput>>;
  activities?: InputMaybe<PropertyMaintenanceRequestActivityListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  lease?: InputMaybe<LeaseRelationFilter>;
  leaseId?: InputMaybe<StringFilter>;
  property?: InputMaybe<PropertyRelationFilter>;
  propertyId?: InputMaybe<StringFilter>;
  requestedAt?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumPropertyMaintenanceRequestStatusFilter>;
  tenant?: InputMaybe<TenantRelationFilter>;
  tenantId?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PropertyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PropertyOrderByWithRelationInput = {
  PropertyListing?: InputMaybe<PropertyListingOrderByRelationAggregateInput>;
  PropertyOwner?: InputMaybe<PropertyOwnerOrderByWithRelationInput>;
  amenities?: InputMaybe<PropertyAmenityOrderByRelationAggregateInput>;
  assignedAgents?: InputMaybe<UserOrderByRelationAggregateInput>;
  commercialStatus?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  floorSize?: InputMaybe<SortOrderInput>;
  furnishing?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  landSize?: InputMaybe<SortOrderInput>;
  leases?: InputMaybe<LeaseOrderByRelationAggregateInput>;
  location?: InputMaybe<LocationOrderByWithRelationInput>;
  locationId?: InputMaybe<SortOrderInput>;
  maintenanceRequests?: InputMaybe<PropertyMaintenanceRequestOrderByRelationAggregateInput>;
  mediaList?: InputMaybe<FileOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  priceList?: InputMaybe<PriceOrderByRelationAggregateInput>;
  propertyOwnerId?: InputMaybe<SortOrderInput>;
  status?: InputMaybe<SortOrder>;
  type?: InputMaybe<PropertyTypeOrderByWithRelationInput>;
  typeId?: InputMaybe<SortOrder>;
  uniqueCode?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PropertyOwner = {
  __typename?: 'PropertyOwner';
  _count: PropertyOwnerCount;
  dob?: Maybe<Scalars['DateTime']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  profilePictureUrl?: Maybe<Scalars['String']['output']>;
  properties?: Maybe<Array<PropertyGenerated>>;
};

export type PropertyOwnerCount = {
  __typename?: 'PropertyOwnerCount';
  properties: Scalars['Int']['output'];
};

export type PropertyOwnerCreateNestedOneWithoutPropertiesInput = {
  connect?: InputMaybe<PropertyOwnerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PropertyOwnerCreateOrConnectWithoutPropertiesInput>;
  create?: InputMaybe<PropertyOwnerCreateWithoutPropertiesInput>;
};

export type PropertyOwnerCreateOrConnectWithoutPropertiesInput = {
  create: PropertyOwnerCreateWithoutPropertiesInput;
  where: PropertyOwnerWhereUniqueInput;
};

export type PropertyOwnerCreateWithoutPropertiesInput = {
  dob?: InputMaybe<Scalars['DateTime']['input']>;
  firstName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  profilePictureUrl?: InputMaybe<Scalars['String']['input']>;
};

export type PropertyOwnerNullableRelationFilter = {
  is?: InputMaybe<PropertyOwnerWhereInput>;
  isNot?: InputMaybe<PropertyOwnerWhereInput>;
};

export type PropertyOwnerOrderByWithRelationInput = {
  dob?: InputMaybe<SortOrderInput>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  profilePictureUrl?: InputMaybe<SortOrderInput>;
  properties?: InputMaybe<PropertyOrderByRelationAggregateInput>;
};

export type PropertyOwnerUpdateOneWithoutPropertiesNestedInput = {
  connect?: InputMaybe<PropertyOwnerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PropertyOwnerCreateOrConnectWithoutPropertiesInput>;
  create?: InputMaybe<PropertyOwnerCreateWithoutPropertiesInput>;
  delete?: InputMaybe<PropertyOwnerWhereInput>;
  disconnect?: InputMaybe<PropertyOwnerWhereInput>;
  update?: InputMaybe<PropertyOwnerUpdateToOneWithWhereWithoutPropertiesInput>;
  upsert?: InputMaybe<PropertyOwnerUpsertWithoutPropertiesInput>;
};

export type PropertyOwnerUpdateToOneWithWhereWithoutPropertiesInput = {
  data: PropertyOwnerUpdateWithoutPropertiesInput;
  where?: InputMaybe<PropertyOwnerWhereInput>;
};

export type PropertyOwnerUpdateWithoutPropertiesInput = {
  dob?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  profilePictureUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type PropertyOwnerUpsertWithoutPropertiesInput = {
  create: PropertyOwnerCreateWithoutPropertiesInput;
  update: PropertyOwnerUpdateWithoutPropertiesInput;
  where?: InputMaybe<PropertyOwnerWhereInput>;
};

export type PropertyOwnerWhereInput = {
  AND?: InputMaybe<Array<PropertyOwnerWhereInput>>;
  NOT?: InputMaybe<Array<PropertyOwnerWhereInput>>;
  OR?: InputMaybe<Array<PropertyOwnerWhereInput>>;
  dob?: InputMaybe<DateTimeNullableFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  profilePictureUrl?: InputMaybe<StringNullableFilter>;
  properties?: InputMaybe<PropertyListRelationFilter>;
};

export type PropertyOwnerWhereUniqueInput = {
  AND?: InputMaybe<Array<PropertyOwnerWhereInput>>;
  NOT?: InputMaybe<Array<PropertyOwnerWhereInput>>;
  OR?: InputMaybe<Array<PropertyOwnerWhereInput>>;
  dob?: InputMaybe<DateTimeNullableFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<StringFilter>;
  profilePictureUrl?: InputMaybe<StringNullableFilter>;
  properties?: InputMaybe<PropertyListRelationFilter>;
};

export type PropertyRelationFilter = {
  is?: InputMaybe<PropertyWhereInput>;
  isNot?: InputMaybe<PropertyWhereInput>;
};

export enum PropertyScalarFieldEnum {
  CommercialStatus = 'commercialStatus',
  CreatedAt = 'createdAt',
  Description = 'description',
  FloorSize = 'floorSize',
  Furnishing = 'furnishing',
  Id = 'id',
  LandSize = 'landSize',
  LocationId = 'locationId',
  Name = 'name',
  PropertyOwnerId = 'propertyOwnerId',
  Status = 'status',
  TypeId = 'typeId',
  UniqueCode = 'uniqueCode',
  UpdatedAt = 'updatedAt'
}

export type PropertyScalarWhereInput = {
  AND?: InputMaybe<Array<PropertyScalarWhereInput>>;
  NOT?: InputMaybe<Array<PropertyScalarWhereInput>>;
  OR?: InputMaybe<Array<PropertyScalarWhereInput>>;
  commercialStatus?: InputMaybe<EnumPropertyCommercialStatusFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  floorSize?: InputMaybe<DecimalNullableFilter>;
  furnishing?: InputMaybe<EnumPropertyFurnishingNullableFilter>;
  id?: InputMaybe<StringFilter>;
  landSize?: InputMaybe<DecimalNullableFilter>;
  locationId?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  propertyOwnerId?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumPropertyStatusFilter>;
  typeId?: InputMaybe<StringFilter>;
  uniqueCode?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum PropertyStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type PropertyType = {
  __typename?: 'PropertyType';
  Property?: Maybe<Array<PropertyGenerated>>;
  _count: PropertyTypeCount;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type PropertyTypeCount = {
  __typename?: 'PropertyTypeCount';
  Property: Scalars['Int']['output'];
};

export type PropertyTypeCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type PropertyTypeCreateNestedOneWithoutPropertyInput = {
  connect?: InputMaybe<PropertyTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PropertyTypeCreateOrConnectWithoutPropertyInput>;
  create?: InputMaybe<PropertyTypeCreateWithoutPropertyInput>;
};

export type PropertyTypeCreateOrConnectWithoutPropertyInput = {
  create: PropertyTypeCreateWithoutPropertyInput;
  where: PropertyTypeWhereUniqueInput;
};

export type PropertyTypeCreateWithoutPropertyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type PropertyTypeOrderByWithRelationInput = {
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type PropertyTypeRelationFilter = {
  is?: InputMaybe<PropertyTypeWhereInput>;
  isNot?: InputMaybe<PropertyTypeWhereInput>;
};

export enum PropertyTypeScalarFieldEnum {
  Description = 'description',
  Id = 'id',
  Name = 'name'
}

export type PropertyTypeUpdateOneRequiredWithoutPropertyNestedInput = {
  connect?: InputMaybe<PropertyTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PropertyTypeCreateOrConnectWithoutPropertyInput>;
  create?: InputMaybe<PropertyTypeCreateWithoutPropertyInput>;
  update?: InputMaybe<PropertyTypeUpdateToOneWithWhereWithoutPropertyInput>;
  upsert?: InputMaybe<PropertyTypeUpsertWithoutPropertyInput>;
};

export type PropertyTypeUpdateToOneWithWhereWithoutPropertyInput = {
  data: PropertyTypeUpdateWithoutPropertyInput;
  where?: InputMaybe<PropertyTypeWhereInput>;
};

export type PropertyTypeUpdateWithoutPropertyInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PropertyTypeUpsertWithoutPropertyInput = {
  create: PropertyTypeCreateWithoutPropertyInput;
  update: PropertyTypeUpdateWithoutPropertyInput;
  where?: InputMaybe<PropertyTypeWhereInput>;
};

export type PropertyTypeWhereInput = {
  AND?: InputMaybe<Array<PropertyTypeWhereInput>>;
  NOT?: InputMaybe<Array<PropertyTypeWhereInput>>;
  OR?: InputMaybe<Array<PropertyTypeWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type PropertyTypeWhereUniqueInput = {
  AND?: InputMaybe<Array<PropertyTypeWhereInput>>;
  NOT?: InputMaybe<Array<PropertyTypeWhereInput>>;
  OR?: InputMaybe<Array<PropertyTypeWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PropertyUpdateInput = {
  PropertyListing?: InputMaybe<PropertyListingUpdateManyWithoutPropertyNestedInput>;
  PropertyOwner?: InputMaybe<PropertyOwnerUpdateOneWithoutPropertiesNestedInput>;
  amenities?: InputMaybe<PropertyAmenityUpdateManyWithoutPropertiesNestedInput>;
  assignedAgents?: InputMaybe<UserUpdateManyWithoutAssignedPropertiesNestedInput>;
  commercialStatus?: InputMaybe<EnumPropertyCommercialStatusFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  floorSize?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  furnishing?: InputMaybe<NullableEnumPropertyFurnishingFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  landSize?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  leases?: InputMaybe<LeaseUpdateManyWithoutPropertyNestedInput>;
  location?: InputMaybe<LocationUpdateOneWithoutPropertyNestedInput>;
  maintenanceRequests?: InputMaybe<PropertyMaintenanceRequestUpdateManyWithoutPropertyNestedInput>;
  mediaList?: InputMaybe<FileUpdateManyWithoutPropertyNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priceList?: InputMaybe<PriceUpdateManyWithoutPropertyNestedInput>;
  status?: InputMaybe<EnumPropertyStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<PropertyTypeUpdateOneRequiredWithoutPropertyNestedInput>;
  uniqueCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PropertyUpdateManyMutationInput = {
  commercialStatus?: InputMaybe<EnumPropertyCommercialStatusFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  floorSize?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  furnishing?: InputMaybe<NullableEnumPropertyFurnishingFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  landSize?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPropertyStatusFieldUpdateOperationsInput>;
  uniqueCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PropertyUpdateManyWithWhereWithoutAssignedAgentsInput = {
  data: PropertyUpdateManyMutationInput;
  where: PropertyScalarWhereInput;
};

export type PropertyUpdateManyWithoutAssignedAgentsNestedInput = {
  connect?: InputMaybe<Array<PropertyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertyCreateOrConnectWithoutAssignedAgentsInput>>;
  create?: InputMaybe<Array<PropertyCreateWithoutAssignedAgentsInput>>;
  delete?: InputMaybe<Array<PropertyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PropertyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PropertyWhereUniqueInput>>;
  set?: InputMaybe<Array<PropertyWhereUniqueInput>>;
  update?: InputMaybe<Array<PropertyUpdateWithWhereUniqueWithoutAssignedAgentsInput>>;
  updateMany?: InputMaybe<Array<PropertyUpdateManyWithWhereWithoutAssignedAgentsInput>>;
  upsert?: InputMaybe<Array<PropertyUpsertWithWhereUniqueWithoutAssignedAgentsInput>>;
};

export type PropertyUpdateOneRequiredWithoutLeasesNestedInput = {
  connect?: InputMaybe<PropertyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PropertyCreateOrConnectWithoutLeasesInput>;
  create?: InputMaybe<PropertyCreateWithoutLeasesInput>;
  update?: InputMaybe<PropertyUpdateToOneWithWhereWithoutLeasesInput>;
  upsert?: InputMaybe<PropertyUpsertWithoutLeasesInput>;
};

export type PropertyUpdateOneRequiredWithoutMaintenanceRequestsNestedInput = {
  connect?: InputMaybe<PropertyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PropertyCreateOrConnectWithoutMaintenanceRequestsInput>;
  create?: InputMaybe<PropertyCreateWithoutMaintenanceRequestsInput>;
  update?: InputMaybe<PropertyUpdateToOneWithWhereWithoutMaintenanceRequestsInput>;
  upsert?: InputMaybe<PropertyUpsertWithoutMaintenanceRequestsInput>;
};

export type PropertyUpdateToOneWithWhereWithoutLeasesInput = {
  data: PropertyUpdateWithoutLeasesInput;
  where?: InputMaybe<PropertyWhereInput>;
};

export type PropertyUpdateToOneWithWhereWithoutMaintenanceRequestsInput = {
  data: PropertyUpdateWithoutMaintenanceRequestsInput;
  where?: InputMaybe<PropertyWhereInput>;
};

export type PropertyUpdateWithWhereUniqueWithoutAssignedAgentsInput = {
  data: PropertyUpdateWithoutAssignedAgentsInput;
  where: PropertyWhereUniqueInput;
};

export type PropertyUpdateWithoutAssignedAgentsInput = {
  PropertyListing?: InputMaybe<PropertyListingUpdateManyWithoutPropertyNestedInput>;
  PropertyOwner?: InputMaybe<PropertyOwnerUpdateOneWithoutPropertiesNestedInput>;
  amenities?: InputMaybe<PropertyAmenityUpdateManyWithoutPropertiesNestedInput>;
  commercialStatus?: InputMaybe<EnumPropertyCommercialStatusFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  floorSize?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  furnishing?: InputMaybe<NullableEnumPropertyFurnishingFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  landSize?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  leases?: InputMaybe<LeaseUpdateManyWithoutPropertyNestedInput>;
  location?: InputMaybe<LocationUpdateOneWithoutPropertyNestedInput>;
  maintenanceRequests?: InputMaybe<PropertyMaintenanceRequestUpdateManyWithoutPropertyNestedInput>;
  mediaList?: InputMaybe<FileUpdateManyWithoutPropertyNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priceList?: InputMaybe<PriceUpdateManyWithoutPropertyNestedInput>;
  status?: InputMaybe<EnumPropertyStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<PropertyTypeUpdateOneRequiredWithoutPropertyNestedInput>;
  uniqueCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PropertyUpdateWithoutLeasesInput = {
  PropertyListing?: InputMaybe<PropertyListingUpdateManyWithoutPropertyNestedInput>;
  PropertyOwner?: InputMaybe<PropertyOwnerUpdateOneWithoutPropertiesNestedInput>;
  amenities?: InputMaybe<PropertyAmenityUpdateManyWithoutPropertiesNestedInput>;
  assignedAgents?: InputMaybe<UserUpdateManyWithoutAssignedPropertiesNestedInput>;
  commercialStatus?: InputMaybe<EnumPropertyCommercialStatusFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  floorSize?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  furnishing?: InputMaybe<NullableEnumPropertyFurnishingFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  landSize?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  location?: InputMaybe<LocationUpdateOneWithoutPropertyNestedInput>;
  maintenanceRequests?: InputMaybe<PropertyMaintenanceRequestUpdateManyWithoutPropertyNestedInput>;
  mediaList?: InputMaybe<FileUpdateManyWithoutPropertyNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priceList?: InputMaybe<PriceUpdateManyWithoutPropertyNestedInput>;
  status?: InputMaybe<EnumPropertyStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<PropertyTypeUpdateOneRequiredWithoutPropertyNestedInput>;
  uniqueCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PropertyUpdateWithoutMaintenanceRequestsInput = {
  PropertyListing?: InputMaybe<PropertyListingUpdateManyWithoutPropertyNestedInput>;
  PropertyOwner?: InputMaybe<PropertyOwnerUpdateOneWithoutPropertiesNestedInput>;
  amenities?: InputMaybe<PropertyAmenityUpdateManyWithoutPropertiesNestedInput>;
  assignedAgents?: InputMaybe<UserUpdateManyWithoutAssignedPropertiesNestedInput>;
  commercialStatus?: InputMaybe<EnumPropertyCommercialStatusFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  floorSize?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  furnishing?: InputMaybe<NullableEnumPropertyFurnishingFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  landSize?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  leases?: InputMaybe<LeaseUpdateManyWithoutPropertyNestedInput>;
  location?: InputMaybe<LocationUpdateOneWithoutPropertyNestedInput>;
  mediaList?: InputMaybe<FileUpdateManyWithoutPropertyNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priceList?: InputMaybe<PriceUpdateManyWithoutPropertyNestedInput>;
  status?: InputMaybe<EnumPropertyStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<PropertyTypeUpdateOneRequiredWithoutPropertyNestedInput>;
  uniqueCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PropertyUpsertWithWhereUniqueWithoutAssignedAgentsInput = {
  create: PropertyCreateWithoutAssignedAgentsInput;
  update: PropertyUpdateWithoutAssignedAgentsInput;
  where: PropertyWhereUniqueInput;
};

export type PropertyUpsertWithoutLeasesInput = {
  create: PropertyCreateWithoutLeasesInput;
  update: PropertyUpdateWithoutLeasesInput;
  where?: InputMaybe<PropertyWhereInput>;
};

export type PropertyUpsertWithoutMaintenanceRequestsInput = {
  create: PropertyCreateWithoutMaintenanceRequestsInput;
  update: PropertyUpdateWithoutMaintenanceRequestsInput;
  where?: InputMaybe<PropertyWhereInput>;
};

export type PropertyWhereInput = {
  AND?: InputMaybe<Array<PropertyWhereInput>>;
  NOT?: InputMaybe<Array<PropertyWhereInput>>;
  OR?: InputMaybe<Array<PropertyWhereInput>>;
  PropertyListing?: InputMaybe<PropertyListingListRelationFilter>;
  PropertyOwner?: InputMaybe<PropertyOwnerNullableRelationFilter>;
  amenities?: InputMaybe<PropertyAmenityListRelationFilter>;
  assignedAgents?: InputMaybe<UserListRelationFilter>;
  commercialStatus?: InputMaybe<EnumPropertyCommercialStatusFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  floorSize?: InputMaybe<DecimalNullableFilter>;
  furnishing?: InputMaybe<EnumPropertyFurnishingNullableFilter>;
  id?: InputMaybe<StringFilter>;
  landSize?: InputMaybe<DecimalNullableFilter>;
  leases?: InputMaybe<LeaseListRelationFilter>;
  location?: InputMaybe<LocationNullableRelationFilter>;
  locationId?: InputMaybe<StringNullableFilter>;
  maintenanceRequests?: InputMaybe<PropertyMaintenanceRequestListRelationFilter>;
  mediaList?: InputMaybe<FileListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  priceList?: InputMaybe<PriceListRelationFilter>;
  propertyOwnerId?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumPropertyStatusFilter>;
  type?: InputMaybe<PropertyTypeRelationFilter>;
  typeId?: InputMaybe<StringFilter>;
  uniqueCode?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PropertyWhereUniqueInput = {
  AND?: InputMaybe<Array<PropertyWhereInput>>;
  NOT?: InputMaybe<Array<PropertyWhereInput>>;
  OR?: InputMaybe<Array<PropertyWhereInput>>;
  PropertyListing?: InputMaybe<PropertyListingListRelationFilter>;
  PropertyOwner?: InputMaybe<PropertyOwnerNullableRelationFilter>;
  amenities?: InputMaybe<PropertyAmenityListRelationFilter>;
  assignedAgents?: InputMaybe<UserListRelationFilter>;
  commercialStatus?: InputMaybe<EnumPropertyCommercialStatusFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  floorSize?: InputMaybe<DecimalNullableFilter>;
  furnishing?: InputMaybe<EnumPropertyFurnishingNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  landSize?: InputMaybe<DecimalNullableFilter>;
  leases?: InputMaybe<LeaseListRelationFilter>;
  location?: InputMaybe<LocationNullableRelationFilter>;
  locationId?: InputMaybe<StringNullableFilter>;
  maintenanceRequests?: InputMaybe<PropertyMaintenanceRequestListRelationFilter>;
  mediaList?: InputMaybe<FileListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  priceList?: InputMaybe<PriceListRelationFilter>;
  propertyOwnerId?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumPropertyStatusFilter>;
  type?: InputMaybe<PropertyTypeRelationFilter>;
  typeId?: InputMaybe<StringFilter>;
  uniqueCode?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Query = {
  __typename?: 'Query';
  amenities: Array<Amenity>;
  files: Array<FileWithUrl>;
  findProperties: Array<Maybe<Property>>;
  findPropertyTypes: Array<PropertyType>;
  findTenants: Array<Tenant>;
  findUniqueProperty?: Maybe<Property>;
  findUniqueTenant: Tenant;
};


export type QueryAmenitiesArgs = {
  cursor?: InputMaybe<PropertyAmenityWhereUniqueInput>;
  distinct?: InputMaybe<Array<PropertyAmenityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PropertyAmenityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PropertyAmenityWhereInput>;
};


export type QueryFindPropertiesArgs = {
  cursor?: InputMaybe<PropertyWhereUniqueInput>;
  distinct?: InputMaybe<Array<PropertyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PropertyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PropertyWhereInput>;
};


export type QueryFindPropertyTypesArgs = {
  cursor?: InputMaybe<PropertyTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<PropertyTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PropertyTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PropertyTypeWhereInput>;
};


export type QueryFindTenantsArgs = {
  cursor?: InputMaybe<TenantWhereUniqueInput>;
  distinct?: InputMaybe<Array<TenantScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TenantOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TenantWhereInput>;
};


export type QueryFindUniquePropertyArgs = {
  where: PropertyWhereUniqueInput;
};


export type QueryFindUniqueTenantArgs = {
  where: TenantWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Role = {
  __typename?: 'Role';
  _count: RoleCount;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions?: Maybe<Array<Permission>>;
  users?: Maybe<Array<User>>;
};

export type RoleCount = {
  __typename?: 'RoleCount';
  permissions: Scalars['Int']['output'];
  users: Scalars['Int']['output'];
};

export type RoleCreateNestedManyWithoutPermissionsInput = {
  connect?: InputMaybe<Array<RoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RoleCreateOrConnectWithoutPermissionsInput>>;
  create?: InputMaybe<Array<RoleCreateWithoutPermissionsInput>>;
};

export type RoleCreateNestedManyWithoutUsersInput = {
  connect?: InputMaybe<Array<RoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RoleCreateOrConnectWithoutUsersInput>>;
  create?: InputMaybe<Array<RoleCreateWithoutUsersInput>>;
};

export type RoleCreateOrConnectWithoutPermissionsInput = {
  create: RoleCreateWithoutPermissionsInput;
  where: RoleWhereUniqueInput;
};

export type RoleCreateOrConnectWithoutUsersInput = {
  create: RoleCreateWithoutUsersInput;
  where: RoleWhereUniqueInput;
};

export type RoleCreateWithoutPermissionsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  users?: InputMaybe<UserCreateNestedManyWithoutRolesInput>;
};

export type RoleCreateWithoutUsersInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<PermissionCreateNestedManyWithoutRolesInput>;
};

export type RoleListRelationFilter = {
  every?: InputMaybe<RoleWhereInput>;
  none?: InputMaybe<RoleWhereInput>;
  some?: InputMaybe<RoleWhereInput>;
};

export type RoleScalarWhereInput = {
  AND?: InputMaybe<Array<RoleScalarWhereInput>>;
  NOT?: InputMaybe<Array<RoleScalarWhereInput>>;
  OR?: InputMaybe<Array<RoleScalarWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type RoleUpdateManyMutationInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RoleUpdateManyWithWhereWithoutPermissionsInput = {
  data: RoleUpdateManyMutationInput;
  where: RoleScalarWhereInput;
};

export type RoleUpdateManyWithWhereWithoutUsersInput = {
  data: RoleUpdateManyMutationInput;
  where: RoleScalarWhereInput;
};

export type RoleUpdateManyWithoutPermissionsNestedInput = {
  connect?: InputMaybe<Array<RoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RoleCreateOrConnectWithoutPermissionsInput>>;
  create?: InputMaybe<Array<RoleCreateWithoutPermissionsInput>>;
  delete?: InputMaybe<Array<RoleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RoleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RoleWhereUniqueInput>>;
  set?: InputMaybe<Array<RoleWhereUniqueInput>>;
  update?: InputMaybe<Array<RoleUpdateWithWhereUniqueWithoutPermissionsInput>>;
  updateMany?: InputMaybe<Array<RoleUpdateManyWithWhereWithoutPermissionsInput>>;
  upsert?: InputMaybe<Array<RoleUpsertWithWhereUniqueWithoutPermissionsInput>>;
};

export type RoleUpdateManyWithoutUsersNestedInput = {
  connect?: InputMaybe<Array<RoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RoleCreateOrConnectWithoutUsersInput>>;
  create?: InputMaybe<Array<RoleCreateWithoutUsersInput>>;
  delete?: InputMaybe<Array<RoleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RoleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RoleWhereUniqueInput>>;
  set?: InputMaybe<Array<RoleWhereUniqueInput>>;
  update?: InputMaybe<Array<RoleUpdateWithWhereUniqueWithoutUsersInput>>;
  updateMany?: InputMaybe<Array<RoleUpdateManyWithWhereWithoutUsersInput>>;
  upsert?: InputMaybe<Array<RoleUpsertWithWhereUniqueWithoutUsersInput>>;
};

export type RoleUpdateWithWhereUniqueWithoutPermissionsInput = {
  data: RoleUpdateWithoutPermissionsInput;
  where: RoleWhereUniqueInput;
};

export type RoleUpdateWithWhereUniqueWithoutUsersInput = {
  data: RoleUpdateWithoutUsersInput;
  where: RoleWhereUniqueInput;
};

export type RoleUpdateWithoutPermissionsInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutRolesNestedInput>;
};

export type RoleUpdateWithoutUsersInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<PermissionUpdateManyWithoutRolesNestedInput>;
};

export type RoleUpsertWithWhereUniqueWithoutPermissionsInput = {
  create: RoleCreateWithoutPermissionsInput;
  update: RoleUpdateWithoutPermissionsInput;
  where: RoleWhereUniqueInput;
};

export type RoleUpsertWithWhereUniqueWithoutUsersInput = {
  create: RoleCreateWithoutUsersInput;
  update: RoleUpdateWithoutUsersInput;
  where: RoleWhereUniqueInput;
};

export type RoleWhereInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  permissions?: InputMaybe<PermissionListRelationFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type RoleWhereUniqueInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<PermissionListRelationFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Tenant = {
  __typename?: 'Tenant';
  _count: TenantCount;
  address?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  dateOfBirth?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  leases?: Maybe<Array<Lease>>;
  maintenanceRequests?: Maybe<Array<PropertyMaintenanceRequest>>;
  nationalId: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type TenantCount = {
  __typename?: 'TenantCount';
  leases: Scalars['Int']['output'];
  maintenanceRequests: Scalars['Int']['output'];
};

export type TenantCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  leases?: InputMaybe<LeaseCreateNestedManyWithoutTenantInput>;
  maintenanceRequests?: InputMaybe<PropertyMaintenanceRequestCreateNestedManyWithoutTenantInput>;
  nationalId: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TenantCreateNestedOneWithoutLeasesInput = {
  connect?: InputMaybe<TenantWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TenantCreateOrConnectWithoutLeasesInput>;
  create?: InputMaybe<TenantCreateWithoutLeasesInput>;
};

export type TenantCreateNestedOneWithoutMaintenanceRequestsInput = {
  connect?: InputMaybe<TenantWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TenantCreateOrConnectWithoutMaintenanceRequestsInput>;
  create?: InputMaybe<TenantCreateWithoutMaintenanceRequestsInput>;
};

export type TenantCreateOrConnectWithoutLeasesInput = {
  create: TenantCreateWithoutLeasesInput;
  where: TenantWhereUniqueInput;
};

export type TenantCreateOrConnectWithoutMaintenanceRequestsInput = {
  create: TenantCreateWithoutMaintenanceRequestsInput;
  where: TenantWhereUniqueInput;
};

export type TenantCreateWithoutLeasesInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  maintenanceRequests?: InputMaybe<PropertyMaintenanceRequestCreateNestedManyWithoutTenantInput>;
  nationalId: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TenantCreateWithoutMaintenanceRequestsInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  leases?: InputMaybe<LeaseCreateNestedManyWithoutTenantInput>;
  nationalId: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TenantOrderByWithRelationInput = {
  address?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  dateOfBirth?: InputMaybe<SortOrderInput>;
  email?: InputMaybe<SortOrderInput>;
  firstName?: InputMaybe<SortOrderInput>;
  gender?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrderInput>;
  leases?: InputMaybe<LeaseOrderByRelationAggregateInput>;
  maintenanceRequests?: InputMaybe<PropertyMaintenanceRequestOrderByRelationAggregateInput>;
  nationalId?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TenantRelationFilter = {
  is?: InputMaybe<TenantWhereInput>;
  isNot?: InputMaybe<TenantWhereInput>;
};

export enum TenantScalarFieldEnum {
  Address = 'address',
  CreatedAt = 'createdAt',
  DateOfBirth = 'dateOfBirth',
  Email = 'email',
  FirstName = 'firstName',
  Gender = 'gender',
  Id = 'id',
  LastName = 'lastName',
  NationalId = 'nationalId',
  PhoneNumber = 'phoneNumber',
  UpdatedAt = 'updatedAt'
}

export type TenantUpdateInput = {
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  leases?: InputMaybe<LeaseUpdateManyWithoutTenantNestedInput>;
  maintenanceRequests?: InputMaybe<PropertyMaintenanceRequestUpdateManyWithoutTenantNestedInput>;
  nationalId?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TenantUpdateOneRequiredWithoutLeasesNestedInput = {
  connect?: InputMaybe<TenantWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TenantCreateOrConnectWithoutLeasesInput>;
  create?: InputMaybe<TenantCreateWithoutLeasesInput>;
  update?: InputMaybe<TenantUpdateToOneWithWhereWithoutLeasesInput>;
  upsert?: InputMaybe<TenantUpsertWithoutLeasesInput>;
};

export type TenantUpdateOneRequiredWithoutMaintenanceRequestsNestedInput = {
  connect?: InputMaybe<TenantWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TenantCreateOrConnectWithoutMaintenanceRequestsInput>;
  create?: InputMaybe<TenantCreateWithoutMaintenanceRequestsInput>;
  update?: InputMaybe<TenantUpdateToOneWithWhereWithoutMaintenanceRequestsInput>;
  upsert?: InputMaybe<TenantUpsertWithoutMaintenanceRequestsInput>;
};

export type TenantUpdateToOneWithWhereWithoutLeasesInput = {
  data: TenantUpdateWithoutLeasesInput;
  where?: InputMaybe<TenantWhereInput>;
};

export type TenantUpdateToOneWithWhereWithoutMaintenanceRequestsInput = {
  data: TenantUpdateWithoutMaintenanceRequestsInput;
  where?: InputMaybe<TenantWhereInput>;
};

export type TenantUpdateWithoutLeasesInput = {
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  maintenanceRequests?: InputMaybe<PropertyMaintenanceRequestUpdateManyWithoutTenantNestedInput>;
  nationalId?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TenantUpdateWithoutMaintenanceRequestsInput = {
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dateOfBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  leases?: InputMaybe<LeaseUpdateManyWithoutTenantNestedInput>;
  nationalId?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TenantUpsertWithoutLeasesInput = {
  create: TenantCreateWithoutLeasesInput;
  update: TenantUpdateWithoutLeasesInput;
  where?: InputMaybe<TenantWhereInput>;
};

export type TenantUpsertWithoutMaintenanceRequestsInput = {
  create: TenantCreateWithoutMaintenanceRequestsInput;
  update: TenantUpdateWithoutMaintenanceRequestsInput;
  where?: InputMaybe<TenantWhereInput>;
};

export type TenantWhereInput = {
  AND?: InputMaybe<Array<TenantWhereInput>>;
  NOT?: InputMaybe<Array<TenantWhereInput>>;
  OR?: InputMaybe<Array<TenantWhereInput>>;
  address?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dateOfBirth?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringNullableFilter>;
  firstName?: InputMaybe<StringNullableFilter>;
  gender?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  leases?: InputMaybe<LeaseListRelationFilter>;
  maintenanceRequests?: InputMaybe<PropertyMaintenanceRequestListRelationFilter>;
  nationalId?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TenantWhereUniqueInput = {
  AND?: InputMaybe<Array<TenantWhereInput>>;
  NOT?: InputMaybe<Array<TenantWhereInput>>;
  OR?: InputMaybe<Array<TenantWhereInput>>;
  address?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dateOfBirth?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringNullableFilter>;
  firstName?: InputMaybe<StringNullableFilter>;
  gender?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<StringNullableFilter>;
  leases?: InputMaybe<LeaseListRelationFilter>;
  maintenanceRequests?: InputMaybe<PropertyMaintenanceRequestListRelationFilter>;
  nationalId?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Token = {
  __typename?: 'Token';
  accessToken: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  assignedProperties?: Maybe<Array<PropertyGenerated>>;
  hashedPassword: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  permissions?: Maybe<Array<Permission>>;
  roles?: Maybe<Array<Role>>;
  username: Scalars['String']['output'];
};

export type UserCount = {
  __typename?: 'UserCount';
  assignedProperties: Scalars['Int']['output'];
  permissions: Scalars['Int']['output'];
  roles: Scalars['Int']['output'];
};

export type UserCreateNestedManyWithoutAssignedPropertiesInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutAssignedPropertiesInput>>;
  create?: InputMaybe<Array<UserCreateWithoutAssignedPropertiesInput>>;
};

export type UserCreateNestedManyWithoutPermissionsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutPermissionsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutPermissionsInput>>;
};

export type UserCreateNestedManyWithoutRolesInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutRolesInput>>;
  create?: InputMaybe<Array<UserCreateWithoutRolesInput>>;
};

export type UserCreateOrConnectWithoutAssignedPropertiesInput = {
  create: UserCreateWithoutAssignedPropertiesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPermissionsInput = {
  create: UserCreateWithoutPermissionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRolesInput = {
  create: UserCreateWithoutRolesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAssignedPropertiesInput = {
  hashedPassword: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<PermissionCreateNestedManyWithoutUsersInput>;
  roles?: InputMaybe<RoleCreateNestedManyWithoutUsersInput>;
  username: Scalars['String']['input'];
};

export type UserCreateWithoutPermissionsInput = {
  assignedProperties?: InputMaybe<PropertyCreateNestedManyWithoutAssignedAgentsInput>;
  hashedPassword: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<RoleCreateNestedManyWithoutUsersInput>;
  username: Scalars['String']['input'];
};

export type UserCreateWithoutRolesInput = {
  assignedProperties?: InputMaybe<PropertyCreateNestedManyWithoutAssignedAgentsInput>;
  hashedPassword: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<PermissionCreateNestedManyWithoutUsersInput>;
  username: Scalars['String']['input'];
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  hashedPassword?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserUpdateManyMutationInput = {
  hashedPassword?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutAssignedPropertiesInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutPermissionsInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutRolesInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutAssignedPropertiesNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutAssignedPropertiesInput>>;
  create?: InputMaybe<Array<UserCreateWithoutAssignedPropertiesInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutAssignedPropertiesInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutAssignedPropertiesInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutAssignedPropertiesInput>>;
};

export type UserUpdateManyWithoutPermissionsNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutPermissionsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutPermissionsInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutPermissionsInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutPermissionsInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutPermissionsInput>>;
};

export type UserUpdateManyWithoutRolesNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutRolesInput>>;
  create?: InputMaybe<Array<UserCreateWithoutRolesInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutRolesInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutRolesInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutRolesInput>>;
};

export type UserUpdateWithWhereUniqueWithoutAssignedPropertiesInput = {
  data: UserUpdateWithoutAssignedPropertiesInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutPermissionsInput = {
  data: UserUpdateWithoutPermissionsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutRolesInput = {
  data: UserUpdateWithoutRolesInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutAssignedPropertiesInput = {
  hashedPassword?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<PermissionUpdateManyWithoutUsersNestedInput>;
  roles?: InputMaybe<RoleUpdateManyWithoutUsersNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutPermissionsInput = {
  assignedProperties?: InputMaybe<PropertyUpdateManyWithoutAssignedAgentsNestedInput>;
  hashedPassword?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  roles?: InputMaybe<RoleUpdateManyWithoutUsersNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutRolesInput = {
  assignedProperties?: InputMaybe<PropertyUpdateManyWithoutAssignedAgentsNestedInput>;
  hashedPassword?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<PermissionUpdateManyWithoutUsersNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithWhereUniqueWithoutAssignedPropertiesInput = {
  create: UserCreateWithoutAssignedPropertiesInput;
  update: UserUpdateWithoutAssignedPropertiesInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutPermissionsInput = {
  create: UserCreateWithoutPermissionsInput;
  update: UserUpdateWithoutPermissionsInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutRolesInput = {
  create: UserCreateWithoutRolesInput;
  update: UserUpdateWithoutRolesInput;
  where: UserWhereUniqueInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  assignedProperties?: InputMaybe<PropertyListRelationFilter>;
  hashedPassword?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  permissions?: InputMaybe<PermissionListRelationFilter>;
  roles?: InputMaybe<RoleListRelationFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  assignedProperties?: InputMaybe<PropertyListRelationFilter>;
  hashedPassword?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<PermissionListRelationFilter>;
  roles?: InputMaybe<RoleListRelationFilter>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type FindTenantByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FindTenantByIdQuery = { __typename?: 'Query', findUniqueTenant: { __typename?: 'Tenant', id: string, nationalId: string, firstName?: string | null } };

export type FindTenantsQueryVariables = Exact<{
  where?: InputMaybe<TenantWhereInput>;
}>;


export type FindTenantsQuery = { __typename?: 'Query', findTenants: Array<{ __typename?: 'Tenant', id: string, nationalId: string, firstName?: string | null, lastName?: string | null, gender?: string | null, createdAt: any, updatedAt: any }> };

export type FindAmenitiesQueryVariables = Exact<{
  where?: InputMaybe<PropertyAmenityWhereInput>;
}>;


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


export type FindFilesQuery = { __typename?: 'Query', files: Array<{ __typename?: 'FileWithUrl', id: string, name: string, url: string, mimetype: string }> };

export type FindPropertyTypesQueryVariables = Exact<{
  where?: InputMaybe<PropertyTypeWhereInput>;
}>;


export type FindPropertyTypesQuery = { __typename?: 'Query', findPropertyTypes: Array<{ __typename?: 'PropertyType', id: string, name: string, description?: string | null }> };

export type PropertyAttributesFragment = { __typename?: 'Property', id: string, name: string, status: PropertyStatus, uniqueCode?: string | null, landSize?: any | null, floorSize?: any | null, mediaList?: Array<{ __typename?: 'FileWithUrl', id: string }> | null, priceList?: Array<{ __typename?: 'Price', currency: string, price: any }> | null, type: { __typename?: 'PropertyType', id: string, name: string }, amenities?: Array<{ __typename?: 'PropertyAmenity', id: string, name: string }> | null };

export type CreatePropertyMutationVariables = Exact<{
  name: Scalars['String']['input'];
  status: PropertyStatus;
  typeId: Scalars['String']['input'];
  uniqueCode?: InputMaybe<Scalars['String']['input']>;
  landSize?: InputMaybe<Scalars['Decimal']['input']>;
  floorSize?: InputMaybe<Scalars['Decimal']['input']>;
}>;


export type CreatePropertyMutation = { __typename?: 'Mutation', createProperty: { __typename?: 'Property', id: string, name: string, status: PropertyStatus, uniqueCode?: string | null, landSize?: any | null, floorSize?: any | null, mediaList?: Array<{ __typename?: 'FileWithUrl', id: string }> | null, priceList?: Array<{ __typename?: 'Price', currency: string, price: any }> | null, type: { __typename?: 'PropertyType', id: string, name: string }, amenities?: Array<{ __typename?: 'PropertyAmenity', id: string, name: string }> | null } };

export type UpdatePropertyMutationVariables = Exact<{
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  uniqueCode?: InputMaybe<Scalars['String']['input']>;
  landSize?: InputMaybe<Scalars['Decimal']['input']>;
  floorSize?: InputMaybe<Scalars['Decimal']['input']>;
}>;


export type UpdatePropertyMutation = { __typename?: 'Mutation', updateProperty: { __typename?: 'Property', id: string, name: string, status: PropertyStatus, uniqueCode?: string | null, landSize?: any | null, floorSize?: any | null, mediaList?: Array<{ __typename?: 'FileWithUrl', id: string }> | null, priceList?: Array<{ __typename?: 'Price', currency: string, price: any }> | null, type: { __typename?: 'PropertyType', id: string, name: string }, amenities?: Array<{ __typename?: 'PropertyAmenity', id: string, name: string }> | null } };

export type FindPropertyByIdQueryVariables = Exact<{
  where: PropertyWhereUniqueInput;
}>;


export type FindPropertyByIdQuery = { __typename?: 'Query', findUniqueProperty?: { __typename?: 'Property', name: string, description?: string | null, status: PropertyStatus, uniqueCode?: string | null, id: string, commercialStatus: PropertyCommercialStatus, furnishing?: PropertyFurnishing | null, floorSize?: any | null, landSize?: any | null, location?: { __typename?: 'Location', id: string, address?: string | null, subdistrict?: string | null, district?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, latitude?: any | null, longitude?: any | null } | null, priceList?: Array<{ __typename?: 'Price', id: string, price: any, currency: string }> | null, type: { __typename?: 'PropertyType', id: string, name: string }, mediaList?: Array<{ __typename?: 'FileWithUrl', id: string, url: string, mimetype: string }> | null, amenities?: Array<{ __typename?: 'PropertyAmenity', id: string, name: string }> | null } | null };

export type FindPropertiesQueryVariables = Exact<{
  where?: InputMaybe<PropertyWhereInput>;
}>;


export type FindPropertiesQuery = { __typename?: 'Query', findProperties: Array<{ __typename?: 'Property', id: string, name: string, uniqueCode?: string | null, createdAt: any, updatedAt: any, type: { __typename?: 'PropertyType', id: string, name: string }, mediaList?: Array<{ __typename?: 'FileWithUrl', url: string }> | null } | null> };

export const PropertyAttributesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyAttributes"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCode"}},{"kind":"Field","name":{"kind":"Name","value":"landSize"}},{"kind":"Field","name":{"kind":"Name","value":"floorSize"}},{"kind":"Field","name":{"kind":"Name","value":"mediaList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"priceList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"amenities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<PropertyAttributesFragment, unknown>;
export const FindTenantByIdDocument = {"__meta__":{"hash":"ac55158d0131a6c297dc7c6dccc23945735f2366"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindTenantById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findUniqueTenant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nationalId"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}}]}}]}}]} as unknown as DocumentNode<FindTenantByIdQuery, FindTenantByIdQueryVariables>;
export const FindTenantsDocument = {"__meta__":{"hash":"857ca83a587e9ac2b8a730d0a69dbcb586246d5d"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindTenants"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TenantWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findTenants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nationalId"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FindTenantsQuery, FindTenantsQueryVariables>;
export const FindAmenitiesDocument = {"__meta__":{"hash":"2babce2d5789ab5c53490c5aae410281d31d3dff"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindAmenities"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyAmenityWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amenities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<FindAmenitiesQuery, FindAmenitiesQueryVariables>;
export const CreateAmenityDocument = {"__meta__":{"hash":"9ed095dfb8d28663a5e785a4b5c483f21079e9b5"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAmenity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAmenity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createAmenityData"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<CreateAmenityMutation, CreateAmenityMutationVariables>;
export const LoginDocument = {"__meta__":{"hash":"d0f4769aa18d1f04a71c8d20d4a52980873d780b"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"credentials"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const FindFilesDocument = {"__meta__":{"hash":"cdf351fbe9b417810a55872fb5ca8fa08b2ee1b2"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindFiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"mimetype"}}]}}]}}]} as unknown as DocumentNode<FindFilesQuery, FindFilesQueryVariables>;
export const FindPropertyTypesDocument = {"__meta__":{"hash":"b0d5e470a7328fee6f18df64ca95fd9ac5d40bf5"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindPropertyTypes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyTypeWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findPropertyTypes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<FindPropertyTypesQuery, FindPropertyTypesQueryVariables>;
export const CreatePropertyDocument = {"__meta__":{"hash":"e43cc15e84f836864bc4be1e0fb14e0e85493262"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProperty"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyStatus"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"typeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uniqueCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"landSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"floorSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProperty"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"typeId"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"uniqueCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uniqueCode"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"landSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"landSize"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"floorSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"floorSize"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyAttributes"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyAttributes"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCode"}},{"kind":"Field","name":{"kind":"Name","value":"landSize"}},{"kind":"Field","name":{"kind":"Name","value":"floorSize"}},{"kind":"Field","name":{"kind":"Name","value":"mediaList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"priceList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"amenities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreatePropertyMutation, CreatePropertyMutationVariables>;
export const UpdatePropertyDocument = {"__meta__":{"hash":"d2c6eb8d3a46dfb0d16e093cdacbdc7d1082c58e"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProperty"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"typeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uniqueCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"landSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"floorSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProperty"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"typeId"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"uniqueCode"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uniqueCode"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"landSize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"landSize"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"floorSize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"floorSize"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyAttributes"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyAttributes"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCode"}},{"kind":"Field","name":{"kind":"Name","value":"landSize"}},{"kind":"Field","name":{"kind":"Name","value":"floorSize"}},{"kind":"Field","name":{"kind":"Name","value":"mediaList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"priceList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"amenities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdatePropertyMutation, UpdatePropertyMutationVariables>;
export const FindPropertyByIdDocument = {"__meta__":{"hash":"1ab52f9a67bb185e3ab8919fd57b2fcc69f71818"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindPropertyById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findUniqueProperty"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCode"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commercialStatus"}},{"kind":"Field","name":{"kind":"Name","value":"furnishing"}},{"kind":"Field","name":{"kind":"Name","value":"floorSize"}},{"kind":"Field","name":{"kind":"Name","value":"landSize"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"subdistrict"}},{"kind":"Field","name":{"kind":"Name","value":"district"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}},{"kind":"Field","name":{"kind":"Name","value":"priceList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediaList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"mimetype"}}]}},{"kind":"Field","name":{"kind":"Name","value":"amenities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<FindPropertyByIdQuery, FindPropertyByIdQueryVariables>;
export const FindPropertiesDocument = {"__meta__":{"hash":"dfe365f9a7e1bbc2f5a1891822ee3f6ef4f9a7eb"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindProperties"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findProperties"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueCode"}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mediaList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FindPropertiesQuery, FindPropertiesQueryVariables>;