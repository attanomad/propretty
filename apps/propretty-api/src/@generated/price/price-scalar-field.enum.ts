import { registerEnumType } from '@nestjs/graphql';

export enum PriceScalarFieldEnum {
    id = "id",
    currency = "currency",
    price = "price",
    propertyId = "propertyId"
}


registerEnumType(PriceScalarFieldEnum, { name: 'PriceScalarFieldEnum', description: undefined })
