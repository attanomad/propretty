import { registerEnumType } from '@nestjs/graphql';

export enum PropertyCommercialStatus {
    AVAILABLE = "AVAILABLE",
    RENTED = "RENTED",
    SOLD = "SOLD",
    PENDING = "PENDING"
}


registerEnumType(PropertyCommercialStatus, { name: 'PropertyCommercialStatus', description: undefined })
