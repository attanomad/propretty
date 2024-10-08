import { registerEnumType } from '@nestjs/graphql';

export enum PropertyMaintenanceRequestActivityScalarFieldEnum {
    id = "id",
    requestId = "requestId",
    status = "status",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PropertyMaintenanceRequestActivityScalarFieldEnum, { name: 'PropertyMaintenanceRequestActivityScalarFieldEnum', description: undefined })
