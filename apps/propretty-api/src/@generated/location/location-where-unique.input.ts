import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationWhereInput } from './location-where.input';
import { Type } from 'class-transformer';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { PropertyListRelationFilter } from '../property/property-list-relation-filter.input';

@InputType()
export class LocationWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [LocationWhereInput], {nullable:true})
    @Type(() => LocationWhereInput)
    AND?: Array<LocationWhereInput>;

    @Field(() => [LocationWhereInput], {nullable:true})
    @Type(() => LocationWhereInput)
    OR?: Array<LocationWhereInput>;

    @Field(() => [LocationWhereInput], {nullable:true})
    @Type(() => LocationWhereInput)
    NOT?: Array<LocationWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    address?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    subdistrict?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    district?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    province?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    country?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    postalCode?: StringNullableFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    latitude?: DecimalNullableFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    longitude?: DecimalNullableFilter;

    @Field(() => PropertyListRelationFilter, {nullable:true})
    @Type(() => PropertyListRelationFilter)
    Property?: PropertyListRelationFilter;
}
