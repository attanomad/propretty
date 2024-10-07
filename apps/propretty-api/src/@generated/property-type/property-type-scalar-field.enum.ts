import { registerEnumType } from '@nestjs/graphql';

export enum PropertyTypeScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description"
}


registerEnumType(PropertyTypeScalarFieldEnum, { name: 'PropertyTypeScalarFieldEnum', description: undefined })
