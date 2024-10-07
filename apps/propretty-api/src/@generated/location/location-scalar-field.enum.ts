import { registerEnumType } from '@nestjs/graphql';

export enum LocationScalarFieldEnum {
    id = "id",
    address = "address",
    subdistrict = "subdistrict",
    district = "district",
    province = "province",
    country = "country",
    postalCode = "postalCode",
    latitude = "latitude",
    longitude = "longitude"
}


registerEnumType(LocationScalarFieldEnum, { name: 'LocationScalarFieldEnum', description: undefined })
