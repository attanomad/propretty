import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationWhereInput } from './location-where.input';
import { Type } from 'class-transformer';
import { LocationOrderByWithRelationInput } from './location-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { LocationWhereUniqueInput } from './location-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LocationCountAggregateInput } from './location-count-aggregate.input';
import { LocationAvgAggregateInput } from './location-avg-aggregate.input';
import { LocationSumAggregateInput } from './location-sum-aggregate.input';
import { LocationMinAggregateInput } from './location-min-aggregate.input';
import { LocationMaxAggregateInput } from './location-max-aggregate.input';

@ArgsType()
export class LocationAggregateArgs {

    @Field(() => LocationWhereInput, {nullable:true})
    @Type(() => LocationWhereInput)
    where?: LocationWhereInput;

    @Field(() => [LocationOrderByWithRelationInput], {nullable:true})
    @Type(() => LocationOrderByWithRelationInput)
    orderBy?: Array<LocationOrderByWithRelationInput>;

    @Field(() => LocationWhereUniqueInput, {nullable:true})
    @Type(() => LocationWhereUniqueInput)
    cursor?: Prisma.AtLeast<LocationWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LocationCountAggregateInput, {nullable:true})
    @Type(() => LocationCountAggregateInput)
    _count?: LocationCountAggregateInput;

    @Field(() => LocationAvgAggregateInput, {nullable:true})
    @Type(() => LocationAvgAggregateInput)
    _avg?: LocationAvgAggregateInput;

    @Field(() => LocationSumAggregateInput, {nullable:true})
    @Type(() => LocationSumAggregateInput)
    _sum?: LocationSumAggregateInput;

    @Field(() => LocationMinAggregateInput, {nullable:true})
    @Type(() => LocationMinAggregateInput)
    _min?: LocationMinAggregateInput;

    @Field(() => LocationMaxAggregateInput, {nullable:true})
    @Type(() => LocationMaxAggregateInput)
    _max?: LocationMaxAggregateInput;
}
