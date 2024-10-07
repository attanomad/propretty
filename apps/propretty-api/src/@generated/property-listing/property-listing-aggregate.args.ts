import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyListingWhereInput } from './property-listing-where.input';
import { Type } from 'class-transformer';
import { PropertyListingOrderByWithRelationInput } from './property-listing-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PropertyListingWhereUniqueInput } from './property-listing-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PropertyListingCountAggregateInput } from './property-listing-count-aggregate.input';
import { PropertyListingMinAggregateInput } from './property-listing-min-aggregate.input';
import { PropertyListingMaxAggregateInput } from './property-listing-max-aggregate.input';

@ArgsType()
export class PropertyListingAggregateArgs {

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

    @Field(() => PropertyListingCountAggregateInput, {nullable:true})
    _count?: PropertyListingCountAggregateInput;

    @Field(() => PropertyListingMinAggregateInput, {nullable:true})
    _min?: PropertyListingMinAggregateInput;

    @Field(() => PropertyListingMaxAggregateInput, {nullable:true})
    _max?: PropertyListingMaxAggregateInput;
}
