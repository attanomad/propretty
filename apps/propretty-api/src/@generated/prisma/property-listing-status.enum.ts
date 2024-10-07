import { registerEnumType } from '@nestjs/graphql';

export enum PropertyListingStatus {
    LISTED = "LISTED",
    UNLISTED = "UNLISTED"
}


registerEnumType(PropertyListingStatus, { name: 'PropertyListingStatus', description: undefined })
