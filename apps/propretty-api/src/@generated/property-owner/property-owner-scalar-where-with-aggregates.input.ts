import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class PropertyOwnerScalarWhereWithAggregatesInput {

    @Field(() => [PropertyOwnerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PropertyOwnerScalarWhereWithAggregatesInput>;

    @Field(() => [PropertyOwnerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PropertyOwnerScalarWhereWithAggregatesInput>;

    @Field(() => [PropertyOwnerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PropertyOwnerScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    firstName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    lastName?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    profilePictureUrl?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    dob?: DateTimeNullableWithAggregatesFilter;
}
