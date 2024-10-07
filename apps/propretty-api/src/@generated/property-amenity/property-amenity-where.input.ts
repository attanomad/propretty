import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { PropertyListRelationFilter } from '../property/property-list-relation-filter.input';

@InputType()
export class PropertyAmenityWhereInput {

    @Field(() => [PropertyAmenityWhereInput], {nullable:true})
    AND?: Array<PropertyAmenityWhereInput>;

    @Field(() => [PropertyAmenityWhereInput], {nullable:true})
    OR?: Array<PropertyAmenityWhereInput>;

    @Field(() => [PropertyAmenityWhereInput], {nullable:true})
    NOT?: Array<PropertyAmenityWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @HideField()
    properties?: PropertyListRelationFilter;
}
