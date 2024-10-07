import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PropertyListingCountOrderByAggregateInput } from './property-listing-count-order-by-aggregate.input';
import { PropertyListingMaxOrderByAggregateInput } from './property-listing-max-order-by-aggregate.input';
import { PropertyListingMinOrderByAggregateInput } from './property-listing-min-order-by-aggregate.input';

@InputType()
export class PropertyListingOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    propertyId?: keyof typeof SortOrder;

    @Field(() => PropertyListingCountOrderByAggregateInput, {nullable:true})
    _count?: PropertyListingCountOrderByAggregateInput;

    @Field(() => PropertyListingMaxOrderByAggregateInput, {nullable:true})
    _max?: PropertyListingMaxOrderByAggregateInput;

    @Field(() => PropertyListingMinOrderByAggregateInput, {nullable:true})
    _min?: PropertyListingMinOrderByAggregateInput;
}
