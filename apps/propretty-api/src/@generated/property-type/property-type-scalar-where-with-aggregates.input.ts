import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class PropertyTypeScalarWhereWithAggregatesInput {

    @Field(() => [PropertyTypeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PropertyTypeScalarWhereWithAggregatesInput>;

    @Field(() => [PropertyTypeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PropertyTypeScalarWhereWithAggregatesInput>;

    @Field(() => [PropertyTypeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PropertyTypeScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;
}
