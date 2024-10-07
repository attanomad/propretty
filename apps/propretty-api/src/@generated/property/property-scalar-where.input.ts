import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumPropertyStatusFilter } from '../prisma/enum-property-status-filter.input';
import { EnumPropertyCommercialStatusFilter } from '../prisma/enum-property-commercial-status-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { EnumPropertyFurnishingNullableFilter } from '../prisma/enum-property-furnishing-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PropertyScalarWhereInput {

    @Field(() => [PropertyScalarWhereInput], {nullable:true})
    @Type(() => PropertyScalarWhereInput)
    AND?: Array<PropertyScalarWhereInput>;

    @Field(() => [PropertyScalarWhereInput], {nullable:true})
    @Type(() => PropertyScalarWhereInput)
    OR?: Array<PropertyScalarWhereInput>;

    @Field(() => [PropertyScalarWhereInput], {nullable:true})
    @Type(() => PropertyScalarWhereInput)
    NOT?: Array<PropertyScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => EnumPropertyStatusFilter, {nullable:true})
    status?: EnumPropertyStatusFilter;

    @Field(() => EnumPropertyCommercialStatusFilter, {nullable:true})
    commercialStatus?: EnumPropertyCommercialStatusFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    uniqueCode?: StringNullableFilter;

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
}
