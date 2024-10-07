import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PropertyOwnerCountAggregate } from './property-owner-count-aggregate.output';
import { PropertyOwnerMinAggregate } from './property-owner-min-aggregate.output';
import { PropertyOwnerMaxAggregate } from './property-owner-max-aggregate.output';

@ObjectType()
export class PropertyOwnerGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:true})
    profilePictureUrl?: string;

    @Field(() => Date, {nullable:true})
    dob?: Date | string;

    @Field(() => PropertyOwnerCountAggregate, {nullable:true})
    _count?: PropertyOwnerCountAggregate;

    @Field(() => PropertyOwnerMinAggregate, {nullable:true})
    _min?: PropertyOwnerMinAggregate;

    @Field(() => PropertyOwnerMaxAggregate, {nullable:true})
    _max?: PropertyOwnerMaxAggregate;
}
