import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PropertyListingStatus } from '../prisma/property-listing-status.enum';
import { PropertyListingType } from '../prisma/property-listing-type.enum';
import { Property } from '../property/property.model';

@ObjectType()
export class PropertyListing {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => PropertyListingStatus, {nullable:false})
    status!: keyof typeof PropertyListingStatus;

    @Field(() => PropertyListingType, {nullable:false})
    type!: keyof typeof PropertyListingType;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    propertyId!: string;

    @Field(() => Property, {nullable:false})
    property?: Property;
}
