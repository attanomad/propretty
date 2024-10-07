import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { HideField } from '@nestjs/graphql';
import { PropertyAmenityCountOrderByAggregateInput } from './property-amenity-count-order-by-aggregate.input';
import { PropertyAmenityMaxOrderByAggregateInput } from './property-amenity-max-order-by-aggregate.input';
import { PropertyAmenityMinOrderByAggregateInput } from './property-amenity-min-order-by-aggregate.input';

@InputType()
export class PropertyAmenityOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PropertyAmenityCountOrderByAggregateInput, {nullable:true})
    _count?: PropertyAmenityCountOrderByAggregateInput;

    @Field(() => PropertyAmenityMaxOrderByAggregateInput, {nullable:true})
    _max?: PropertyAmenityMaxOrderByAggregateInput;

    @Field(() => PropertyAmenityMinOrderByAggregateInput, {nullable:true})
    _min?: PropertyAmenityMinOrderByAggregateInput;
}
