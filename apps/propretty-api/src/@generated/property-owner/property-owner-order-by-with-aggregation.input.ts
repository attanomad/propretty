import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PropertyOwnerCountOrderByAggregateInput } from './property-owner-count-order-by-aggregate.input';
import { PropertyOwnerMaxOrderByAggregateInput } from './property-owner-max-order-by-aggregate.input';
import { PropertyOwnerMinOrderByAggregateInput } from './property-owner-min-order-by-aggregate.input';

@InputType()
export class PropertyOwnerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    profilePictureUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    dob?: SortOrderInput;

    @Field(() => PropertyOwnerCountOrderByAggregateInput, {nullable:true})
    _count?: PropertyOwnerCountOrderByAggregateInput;

    @Field(() => PropertyOwnerMaxOrderByAggregateInput, {nullable:true})
    _max?: PropertyOwnerMaxOrderByAggregateInput;

    @Field(() => PropertyOwnerMinOrderByAggregateInput, {nullable:true})
    _min?: PropertyOwnerMinOrderByAggregateInput;
}
