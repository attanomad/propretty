import { registerEnumType } from '@nestjs/graphql';

export enum PropertyScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    status = "status",
    commercialStatus = "commercialStatus",
    uniqueCode = "uniqueCode",
    floorSize = "floorSize",
    landSize = "landSize",
    furnishing = "furnishing",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    typeId = "typeId",
    locationId = "locationId",
    propertyOwnerId = "propertyOwnerId"
}


registerEnumType(PropertyScalarFieldEnum, { name: 'PropertyScalarFieldEnum', description: undefined })
