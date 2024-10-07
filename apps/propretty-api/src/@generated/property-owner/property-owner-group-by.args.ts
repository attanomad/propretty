import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyOwnerWhereInput } from './property-owner-where.input';
import { Type } from 'class-transformer';
import { PropertyOwnerOrderByWithAggregationInput } from './property-owner-order-by-with-aggregation.input';
import { PropertyOwnerScalarFieldEnum } from './property-owner-scalar-field.enum';
import { PropertyOwnerScalarWhereWithAggregatesInput } from './property-owner-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PropertyOwnerCountAggregateInput } from './property-owner-count-aggregate.input';
import { PropertyOwnerMinAggregateInput } from './property-owner-min-aggregate.input';
import { PropertyOwnerMaxAggregateInput } from './property-owner-max-aggregate.input';

@ArgsType()
export class PropertyOwnerGroupByArgs {

    @Field(() => PropertyOwnerWhereInput, {nullable:true})
    @Type(() => PropertyOwnerWhereInput)
    where?: PropertyOwnerWhereInput;

    @Field(() => [PropertyOwnerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PropertyOwnerOrderByWithAggregationInput>;

    @Field(() => [PropertyOwnerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PropertyOwnerScalarFieldEnum>;

    @Field(() => PropertyOwnerScalarWhereWithAggregatesInput, {nullable:true})
    having?: PropertyOwnerScalarWhereWithAggregatesInput;

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
