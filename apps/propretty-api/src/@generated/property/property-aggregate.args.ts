import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyWhereInput } from './property-where.input';
import { Type } from 'class-transformer';
import { PropertyOrderByWithRelationInput } from './property-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PropertyCountAggregateInput } from './property-count-aggregate.input';
import { PropertyAvgAggregateInput } from './property-avg-aggregate.input';
import { PropertySumAggregateInput } from './property-sum-aggregate.input';
import { PropertyMinAggregateInput } from './property-min-aggregate.input';
import { PropertyMaxAggregateInput } from './property-max-aggregate.input';

@ArgsType()
export class PropertyAggregateArgs {

    @Field(() => PropertyWhereInput, {nullable:true})
    @Type(() => PropertyWhereInput)
    where?: PropertyWhereInput;

    @Field(() => [PropertyOrderByWithRelationInput], {nullable:true})
    @Type(() => PropertyOrderByWithRelationInput)
    orderBy?: Array<PropertyOrderByWithRelationInput>;

    @Field(() => PropertyWhereUniqueInput, {nullable:true})
    @Type(() => PropertyWhereUniqueInput)
    cursor?: Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PropertyCountAggregateInput, {nullable:true})
    @Type(() => PropertyCountAggregateInput)
    _count?: PropertyCountAggregateInput;

    @Field(() => PropertyAvgAggregateInput, {nullable:true})
    @Type(() => PropertyAvgAggregateInput)
    _avg?: PropertyAvgAggregateInput;

    @Field(() => PropertySumAggregateInput, {nullable:true})
    @Type(() => PropertySumAggregateInput)
    _sum?: PropertySumAggregateInput;

    @Field(() => PropertyMinAggregateInput, {nullable:true})
    @Type(() => PropertyMinAggregateInput)
    _min?: PropertyMinAggregateInput;

    @Field(() => PropertyMaxAggregateInput, {nullable:true})
    @Type(() => PropertyMaxAggregateInput)
    _max?: PropertyMaxAggregateInput;
}
