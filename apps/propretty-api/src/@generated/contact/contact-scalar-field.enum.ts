import { registerEnumType } from '@nestjs/graphql';

export enum ContactScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ContactScalarFieldEnum, { name: 'ContactScalarFieldEnum', description: undefined })
