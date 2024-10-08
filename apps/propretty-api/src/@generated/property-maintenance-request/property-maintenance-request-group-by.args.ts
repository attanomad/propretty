import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestWhereInput } from './property-maintenance-request-where.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestOrderByWithAggregationInput } from './property-maintenance-request-order-by-with-aggregation.input';
import { PropertyMaintenanceRequestScalarFieldEnum } from './property-maintenance-request-scalar-field.enum';
import { PropertyMaintenanceRequestScalarWhereWithAggregatesInput } from './property-maintenance-request-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PropertyMaintenanceRequestCountAggregateInput } from './property-maintenance-request-count-aggregate.input';
import { PropertyMaintenanceRequestMinAggregateInput } from './property-maintenance-request-min-aggregate.input';
import { PropertyMaintenanceRequestMaxAggregateInput } from './property-maintenance-request-max-aggregate.input';

@ArgsType()
export class PropertyMaintenanceRequestGroupByArgs {

    @Field(() => PropertyMaintenanceRequestWhereInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestWhereInput)
    where?: PropertyMaintenanceRequestWhereInput;

    @Field(() => [PropertyMaintenanceRequestOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PropertyMaintenanceRequestOrderByWithAggregationInput>;

    @Field(() => [PropertyMaintenanceRequestScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PropertyMaintenanceRequestScalarFieldEnum>;

    @Field(() => PropertyMaintenanceRequestScalarWhereWithAggregatesInput, {nullable:true})
    having?: PropertyMaintenanceRequestScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PropertyMaintenanceRequestCountAggregateInput, {nullable:true})
    _count?: PropertyMaintenanceRequestCountAggregateInput;

    @Field(() => PropertyMaintenanceRequestMinAggregateInput, {nullable:true})
    _min?: PropertyMaintenanceRequestMinAggregateInput;

    @Field(() => PropertyMaintenanceRequestMaxAggregateInput, {nullable:true})
    _max?: PropertyMaintenanceRequestMaxAggregateInput;
}
