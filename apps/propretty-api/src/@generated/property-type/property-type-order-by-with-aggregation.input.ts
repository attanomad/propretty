import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PropertyTypeCountOrderByAggregateInput } from './property-type-count-order-by-aggregate.input';
import { PropertyTypeMaxOrderByAggregateInput } from './property-type-max-order-by-aggregate.input';
import { PropertyTypeMinOrderByAggregateInput } from './property-type-min-order-by-aggregate.input';

@InputType()
export class PropertyTypeOrderByWithAggregationInput {

    @HideField()
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => PropertyTypeCountOrderByAggregateInput, {nullable:true})
    _count?: PropertyTypeCountOrderByAggregateInput;

    @Field(() => PropertyTypeMaxOrderByAggregateInput, {nullable:true})
    _max?: PropertyTypeMaxOrderByAggregateInput;

    @Field(() => PropertyTypeMinOrderByAggregateInput, {nullable:true})
    _min?: PropertyTypeMinOrderByAggregateInput;
}
