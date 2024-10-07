import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumPropertyListingStatusFilter } from '../prisma/enum-property-listing-status-filter.input';
import { EnumPropertyListingTypeFilter } from '../prisma/enum-property-listing-type-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PropertyRelationFilter } from '../property/property-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class PropertyListingWhereInput {

    @Field(() => [PropertyListingWhereInput], {nullable:true})
    AND?: Array<PropertyListingWhereInput>;

    @Field(() => [PropertyListingWhereInput], {nullable:true})
    OR?: Array<PropertyListingWhereInput>;

    @Field(() => [PropertyListingWhereInput], {nullable:true})
    NOT?: Array<PropertyListingWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumPropertyListingStatusFilter, {nullable:true})
    status?: EnumPropertyListingStatusFilter;

    @Field(() => EnumPropertyListingTypeFilter, {nullable:true})
    type?: EnumPropertyListingTypeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    propertyId?: StringFilter;

    @Field(() => PropertyRelationFilter, {nullable:true})
    @Type(() => PropertyRelationFilter)
    property?: PropertyRelationFilter;
}
