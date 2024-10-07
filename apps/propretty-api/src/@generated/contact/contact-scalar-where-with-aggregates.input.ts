import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ContactScalarWhereWithAggregatesInput {

    @Field(() => [ContactScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ContactScalarWhereWithAggregatesInput>;

    @Field(() => [ContactScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ContactScalarWhereWithAggregatesInput>;

    @Field(() => [ContactScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ContactScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
