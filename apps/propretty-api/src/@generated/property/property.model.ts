import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PropertyStatus } from '../prisma/property-status.enum';
import { PropertyCommercialStatus } from '../prisma/property-commercial-status.enum';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { PropertyFurnishing } from '../prisma/property-furnishing.enum';
import { File } from '../file/file.model';
import { Price } from '../price/price.model';
import { Location } from '../location/location.model';
import { PropertyType } from '../property-type/property-type.model';
import { PropertyAmenity } from '../property-amenity/property-amenity.model';
import { PropertyOwner } from '../property-owner/property-owner.model';
import { PropertyListing } from '../property-listing/property-listing.model';
import { User } from '../user/user.model';
import { Lease } from '../lease/lease.model';
import { PropertyMaintenanceRequest } from '../property-maintenance-request/property-maintenance-request.model';
import { PropertyCount } from './property-count.output';

@ObjectType('PropertyGenerated', {})
export class Property {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => PropertyStatus, {nullable:false})
    status!: keyof typeof PropertyStatus;

    @Field(() => PropertyCommercialStatus, {nullable:false,defaultValue:'AVAILABLE'})
    commercialStatus!: keyof typeof PropertyCommercialStatus;

    @Field(() => String, {nullable:true})
    uniqueCode!: string | null;

    @Field(() => GraphQLDecimal, {nullable:true})
    floorSize!: Decimal | null;

    @Field(() => GraphQLDecimal, {nullable:true})
    landSize!: Decimal | null;

    @Field(() => PropertyFurnishing, {nullable:true})
    furnishing!: keyof typeof PropertyFurnishing | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    typeId!: string;

    @Field(() => String, {nullable:true})
    locationId!: string | null;

    @Field(() => String, {nullable:true})
    propertyOwnerId!: string | null;

    @Field(() => [File], {nullable:true})
    mediaList?: Array<File>;

    @Field(() => [Price], {nullable:true})
    priceList?: Array<Price>;

    @Field(() => Location, {nullable:true})
    location?: Location | null;

    @Field(() => PropertyType, {nullable:false})
    type?: PropertyType;

    @Field(() => [PropertyAmenity], {nullable:true})
    amenities?: Array<PropertyAmenity>;

    @Field(() => PropertyOwner, {nullable:true})
    PropertyOwner?: PropertyOwner | null;

    @Field(() => [PropertyListing], {nullable:true})
    PropertyListing?: Array<PropertyListing>;

    @Field(() => [User], {nullable:true})
    assignedAgents?: Array<User>;

    @Field(() => [Lease], {nullable:true})
    leases?: Array<Lease>;

    @Field(() => [PropertyMaintenanceRequest], {nullable:true})
    maintenanceRequests?: Array<PropertyMaintenanceRequest>;

    @Field(() => PropertyCount, {nullable:false})
    _count?: PropertyCount;
}
