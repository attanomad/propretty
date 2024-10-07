import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyTypeWhereInput } from './property-type-where.input';
import { Type } from 'class-transformer';
import { PropertyTypeOrderByWithAggregationInput } from './property-type-order-by-with-aggregation.input';
import { PropertyTypeScalarFieldEnum } from './property-type-scalar-field.enum';
import { PropertyTypeScalarWhereWithAggregatesInput } from './property-type-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PropertyTypeCountAggregateInput } from './property-type-count-aggregate.input';
import { PropertyTypeMinAggregateInput } from './property-type-min-aggregate.input';
import { PropertyTypeMaxAggregateInput } from './property-type-max-aggregate.input';

@ArgsType()
export class PropertyTypeGroupByArgs {

    @Field(() => PropertyTypeWhereInput, {nullable:true})
    @Type(() => PropertyTypeWhereInput)
    where?: PropertyTypeWhereInput;

    @Field(() => [PropertyTypeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PropertyTypeOrderByWithAggregationInput>;

    @Field(() => [PropertyTypeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PropertyTypeScalarFieldEnum>;

    @Field(() => PropertyTypeScalarWhereWithAggregatesInput, {nullable:true})
    having?: PropertyTypeScalarWhereWithAggregatesInput;

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
