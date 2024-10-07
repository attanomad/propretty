import { registerEnumType } from '@nestjs/graphql';

export enum PropertyStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}


registerEnumType(PropertyStatus, { name: 'PropertyStatus', description: undefined })
