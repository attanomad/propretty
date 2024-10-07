import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyAmenityWhereInput } from './property-amenity-where.input';
import { Type } from 'class-transformer';
import { PropertyAmenityOrderByWithAggregationInput } from './property-amenity-order-by-with-aggregation.input';
import { PropertyAmenityScalarFieldEnum } from './property-amenity-scalar-field.enum';
import { PropertyAmenityScalarWhereWithAggregatesInput } from './property-amenity-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PropertyAmenityCountAggregateInput } from './property-amenity-count-aggregate.input';
import { PropertyAmenityMinAggregateInput } from './property-amenity-min-aggregate.input';
import { PropertyAmenityMaxAggregateInput } from './property-amenity-max-aggregate.input';

@ArgsType()
export class PropertyAmenityGroupByArgs {

    @Field(() => PropertyAmenityWhereInput, {nullable:true})
    @Type(() => PropertyAmenityWhereInput)
    where?: PropertyAmenityWhereInput;

    @Field(() => [PropertyAmenityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PropertyAmenityOrderByWithAggregationInput>;

    @Field(() => [PropertyAmenityScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PropertyAmenityScalarFieldEnum>;

    @Field(() => PropertyAmenityScalarWhereWithAggregatesInput, {nullable:true})
    having?: PropertyAmenityScalarWhereWithAggregatesInput;

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
