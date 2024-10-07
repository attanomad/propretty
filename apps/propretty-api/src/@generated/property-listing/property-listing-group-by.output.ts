import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PropertyListingStatus } from '../prisma/property-listing-status.enum';
import { PropertyListingType } from '../prisma/property-listing-type.enum';
import { PropertyListingCountAggregate } from './property-listing-count-aggregate.output';
import { PropertyListingMinAggregate } from './property-listing-min-aggregate.output';
import { PropertyListingMaxAggregate } from './property-listing-max-aggregate.output';

@ObjectType()
export class PropertyListingGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => PropertyListingStatus, {nullable:false})
    status!: keyof typeof PropertyListingStatus;

    @Field(() => PropertyListingType, {nullable:false})
    type!: keyof typeof PropertyListingType;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    propertyId!: string;

    @Field(() => PropertyListingCountAggregate, {nullable:true})
    _count?: PropertyListingCountAggregate;

    @Field(() => PropertyListingMinAggregate, {nullable:true})
    _min?: PropertyListingMinAggregate;

    @Field(() => PropertyListingMaxAggregate, {nullable:true})
    _max?: PropertyListingMaxAggregate;
}
