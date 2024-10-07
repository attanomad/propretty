import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PropertyOwnerCountAggregate } from './property-owner-count-aggregate.output';
import { PropertyOwnerMinAggregate } from './property-owner-min-aggregate.output';
import { PropertyOwnerMaxAggregate } from './property-owner-max-aggregate.output';

@ObjectType()
export class AggregatePropertyOwner {

    @Field(() => PropertyOwnerCountAggregate, {nullable:true})
    _count?: PropertyOwnerCountAggregate;

    @Field(() => PropertyOwnerMinAggregate, {nullable:true})
    _min?: PropertyOwnerMinAggregate;

    @Field(() => PropertyOwnerMaxAggregate, {nullable:true})
    _max?: PropertyOwnerMaxAggregate;
}
