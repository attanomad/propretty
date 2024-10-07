import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyAmenityWhereInput } from './property-amenity-where.input';
import { Type } from 'class-transformer';
import { PropertyAmenityOrderByWithRelationInput } from './property-amenity-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PropertyAmenityWhereUniqueInput } from './property-amenity-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PropertyAmenityCountAggregateInput } from './property-amenity-count-aggregate.input';
import { PropertyAmenityMinAggregateInput } from './property-amenity-min-aggregate.input';
import { PropertyAmenityMaxAggregateInput } from './property-amenity-max-aggregate.input';

@ArgsType()
export class PropertyAmenityAggregateArgs {

    @Field(() => PropertyAmenityWhereInput, {nullable:true})
    @Type(() => PropertyAmenityWhereInput)
    where?: PropertyAmenityWhereInput;

    @Field(() => [PropertyAmenityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PropertyAmenityOrderByWithRelationInput>;

    @Field(() => PropertyAmenityWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PropertyAmenityWhereUniqueInput, 'id' | 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PropertyAmenityCountAggregateInput, {nullable:true})
    _count?: PropertyAmenityCountAggregateInput;

    @Field(() => PropertyAmenityMinAggregateInput, {nullable:true})
    _min?: PropertyAmenityMinAggregateInput;

    @Field(() => PropertyAmenityMaxAggregateInput, {nullable:true})
    _max?: PropertyAmenityMaxAggregateInput;
}
