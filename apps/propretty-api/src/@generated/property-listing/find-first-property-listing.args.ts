import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyListingWhereInput } from './property-listing-where.input';
import { Type } from 'class-transformer';
import { PropertyListingOrderByWithRelationInput } from './property-listing-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PropertyListingWhereUniqueInput } from './property-listing-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PropertyListingScalarFieldEnum } from './property-listing-scalar-field.enum';

@ArgsType()
export class FindFirstPropertyListingArgs {

    @Field(() => PropertyListingWhereInput, {nullable:true})
    @Type(() => PropertyListingWhereInput)
    where?: PropertyListingWhereInput;

    @Field(() => [PropertyListingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PropertyListingOrderByWithRelationInput>;

    @Field(() => PropertyListingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PropertyListingWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PropertyListingScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PropertyListingScalarFieldEnum>;
}
