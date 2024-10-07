import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyListingStatus } from '../prisma/property-listing-status.enum';
import { PropertyListingType } from '../prisma/property-listing-type.enum';
import { PropertyCreateNestedOneWithoutPropertyListingInput } from '../property/property-create-nested-one-without-property-listing.input';
import { Type } from 'class-transformer';

@InputType()
export class PropertyListingCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => PropertyListingStatus, {nullable:false})
    status!: keyof typeof PropertyListingStatus;

    @Field(() => PropertyListingType, {nullable:false})
    type!: keyof typeof PropertyListingType;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PropertyCreateNestedOneWithoutPropertyListingInput, {nullable:false})
    @Type(() => PropertyCreateNestedOneWithoutPropertyListingInput)
    property!: PropertyCreateNestedOneWithoutPropertyListingInput;
}
