import { registerEnumType } from '@nestjs/graphql';

export enum PropertyMaintenanceRequestStatus {
    Pending = "Pending",
    InProgress = "InProgress",
    Completed = "Completed",
    Cancelled = "Cancelled"
}


registerEnumType(PropertyMaintenanceRequestStatus, { name: 'PropertyMaintenanceRequestStatus', description: undefined })
