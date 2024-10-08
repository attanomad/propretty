import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyTypeWhereInput } from './property-type-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { PropertyListRelationFilter } from '../property/property-list-relation-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class PropertyTypeWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => [PropertyTypeWhereInput], {nullable:true})
    AND?: Array<PropertyTypeWhereInput>;

    @Field(() => [PropertyTypeWhereInput], {nullable:true})
    OR?: Array<PropertyTypeWhereInput>;

    @Field(() => [PropertyTypeWhereInput], {nullable:true})
    NOT?: Array<PropertyTypeWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @HideField()
    Property?: PropertyListRelationFilter;
}
