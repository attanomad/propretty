import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { LocationCountOrderByAggregateInput } from './location-count-order-by-aggregate.input';
import { LocationAvgOrderByAggregateInput } from './location-avg-order-by-aggregate.input';
import { LocationMaxOrderByAggregateInput } from './location-max-order-by-aggregate.input';
import { LocationMinOrderByAggregateInput } from './location-min-order-by-aggregate.input';
import { LocationSumOrderByAggregateInput } from './location-sum-order-by-aggregate.input';

@InputType()
export class LocationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    address?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    subdistrict?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    district?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    province?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    country?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    postalCode?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    latitude?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    longitude?: SortOrderInput;

    @Field(() => LocationCountOrderByAggregateInput, {nullable:true})
    @Type(() => LocationCountOrderByAggregateInput)
    _count?: LocationCountOrderByAggregateInput;

    @Field(() => LocationAvgOrderByAggregateInput, {nullable:true})
    @Type(() => LocationAvgOrderByAggregateInput)
    _avg?: LocationAvgOrderByAggregateInput;

    @Field(() => LocationMaxOrderByAggregateInput, {nullable:true})
    @Type(() => LocationMaxOrderByAggregateInput)
    _max?: LocationMaxOrderByAggregateInput;

    @Field(() => LocationMinOrderByAggregateInput, {nullable:true})
    @Type(() => LocationMinOrderByAggregateInput)
    _min?: LocationMinOrderByAggregateInput;

    @Field(() => LocationSumOrderByAggregateInput, {nullable:true})
    @Type(() => LocationSumOrderByAggregateInput)
    _sum?: LocationSumOrderByAggregateInput;
}
