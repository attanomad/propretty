import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LeaseCountAggregate } from './lease-count-aggregate.output';
import { LeaseAvgAggregate } from './lease-avg-aggregate.output';
import { LeaseSumAggregate } from './lease-sum-aggregate.output';
import { LeaseMinAggregate } from './lease-min-aggregate.output';
import { LeaseMaxAggregate } from './lease-max-aggregate.output';

@ObjectType()
export class AggregateLease {

    @Field(() => LeaseCountAggregate, {nullable:true})
    _count?: LeaseCountAggregate;

    @Field(() => LeaseAvgAggregate, {nullable:true})
    _avg?: LeaseAvgAggregate;

    @Field(() => LeaseSumAggregate, {nullable:true})
    _sum?: LeaseSumAggregate;

    @Field(() => LeaseMinAggregate, {nullable:true})
    _min?: LeaseMinAggregate;

    @Field(() => LeaseMaxAggregate, {nullable:true})
    _max?: LeaseMaxAggregate;
}
