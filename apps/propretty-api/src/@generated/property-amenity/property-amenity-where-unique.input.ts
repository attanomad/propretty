import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyAmenityWhereInput } from './property-amenity-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { PropertyListRelationFilter } from '../property/property-list-relation-filter.input';

@InputType()
export class PropertyAmenityWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => [PropertyAmenityWhereInput], {nullable:true})
    AND?: Array<PropertyAmenityWhereInput>;

    @Field(() => [PropertyAmenityWhereInput], {nullable:true})
    OR?: Array<PropertyAmenityWhereInput>;

    @Field(() => [PropertyAmenityWhereInput], {nullable:true})
    NOT?: Array<PropertyAmenityWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @HideField()
    properties?: PropertyListRelationFilter;
}
