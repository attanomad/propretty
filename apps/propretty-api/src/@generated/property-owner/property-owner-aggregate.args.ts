import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyOwnerWhereInput } from './property-owner-where.input';
import { Type } from 'class-transformer';
import { PropertyOwnerOrderByWithRelationInput } from './property-owner-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PropertyOwnerWhereUniqueInput } from './property-owner-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PropertyOwnerCountAggregateInput } from './property-owner-count-aggregate.input';
import { PropertyOwnerMinAggregateInput } from './property-owner-min-aggregate.input';
import { PropertyOwnerMaxAggregateInput } from './property-owner-max-aggregate.input';

@ArgsType()
export class PropertyOwnerAggregateArgs {

    @Field(() => PropertyOwnerWhereInput, {nullable:true})
    @Type(() => PropertyOwnerWhereInput)
    where?: PropertyOwnerWhereInput;

    @Field(() => [PropertyOwnerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PropertyOwnerOrderByWithRelationInput>;

    @Field(() => PropertyOwnerWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PropertyOwnerWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PropertyOwnerCountAggregateInput, {nullable:true})
    _count?: PropertyOwnerCountAggregateInput;

    @Field(() => PropertyOwnerMinAggregateInput, {nullable:true})
    _min?: PropertyOwnerMinAggregateInput;

    @Field(() => PropertyOwnerMaxAggregateInput, {nullable:true})
    _max?: PropertyOwnerMaxAggregateInput;
}
