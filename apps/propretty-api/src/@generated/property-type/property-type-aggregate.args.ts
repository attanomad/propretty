import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyTypeWhereInput } from './property-type-where.input';
import { Type } from 'class-transformer';
import { PropertyTypeOrderByWithRelationInput } from './property-type-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PropertyTypeWhereUniqueInput } from './property-type-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PropertyTypeCountAggregateInput } from './property-type-count-aggregate.input';
import { PropertyTypeMinAggregateInput } from './property-type-min-aggregate.input';
import { PropertyTypeMaxAggregateInput } from './property-type-max-aggregate.input';

@ArgsType()
export class PropertyTypeAggregateArgs {

    @Field(() => PropertyTypeWhereInput, {nullable:true})
    @Type(() => PropertyTypeWhereInput)
    where?: PropertyTypeWhereInput;

    @Field(() => [PropertyTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PropertyTypeOrderByWithRelationInput>;

    @Field(() => PropertyTypeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PropertyTypeWhereUniqueInput, 'id' | 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PropertyTypeCountAggregateInput, {nullable:true})
    _count?: PropertyTypeCountAggregateInput;

    @Field(() => PropertyTypeMinAggregateInput, {nullable:true})
    _min?: PropertyTypeMinAggregateInput;

    @Field(() => PropertyTypeMaxAggregateInput, {nullable:true})
    _max?: PropertyTypeMaxAggregateInput;
}
