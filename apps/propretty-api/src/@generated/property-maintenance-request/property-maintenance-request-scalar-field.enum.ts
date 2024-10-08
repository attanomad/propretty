import { registerEnumType } from '@nestjs/graphql';

export enum PropertyMaintenanceRequestScalarFieldEnum {
    id = "id",
    propertyId = "propertyId",
    tenantId = "tenantId",
    leaseId = "leaseId",
    title = "title",
    description = "description",
    requestedAt = "requestedAt",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PropertyMaintenanceRequestScalarFieldEnum, { name: 'PropertyMaintenanceRequestScalarFieldEnum', description: undefined })
