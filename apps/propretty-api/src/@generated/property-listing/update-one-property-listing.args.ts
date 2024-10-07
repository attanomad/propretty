import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyListingUpdateInput } from './property-listing-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PropertyListingWhereUniqueInput } from './property-listing-where-unique.input';

@ArgsType()
export class UpdateOnePropertyListingArgs {

    @Field(() => PropertyListingUpdateInput, {nullable:false})
    @Type(() => PropertyListingUpdateInput)
    data!: PropertyListingUpdateInput;

    @Field(() => PropertyListingWhereUniqueInput, {nullable:false})
    @Type(() => PropertyListingWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyListingWhereUniqueInput, 'id'>;
}
