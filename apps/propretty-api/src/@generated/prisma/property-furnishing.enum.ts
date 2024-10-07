import { registerEnumType } from '@nestjs/graphql';

export enum PropertyFurnishing {
    FULLY_FURNISHED = "FULLY_FURNISHED",
    SEMI_FURNISHED = "SEMI_FURNISHED",
    UNFURNISHED = "UNFURNISHED"
}


registerEnumType(PropertyFurnishing, { name: 'PropertyFurnishing', description: undefined })
