import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LeaseWhereInput } from './lease-where.input';
import { Type } from 'class-transformer';
import { LeaseOrderByWithAggregationInput } from './lease-order-by-with-aggregation.input';
import { LeaseScalarFieldEnum } from './lease-scalar-field.enum';
import { LeaseScalarWhereWithAggregatesInput } from './lease-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { LeaseCountAggregateInput } from './lease-count-aggregate.input';
import { LeaseAvgAggregateInput } from './lease-avg-aggregate.input';
import { LeaseSumAggregateInput } from './lease-sum-aggregate.input';
import { LeaseMinAggregateInput } from './lease-min-aggregate.input';
import { LeaseMaxAggregateInput } from './lease-max-aggregate.input';

@ArgsType()
export class LeaseGroupByArgs {

    @Field(() => LeaseWhereInput, {nullable:true})
    @Type(() => LeaseWhereInput)
    where?: LeaseWhereInput;

    @Field(() => [LeaseOrderByWithAggregationInput], {nullable:true})
    @Type(() => LeaseOrderByWithAggregationInput)
    orderBy?: Array<LeaseOrderByWithAggregationInput>;

    @Field(() => [LeaseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof LeaseScalarFieldEnum>;

    @Field(() => LeaseScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => LeaseScalarWhereWithAggregatesInput)
    having?: LeaseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LeaseCountAggregateInput, {nullable:true})
    @Type(() => LeaseCountAggregateInput)
    _count?: LeaseCountAggregateInput;

    @Field(() => LeaseAvgAggregateInput, {nullable:true})
    @Type(() => LeaseAvgAggregateInput)
    _avg?: LeaseAvgAggregateInput;

    @Field(() => LeaseSumAggregateInput, {nullable:true})
    @Type(() => LeaseSumAggregateInput)
    _sum?: LeaseSumAggregateInput;

    @Field(() => LeaseMinAggregateInput, {nullable:true})
    @Type(() => LeaseMinAggregateInput)
    _min?: LeaseMinAggregateInput;

    @Field(() => LeaseMaxAggregateInput, {nullable:true})
    @Type(() => LeaseMaxAggregateInput)
    _max?: LeaseMaxAggregateInput;
}
