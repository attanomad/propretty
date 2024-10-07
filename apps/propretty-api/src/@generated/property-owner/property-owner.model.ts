import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Property } from '../property/property.model';
import { PropertyOwnerCount } from './property-owner-count.output';

@ObjectType()
export class PropertyOwner {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:true})
    profilePictureUrl!: string | null;

    @Field(() => Date, {nullable:true})
    dob!: Date | null;

    @Field(() => [Property], {nullable:true})
    properties?: Array<Property>;

    @Field(() => PropertyOwnerCount, {nullable:false})
    _count?: PropertyOwnerCount;
}
