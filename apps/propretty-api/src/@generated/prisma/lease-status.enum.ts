import { registerEnumType } from '@nestjs/graphql';

export enum LeaseStatus {
    Active = "Active",
    Pending = "Pending",
    Terminated = "Terminated",
    Expired = "Expired"
}


registerEnumType(LeaseStatus, { name: 'LeaseStatus', description: undefined })
