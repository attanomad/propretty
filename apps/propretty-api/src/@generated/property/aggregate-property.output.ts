import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PropertyCountAggregate } from './property-count-aggregate.output';
import { PropertyAvgAggregate } from './property-avg-aggregate.output';
import { PropertySumAggregate } from './property-sum-aggregate.output';
import { PropertyMinAggregate } from './property-min-aggregate.output';
import { PropertyMaxAggregate } from './property-max-aggregate.output';

@ObjectType()
export class AggregateProperty {

    @Field(() => PropertyCountAggregate, {nullable:true})
    _count?: PropertyCountAggregate;

    @Field(() => PropertyAvgAggregate, {nullable:true})
    _avg?: PropertyAvgAggregate;

    @Field(() => PropertySumAggregate, {nullable:true})
    _sum?: PropertySumAggregate;

    @Field(() => PropertyMinAggregate, {nullable:true})
    _min?: PropertyMinAggregate;

    @Field(() => PropertyMaxAggregate, {nullable:true})
    _max?: PropertyMaxAggregate;
}
