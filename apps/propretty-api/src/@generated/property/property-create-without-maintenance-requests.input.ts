import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyStatus } from '../prisma/property-status.enum';
import { PropertyCommercialStatus } from '../prisma/property-commercial-status.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { PropertyFurnishing } from '../prisma/property-furnishing.enum';
import { FileCreateNestedManyWithoutPropertyInput } from '../file/file-create-nested-many-without-property.input';
import { PriceCreateNestedManyWithoutPropertyInput } from '../price/price-create-nested-many-without-property.input';
import { LocationCreateNestedOneWithoutPropertyInput } from '../location/location-create-nested-one-without-property.input';
import { PropertyTypeCreateNestedOneWithoutPropertyInput } from '../property-type/property-type-create-nested-one-without-property.input';
import { PropertyAmenityCreateNestedManyWithoutPropertiesInput } from '../property-amenity/property-amenity-create-nested-many-without-properties.input';
import { PropertyOwnerCreateNestedOneWithoutPropertiesInput } from '../property-owner/property-owner-create-nested-one-without-properties.input';
import { PropertyListingCreateNestedManyWithoutPropertyInput } from '../property-listing/property-listing-create-nested-many-without-property.input';
import { UserCreateNestedManyWithoutAssignedPropertiesInput } from '../user/user-create-nested-many-without-assigned-properties.input';
import { LeaseCreateNestedManyWithoutPropertyInput } from '../lease/lease-create-nested-many-without-property.input';

@InputType()
export class PropertyCreateWithoutMaintenanceRequestsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => PropertyStatus, {nullable:false})
    status!: keyof typeof PropertyStatus;

    @Field(() => PropertyCommercialStatus, {nullable:true})
    commercialStatus?: keyof typeof PropertyCommercialStatus;

    @Field(() => String, {nullable:true})
    uniqueCode?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    floorSize?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    landSize?: Decimal;

    @Field(() => PropertyFurnishing, {nullable:true})
    furnishing?: keyof typeof PropertyFurnishing;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FileCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => FileCreateNestedManyWithoutPropertyInput)
    mediaList?: FileCreateNestedManyWithoutPropertyInput;

    @Field(() => PriceCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PriceCreateNestedManyWithoutPropertyInput)
    priceList?: PriceCreateNestedManyWithoutPropertyInput;

    @Field(() => LocationCreateNestedOneWithoutPropertyInput, {nullable:true})
    @Type(() => LocationCreateNestedOneWithoutPropertyInput)
    location?: LocationCreateNestedOneWithoutPropertyInput;

    @Field(() => PropertyTypeCreateNestedOneWithoutPropertyInput, {nullable:false})
    @Type(() => PropertyTypeCreateNestedOneWithoutPropertyInput)
    type!: PropertyTypeCreateNestedOneWithoutPropertyInput;

    @Field(() => PropertyAmenityCreateNestedManyWithoutPropertiesInput, {nullable:true})
    @Type(() => PropertyAmenityCreateNestedManyWithoutPropertiesInput)
    amenities?: PropertyAmenityCreateNestedManyWithoutPropertiesInput;

    @Field(() => PropertyOwnerCreateNestedOneWithoutPropertiesInput, {nullable:true})
    @Type(() => PropertyOwnerCreateNestedOneWithoutPropertiesInput)
    PropertyOwner?: PropertyOwnerCreateNestedOneWithoutPropertiesInput;

    @Field(() => PropertyListingCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PropertyListingCreateNestedManyWithoutPropertyInput)
    PropertyListing?: PropertyListingCreateNestedManyWithoutPropertyInput;

    @Field(() => UserCreateNestedManyWithoutAssignedPropertiesInput, {nullable:true})
    @Type(() => UserCreateNestedManyWithoutAssignedPropertiesInput)
    assignedAgents?: UserCreateNestedManyWithoutAssignedPropertiesInput;

    @Field(() => LeaseCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => LeaseCreateNestedManyWithoutPropertyInput)
    leases?: LeaseCreateNestedManyWithoutPropertyInput;
}
