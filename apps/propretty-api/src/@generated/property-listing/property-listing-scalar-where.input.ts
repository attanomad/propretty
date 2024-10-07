import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumPropertyListingStatusFilter } from '../prisma/enum-property-listing-status-filter.input';
import { EnumPropertyListingTypeFilter } from '../prisma/enum-property-listing-type-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PropertyListingScalarWhereInput {

    @Field(() => [PropertyListingScalarWhereInput], {nullable:true})
    AND?: Array<PropertyListingScalarWhereInput>;

    @Field(() => [PropertyListingScalarWhereInput], {nullable:true})
    OR?: Array<PropertyListingScalarWhereInput>;

    @Field(() => [PropertyListingScalarWhereInput], {nullable:true})
    NOT?: Array<PropertyListingScalarWhereInput>;

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
}
