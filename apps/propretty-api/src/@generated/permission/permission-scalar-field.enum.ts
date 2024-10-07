import { registerEnumType } from '@nestjs/graphql';

export enum PermissionScalarFieldEnum {
    id = "id",
    isAllowed = "isAllowed",
    subject = "subject",
    action = "action",
    field = "field",
    conditions = "conditions"
}


registerEnumType(PermissionScalarFieldEnum, { name: 'PermissionScalarFieldEnum', description: undefined })
