import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyListingWhereUniqueInput } from './property-listing-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyListingCreateInput } from './property-listing-create.input';
import { PropertyListingUpdateInput } from './property-listing-update.input';

@ArgsType()
export class UpsertOnePropertyListingArgs {

    @Field(() => PropertyListingWhereUniqueInput, {nullable:false})
    @Type(() => PropertyListingWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyListingWhereUniqueInput, 'id'>;

    @Field(() => PropertyListingCreateInput, {nullable:false})
    @Type(() => PropertyListingCreateInput)
    create!: PropertyListingCreateInput;

    @Field(() => PropertyListingUpdateInput, {nullable:false})
    @Type(() => PropertyListingUpdateInput)
    update!: PropertyListingUpdateInput;
}
