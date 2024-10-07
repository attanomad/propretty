import { registerEnumType } from '@nestjs/graphql';

export enum PropertyAmenityScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PropertyAmenityScalarFieldEnum, { name: 'PropertyAmenityScalarFieldEnum', description: undefined })
