import { registerEnumType } from '@nestjs/graphql';

export enum LeaseScalarFieldEnum {
    id = "id",
    propertyId = "propertyId",
    tenantId = "tenantId",
    startedDate = "startedDate",
    endDate = "endDate",
    status = "status",
    rentAmount = "rentAmount",
    depositAmount = "depositAmount",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(LeaseScalarFieldEnum, { name: 'LeaseScalarFieldEnum', description: undefined })
