import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PropertyListingCountAggregate } from './property-listing-count-aggregate.output';
import { PropertyListingMinAggregate } from './property-listing-min-aggregate.output';
import { PropertyListingMaxAggregate } from './property-listing-max-aggregate.output';

@ObjectType()
export class AggregatePropertyListing {

    @Field(() => PropertyListingCountAggregate, {nullable:true})
    _count?: PropertyListingCountAggregate;

    @Field(() => PropertyListingMinAggregate, {nullable:true})
    _min?: PropertyListingMinAggregate;

    @Field(() => PropertyListingMaxAggregate, {nullable:true})
    _max?: PropertyListingMaxAggregate;
}
