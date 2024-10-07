import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyCreateWithoutPropertyListingInput } from './property-create-without-property-listing.input';

@InputType()
export class PropertyCreateOrConnectWithoutPropertyListingInput {

    @Field(() => PropertyWhereUniqueInput, {nullable:false})
    @Type(() => PropertyWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>;

    @Field(() => PropertyCreateWithoutPropertyListingInput, {nullable:false})
    @Type(() => PropertyCreateWithoutPropertyListingInput)
    create!: PropertyCreateWithoutPropertyListingInput;
}
