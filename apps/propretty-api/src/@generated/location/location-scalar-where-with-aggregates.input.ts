import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DecimalNullableWithAggregatesFilter } from '../prisma/decimal-nullable-with-aggregates-filter.input';

@InputType()
export class LocationScalarWhereWithAggregatesInput {

    @Field(() => [LocationScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => LocationScalarWhereWithAggregatesInput)
    AND?: Array<LocationScalarWhereWithAggregatesInput>;

    @Field(() => [LocationScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => LocationScalarWhereWithAggregatesInput)
    OR?: Array<LocationScalarWhereWithAggregatesInput>;

    @Field(() => [LocationScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => LocationScalarWhereWithAggregatesInput)
    NOT?: Array<LocationScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    address?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    subdistrict?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    district?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    province?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    country?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    postalCode?: StringNullableWithAggregatesFilter;

    @Field(() => DecimalNullableWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalNullableWithAggregatesFilter)
    latitude?: DecimalNullableWithAggregatesFilter;

    @Field(() => DecimalNullableWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalNullableWithAggregatesFilter)
    longitude?: DecimalNullableWithAggregatesFilter;
}
