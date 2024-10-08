import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { PropertyListRelationFilter } from '../property/property-list-relation-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class PropertyTypeWhereInput {

    @Field(() => [PropertyTypeWhereInput], {nullable:true})
    AND?: Array<PropertyTypeWhereInput>;

    @Field(() => [PropertyTypeWhereInput], {nullable:true})
    OR?: Array<PropertyTypeWhereInput>;

    @Field(() => [PropertyTypeWhereInput], {nullable:true})
    NOT?: Array<PropertyTypeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @HideField()
    Property?: PropertyListRelationFilter;
}
