import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyListingWhereUniqueInput } from './property-listing-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePropertyListingOrThrowArgs {

    @Field(() => PropertyListingWhereUniqueInput, {nullable:false})
    @Type(() => PropertyListingWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyListingWhereUniqueInput, 'id'>;
}
