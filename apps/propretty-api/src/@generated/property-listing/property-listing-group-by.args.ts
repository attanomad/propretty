import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyListingWhereInput } from './property-listing-where.input';
import { Type } from 'class-transformer';
import { PropertyListingOrderByWithAggregationInput } from './property-listing-order-by-with-aggregation.input';
import { PropertyListingScalarFieldEnum } from './property-listing-scalar-field.enum';
import { PropertyListingScalarWhereWithAggregatesInput } from './property-listing-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PropertyListingCountAggregateInput } from './property-listing-count-aggregate.input';
import { PropertyListingMinAggregateInput } from './property-listing-min-aggregate.input';
import { PropertyListingMaxAggregateInput } from './property-listing-max-aggregate.input';

@ArgsType()
export class PropertyListingGroupByArgs {

    @Field(() => PropertyListingWhereInput, {nullable:true})
    @Type(() => PropertyListingWhereInput)
    where?: PropertyListingWhereInput;

    @Field(() => [PropertyListingOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PropertyListingOrderByWithAggregationInput>;

    @Field(() => [PropertyListingScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PropertyListingScalarFieldEnum>;

    @Field(() => PropertyListingScalarWhereWithAggregatesInput, {nullable:true})
    having?: PropertyListingScalarWhereWithAggregatesInput;

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
