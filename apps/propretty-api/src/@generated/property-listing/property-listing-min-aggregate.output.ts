import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PropertyListingStatus } from '../prisma/property-listing-status.enum';
import { PropertyListingType } from '../prisma/property-listing-type.enum';

@ObjectType()
export class PropertyListingMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => PropertyListingStatus, {nullable:true})
    status?: keyof typeof PropertyListingStatus;

    @Field(() => PropertyListingType, {nullable:true})
    type?: keyof typeof PropertyListingType;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    propertyId?: string;
}
