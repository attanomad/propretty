import { registerEnumType } from '@nestjs/graphql';

export enum PropertyListingType {
    FOR_SALE = "FOR_SALE",
    FOR_RENT = "FOR_RENT"
}


registerEnumType(PropertyListingType, { name: 'PropertyListingType', description: undefined })
