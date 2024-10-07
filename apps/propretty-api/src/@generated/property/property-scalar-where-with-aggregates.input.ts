import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumPropertyStatusWithAggregatesFilter } from '../prisma/enum-property-status-with-aggregates-filter.input';
import { EnumPropertyCommercialStatusWithAggregatesFilter } from '../prisma/enum-property-commercial-status-with-aggregates-filter.input';
import { DecimalNullableWithAggregatesFilter } from '../prisma/decimal-nullable-with-aggregates-filter.input';
import { EnumPropertyFurnishingNullableWithAggregatesFilter } from '../prisma/enum-property-furnishing-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PropertyScalarWhereWithAggregatesInput {

    @Field(() => [PropertyScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => PropertyScalarWhereWithAggregatesInput)
    AND?: Array<PropertyScalarWhereWithAggregatesInput>;

    @Field(() => [PropertyScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => PropertyScalarWhereWithAggregatesInput)
    OR?: Array<PropertyScalarWhereWithAggregatesInput>;

    @Field(() => [PropertyScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => PropertyScalarWhereWithAggregatesInput)
    NOT?: Array<PropertyScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => EnumPropertyStatusWithAggregatesFilter, {nullable:true})
    status?: EnumPropertyStatusWithAggregatesFilter;

    @Field(() => EnumPropertyCommercialStatusWithAggregatesFilter, {nullable:true})
    commercialStatus?: EnumPropertyCommercialStatusWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    uniqueCode?: StringNullableWithAggregatesFilter;

    @Field(() => DecimalNullableWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalNullableWithAggregatesFilter)
    floorSize?: DecimalNullableWithAggregatesFilter;

    @Field(() => DecimalNullableWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalNullableWithAggregatesFilter)
    landSize?: DecimalNullableWithAggregatesFilter;

    @Field(() => EnumPropertyFurnishingNullableWithAggregatesFilter, {nullable:true})
    furnishing?: EnumPropertyFurnishingNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    typeId?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    locationId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    propertyOwnerId?: StringNullableWithAggregatesFilter;
}
