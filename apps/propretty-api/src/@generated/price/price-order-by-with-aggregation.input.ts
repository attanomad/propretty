import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PriceCountOrderByAggregateInput } from './price-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { PriceAvgOrderByAggregateInput } from './price-avg-order-by-aggregate.input';
import { PriceMaxOrderByAggregateInput } from './price-max-order-by-aggregate.input';
import { PriceMinOrderByAggregateInput } from './price-min-order-by-aggregate.input';
import { PriceSumOrderByAggregateInput } from './price-sum-order-by-aggregate.input';

@InputType()
export class PriceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    propertyId?: keyof typeof SortOrder;

    @Field(() => PriceCountOrderByAggregateInput, {nullable:true})
    @Type(() => PriceCountOrderByAggregateInput)
    _count?: PriceCountOrderByAggregateInput;

    @Field(() => PriceAvgOrderByAggregateInput, {nullable:true})
    @Type(() => PriceAvgOrderByAggregateInput)
    _avg?: PriceAvgOrderByAggregateInput;

    @Field(() => PriceMaxOrderByAggregateInput, {nullable:true})
    @Type(() => PriceMaxOrderByAggregateInput)
    _max?: PriceMaxOrderByAggregateInput;

    @Field(() => PriceMinOrderByAggregateInput, {nullable:true})
    @Type(() => PriceMinOrderByAggregateInput)
    _min?: PriceMinOrderByAggregateInput;

    @Field(() => PriceSumOrderByAggregateInput, {nullable:true})
    @Type(() => PriceSumOrderByAggregateInput)
    _sum?: PriceSumOrderByAggregateInput;
}
