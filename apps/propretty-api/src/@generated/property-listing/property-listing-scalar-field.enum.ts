import { registerEnumType } from '@nestjs/graphql';

export enum PropertyListingScalarFieldEnum {
    id = "id",
    status = "status",
    type = "type",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    propertyId = "propertyId"
}


registerEnumType(PropertyListingScalarFieldEnum, { name: 'PropertyListingScalarFieldEnum', description: undefined })
