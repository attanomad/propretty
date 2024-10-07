import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyListingWhereUniqueInput } from './property-listing-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyListingCreateWithoutPropertyInput } from './property-listing-create-without-property.input';

@InputType()
export class PropertyListingCreateOrConnectWithoutPropertyInput {

    @Field(() => PropertyListingWhereUniqueInput, {nullable:false})
    @Type(() => PropertyListingWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyListingWhereUniqueInput, 'id'>;

    @Field(() => PropertyListingCreateWithoutPropertyInput, {nullable:false})
    @Type(() => PropertyListingCreateWithoutPropertyInput)
    create!: PropertyListingCreateWithoutPropertyInput;
}
