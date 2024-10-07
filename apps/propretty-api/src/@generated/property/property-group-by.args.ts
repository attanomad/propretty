import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyWhereInput } from './property-where.input';
import { Type } from 'class-transformer';
import { PropertyOrderByWithAggregationInput } from './property-order-by-with-aggregation.input';
import { PropertyScalarFieldEnum } from './property-scalar-field.enum';
import { PropertyScalarWhereWithAggregatesInput } from './property-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PropertyCountAggregateInput } from './property-count-aggregate.input';
import { PropertyAvgAggregateInput } from './property-avg-aggregate.input';
import { PropertySumAggregateInput } from './property-sum-aggregate.input';
import { PropertyMinAggregateInput } from './property-min-aggregate.input';
import { PropertyMaxAggregateInput } from './property-max-aggregate.input';

@ArgsType()
export class PropertyGroupByArgs {

    @Field(() => PropertyWhereInput, {nullable:true})
    @Type(() => PropertyWhereInput)
    where?: PropertyWhereInput;

    @Field(() => [PropertyOrderByWithAggregationInput], {nullable:true})
    @Type(() => PropertyOrderByWithAggregationInput)
    orderBy?: Array<PropertyOrderByWithAggregationInput>;

    @Field(() => [PropertyScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PropertyScalarFieldEnum>;

    @Field(() => PropertyScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => PropertyScalarWhereWithAggregatesInput)
    having?: PropertyScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PropertyCountAggregateInput, {nullable:true})
    @Type(() => PropertyCountAggregateInput)
    _count?: PropertyCountAggregateInput;

    @Field(() => PropertyAvgAggregateInput, {nullable:true})
    @Type(() => PropertyAvgAggregateInput)
    _avg?: PropertyAvgAggregateInput;

    @Field(() => PropertySumAggregateInput, {nullable:true})
    @Type(() => PropertySumAggregateInput)
    _sum?: PropertySumAggregateInput;

    @Field(() => PropertyMinAggregateInput, {nullable:true})
    @Type(() => PropertyMinAggregateInput)
    _min?: PropertyMinAggregateInput;

    @Field(() => PropertyMaxAggregateInput, {nullable:true})
    @Type(() => PropertyMaxAggregateInput)
    _max?: PropertyMaxAggregateInput;
}
