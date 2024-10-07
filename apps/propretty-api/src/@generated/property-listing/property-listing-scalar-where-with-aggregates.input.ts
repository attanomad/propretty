import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumPropertyListingStatusWithAggregatesFilter } from '../prisma/enum-property-listing-status-with-aggregates-filter.input';
import { EnumPropertyListingTypeWithAggregatesFilter } from '../prisma/enum-property-listing-type-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PropertyListingScalarWhereWithAggregatesInput {

    @Field(() => [PropertyListingScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PropertyListingScalarWhereWithAggregatesInput>;

    @Field(() => [PropertyListingScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PropertyListingScalarWhereWithAggregatesInput>;

    @Field(() => [PropertyListingScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PropertyListingScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumPropertyListingStatusWithAggregatesFilter, {nullable:true})
    status?: EnumPropertyListingStatusWithAggregatesFilter;

    @Field(() => EnumPropertyListingTypeWithAggregatesFilter, {nullable:true})
    type?: EnumPropertyListingTypeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    propertyId?: StringWithAggregatesFilter;
}
