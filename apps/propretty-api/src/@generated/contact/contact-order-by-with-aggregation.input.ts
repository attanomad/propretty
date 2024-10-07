import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ContactCountOrderByAggregateInput } from './contact-count-order-by-aggregate.input';
import { ContactMaxOrderByAggregateInput } from './contact-max-order-by-aggregate.input';
import { ContactMinOrderByAggregateInput } from './contact-min-order-by-aggregate.input';

@InputType()
export class ContactOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ContactCountOrderByAggregateInput, {nullable:true})
    _count?: ContactCountOrderByAggregateInput;

    @Field(() => ContactMaxOrderByAggregateInput, {nullable:true})
    _max?: ContactMaxOrderByAggregateInput;

    @Field(() => ContactMinOrderByAggregateInput, {nullable:true})
    _min?: ContactMinOrderByAggregateInput;
}
