import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyWhereInput } from './property-where.input';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumPropertyStatusFilter } from '../prisma/enum-property-status-filter.input';
import { EnumPropertyCommercialStatusFilter } from '../prisma/enum-property-commercial-status-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { EnumPropertyFurnishingNullableFilter } from '../prisma/enum-property-furnishing-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { FileListRelationFilter } from '../file/file-list-relation-filter.input';
import { PriceListRelationFilter } from '../price/price-list-relation-filter.input';
import { LocationNullableRelationFilter } from '../location/location-nullable-relation-filter.input';
import { PropertyTypeRelationFilter } from '../property-type/property-type-relation-filter.input';
import { PropertyAmenityListRelationFilter } from '../property-amenity/property-amenity-list-relation-filter.input';
import { PropertyOwnerNullableRelationFilter } from '../property-owner/property-owner-nullable-relation-filter.input';
import { PropertyListingListRelationFilter } from '../property-listing/property-listing-list-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';

@InputType()
export class PropertyWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    uniqueCode?: string;

    @Field(() => [PropertyWhereInput], {nullable:true})
    @Type(() => PropertyWhereInput)
    AND?: Array<PropertyWhereInput>;

    @Field(() => [PropertyWhereInput], {nullable:true})
    @Type(() => PropertyWhereInput)
    OR?: Array<PropertyWhereInput>;

    @Field(() => [PropertyWhereInput], {nullable:true})
    @Type(() => PropertyWhereInput)
    NOT?: Array<PropertyWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => EnumPropertyStatusFilter, {nullable:true})
    status?: EnumPropertyStatusFilter;

    @Field(() => EnumPropertyCommercialStatusFilter, {nullable:true})
    commercialStatus?: EnumPropertyCommercialStatusFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    floorSize?: DecimalNullableFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    landSize?: DecimalNullableFilter;

    @Field(() => EnumPropertyFurnishingNullableFilter, {nullable:true})
    furnishing?: EnumPropertyFurnishingNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    typeId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    locationId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    propertyOwnerId?: StringNullableFilter;

    @Field(() => FileListRelationFilter, {nullable:true})
    @Type(() => FileListRelationFilter)
    mediaList?: FileListRelationFilter;

    @Field(() => PriceListRelationFilter, {nullable:true})
    @Type(() => PriceListRelationFilter)
    priceList?: PriceListRelationFilter;

    @Field(() => LocationNullableRelationFilter, {nullable:true})
    @Type(() => LocationNullableRelationFilter)
    location?: LocationNullableRelationFilter;

    @Field(() => PropertyTypeRelationFilter, {nullable:true})
    @Type(() => PropertyTypeRelationFilter)
    type?: PropertyTypeRelationFilter;

    @Field(() => PropertyAmenityListRelationFilter, {nullable:true})
    @Type(() => PropertyAmenityListRelationFilter)
    amenities?: PropertyAmenityListRelationFilter;

    @Field(() => PropertyOwnerNullableRelationFilter, {nullable:true})
    @Type(() => PropertyOwnerNullableRelationFilter)
    PropertyOwner?: PropertyOwnerNullableRelationFilter;

    @Field(() => PropertyListingListRelationFilter, {nullable:true})
    @Type(() => PropertyListingListRelationFilter)
    PropertyListing?: PropertyListingListRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    @Type(() => UserListRelationFilter)
    assignedAgents?: UserListRelationFilter;
}
