import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PriceWhereInput } from './price-where.input';
import { Type } from 'class-transformer';
import { PriceOrderByWithAggregationInput } from './price-order-by-with-aggregation.input';
import { PriceScalarFieldEnum } from './price-scalar-field.enum';
import { PriceScalarWhereWithAggregatesInput } from './price-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PriceCountAggregateInput } from './price-count-aggregate.input';
import { PriceAvgAggregateInput } from './price-avg-aggregate.input';
import { PriceSumAggregateInput } from './price-sum-aggregate.input';
import { PriceMinAggregateInput } from './price-min-aggregate.input';
import { PriceMaxAggregateInput } from './price-max-aggregate.input';

@ArgsType()
export class PriceGroupByArgs {

    @Field(() => PriceWhereInput, {nullable:true})
    @Type(() => PriceWhereInput)
    where?: PriceWhereInput;

    @Field(() => [PriceOrderByWithAggregationInput], {nullable:true})
    @Type(() => PriceOrderByWithAggregationInput)
    orderBy?: Array<PriceOrderByWithAggregationInput>;

    @Field(() => [PriceScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PriceScalarFieldEnum>;

    @Field(() => PriceScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => PriceScalarWhereWithAggregatesInput)
    having?: PriceScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PriceCountAggregateInput, {nullable:true})
    @Type(() => PriceCountAggregateInput)
    _count?: PriceCountAggregateInput;

    @Field(() => PriceAvgAggregateInput, {nullable:true})
    @Type(() => PriceAvgAggregateInput)
    _avg?: PriceAvgAggregateInput;

    @Field(() => PriceSumAggregateInput, {nullable:true})
    @Type(() => PriceSumAggregateInput)
    _sum?: PriceSumAggregateInput;

    @Field(() => PriceMinAggregateInput, {nullable:true})
    @Type(() => PriceMinAggregateInput)
    _min?: PriceMinAggregateInput;

    @Field(() => PriceMaxAggregateInput, {nullable:true})
    @Type(() => PriceMaxAggregateInput)
    _max?: PriceMaxAggregateInput;
}
