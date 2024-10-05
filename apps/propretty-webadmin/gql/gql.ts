/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n        query FindAmenities {\n          amenities {\n            id\n            name\n            description\n          }\n        }\n      ": types.FindAmenitiesDocument,
    "\n        mutation CreateAmenity($name: String!, $description: String) {\n          createAmenity(\n            createAmenityData: { name: $name, description: $description }\n          ) {\n            id\n            name\n            description\n          }\n        }\n      ": types.CreateAmenityDocument,
    "\n        query FindFiles {\n          files {\n            id\n            name\n            url\n            mimetype\n          }\n        }\n      ": types.FindFilesDocument,
    "\n        query FindPropertyTypes {\n          propertyTypes {\n            id\n            name\n            description\n          }\n        }\n      ": types.FindPropertyTypesDocument,
    "fragment PropertyAttributes on Property {\n  id\n  name\n  status\n  uniqueCode\n  landSize\n  floorSize\n  mediaList {\n    id\n  }\n  priceList {\n    currency\n    price\n  }\n  type {\n    id\n    name\n  }\n  amenities {\n    id\n    name\n  }\n}\n\nmutation CreateProperty($name: String!, $status: PropertyStatus!, $typeId: String!, $uniqueCode: String, $mediaList: [String], $priceList: [CreatePriceInput!], $amenityIds: [String!], $location: UpsertLocationInput, $landSize: Decimal, $floorSize: Decimal) {\n  createProperty(\n    createPropertyData: {name: $name, status: $status, typeId: $typeId, uniqueCode: $uniqueCode, mediaList: $mediaList, priceList: $priceList, amenityIds: $amenityIds, location: $location, landSize: $landSize, floorSize: $floorSize}\n  ) {\n    ...PropertyAttributes\n  }\n}\n\nmutation UpdateProperty($id: String!, $name: String, $typeId: String, $uniqueCode: String, $landSize: Decimal, $floorSize: Decimal, $location: UpsertLocationInput, $mediaList: [String!], $priceList: [CreatePriceInput!], $amenityIds: [String!]) {\n  updateProperty(\n    id: $id\n    updatePropertyData: {name: $name, typeId: $typeId, uniqueCode: $uniqueCode, landSize: $landSize, floorSize: $floorSize, mediaList: $mediaList, priceList: $priceList, location: $location, amenityIds: $amenityIds}\n  ) {\n    ...PropertyAttributes\n  }\n}": types.PropertyAttributesFragmentDoc,
    "query FindPropertyById($id: String!) {\n  findProperty(id: $id) {\n    name\n    description\n    status\n    uniqueCode\n    id\n    commercialStatus\n    furnishing\n    floorSize\n    landSize\n    location {\n      id\n      address\n      subdistrict\n      district\n      province\n      postalCode\n      country\n      latitude\n      longitude\n    }\n    priceList {\n      id\n      price\n      currency\n    }\n    type {\n      id\n      name\n    }\n    mediaList {\n      id\n      url\n      mimetype\n    }\n    amenities {\n      id\n      name\n    }\n  }\n}\n\nquery FindProperties {\n  properties {\n    id\n    name\n    uniqueCode\n    type {\n      id\n      name\n    }\n    mediaList {\n      url\n    }\n    createdAt\n    updatedAt\n  }\n}": types.FindPropertyByIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        query FindAmenities {\n          amenities {\n            id\n            name\n            description\n          }\n        }\n      "): (typeof documents)["\n        query FindAmenities {\n          amenities {\n            id\n            name\n            description\n          }\n        }\n      "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation CreateAmenity($name: String!, $description: String) {\n          createAmenity(\n            createAmenityData: { name: $name, description: $description }\n          ) {\n            id\n            name\n            description\n          }\n        }\n      "): (typeof documents)["\n        mutation CreateAmenity($name: String!, $description: String) {\n          createAmenity(\n            createAmenityData: { name: $name, description: $description }\n          ) {\n            id\n            name\n            description\n          }\n        }\n      "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        query FindFiles {\n          files {\n            id\n            name\n            url\n            mimetype\n          }\n        }\n      "): (typeof documents)["\n        query FindFiles {\n          files {\n            id\n            name\n            url\n            mimetype\n          }\n        }\n      "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        query FindPropertyTypes {\n          propertyTypes {\n            id\n            name\n            description\n          }\n        }\n      "): (typeof documents)["\n        query FindPropertyTypes {\n          propertyTypes {\n            id\n            name\n            description\n          }\n        }\n      "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment PropertyAttributes on Property {\n  id\n  name\n  status\n  uniqueCode\n  landSize\n  floorSize\n  mediaList {\n    id\n  }\n  priceList {\n    currency\n    price\n  }\n  type {\n    id\n    name\n  }\n  amenities {\n    id\n    name\n  }\n}\n\nmutation CreateProperty($name: String!, $status: PropertyStatus!, $typeId: String!, $uniqueCode: String, $mediaList: [String], $priceList: [CreatePriceInput!], $amenityIds: [String!], $location: UpsertLocationInput, $landSize: Decimal, $floorSize: Decimal) {\n  createProperty(\n    createPropertyData: {name: $name, status: $status, typeId: $typeId, uniqueCode: $uniqueCode, mediaList: $mediaList, priceList: $priceList, amenityIds: $amenityIds, location: $location, landSize: $landSize, floorSize: $floorSize}\n  ) {\n    ...PropertyAttributes\n  }\n}\n\nmutation UpdateProperty($id: String!, $name: String, $typeId: String, $uniqueCode: String, $landSize: Decimal, $floorSize: Decimal, $location: UpsertLocationInput, $mediaList: [String!], $priceList: [CreatePriceInput!], $amenityIds: [String!]) {\n  updateProperty(\n    id: $id\n    updatePropertyData: {name: $name, typeId: $typeId, uniqueCode: $uniqueCode, landSize: $landSize, floorSize: $floorSize, mediaList: $mediaList, priceList: $priceList, location: $location, amenityIds: $amenityIds}\n  ) {\n    ...PropertyAttributes\n  }\n}"): (typeof documents)["fragment PropertyAttributes on Property {\n  id\n  name\n  status\n  uniqueCode\n  landSize\n  floorSize\n  mediaList {\n    id\n  }\n  priceList {\n    currency\n    price\n  }\n  type {\n    id\n    name\n  }\n  amenities {\n    id\n    name\n  }\n}\n\nmutation CreateProperty($name: String!, $status: PropertyStatus!, $typeId: String!, $uniqueCode: String, $mediaList: [String], $priceList: [CreatePriceInput!], $amenityIds: [String!], $location: UpsertLocationInput, $landSize: Decimal, $floorSize: Decimal) {\n  createProperty(\n    createPropertyData: {name: $name, status: $status, typeId: $typeId, uniqueCode: $uniqueCode, mediaList: $mediaList, priceList: $priceList, amenityIds: $amenityIds, location: $location, landSize: $landSize, floorSize: $floorSize}\n  ) {\n    ...PropertyAttributes\n  }\n}\n\nmutation UpdateProperty($id: String!, $name: String, $typeId: String, $uniqueCode: String, $landSize: Decimal, $floorSize: Decimal, $location: UpsertLocationInput, $mediaList: [String!], $priceList: [CreatePriceInput!], $amenityIds: [String!]) {\n  updateProperty(\n    id: $id\n    updatePropertyData: {name: $name, typeId: $typeId, uniqueCode: $uniqueCode, landSize: $landSize, floorSize: $floorSize, mediaList: $mediaList, priceList: $priceList, location: $location, amenityIds: $amenityIds}\n  ) {\n    ...PropertyAttributes\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindPropertyById($id: String!) {\n  findProperty(id: $id) {\n    name\n    description\n    status\n    uniqueCode\n    id\n    commercialStatus\n    furnishing\n    floorSize\n    landSize\n    location {\n      id\n      address\n      subdistrict\n      district\n      province\n      postalCode\n      country\n      latitude\n      longitude\n    }\n    priceList {\n      id\n      price\n      currency\n    }\n    type {\n      id\n      name\n    }\n    mediaList {\n      id\n      url\n      mimetype\n    }\n    amenities {\n      id\n      name\n    }\n  }\n}\n\nquery FindProperties {\n  properties {\n    id\n    name\n    uniqueCode\n    type {\n      id\n      name\n    }\n    mediaList {\n      url\n    }\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query FindPropertyById($id: String!) {\n  findProperty(id: $id) {\n    name\n    description\n    status\n    uniqueCode\n    id\n    commercialStatus\n    furnishing\n    floorSize\n    landSize\n    location {\n      id\n      address\n      subdistrict\n      district\n      province\n      postalCode\n      country\n      latitude\n      longitude\n    }\n    priceList {\n      id\n      price\n      currency\n    }\n    type {\n      id\n      name\n    }\n    mediaList {\n      id\n      url\n      mimetype\n    }\n    amenities {\n      id\n      name\n    }\n  }\n}\n\nquery FindProperties {\n  properties {\n    id\n    name\n    uniqueCode\n    type {\n      id\n      name\n    }\n    mediaList {\n      url\n    }\n    createdAt\n    updatedAt\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;