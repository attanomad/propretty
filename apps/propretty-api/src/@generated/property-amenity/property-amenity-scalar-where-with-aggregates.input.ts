import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class PropertyAmenityScalarWhereWithAggregatesInput {

    @Field(() => [PropertyAmenityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PropertyAmenityScalarWhereWithAggregatesInput>;

    @Field(() => [PropertyAmenityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PropertyAmenityScalarWhereWithAggregatesInput>;

    @Field(() => [PropertyAmenityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PropertyAmenityScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeWithAggregatesFilter;
}
