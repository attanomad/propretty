import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestActivityWhereInput } from './property-maintenance-request-activity-where.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestActivityOrderByWithAggregationInput } from './property-maintenance-request-activity-order-by-with-aggregation.input';
import { PropertyMaintenanceRequestActivityScalarFieldEnum } from './property-maintenance-request-activity-scalar-field.enum';
import { PropertyMaintenanceRequestActivityScalarWhereWithAggregatesInput } from './property-maintenance-request-activity-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PropertyMaintenanceRequestActivityCountAggregateInput } from './property-maintenance-request-activity-count-aggregate.input';
import { PropertyMaintenanceRequestActivityMinAggregateInput } from './property-maintenance-request-activity-min-aggregate.input';
import { PropertyMaintenanceRequestActivityMaxAggregateInput } from './property-maintenance-request-activity-max-aggregate.input';

@ArgsType()
export class PropertyMaintenanceRequestActivityGroupByArgs {

    @Field(() => PropertyMaintenanceRequestActivityWhereInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestActivityWhereInput)
    where?: PropertyMaintenanceRequestActivityWhereInput;

    @Field(() => [PropertyMaintenanceRequestActivityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PropertyMaintenanceRequestActivityOrderByWithAggregationInput>;

    @Field(() => [PropertyMaintenanceRequestActivityScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PropertyMaintenanceRequestActivityScalarFieldEnum>;

    @Field(() => PropertyMaintenanceRequestActivityScalarWhereWithAggregatesInput, {nullable:true})
    having?: PropertyMaintenanceRequestActivityScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PropertyMaintenanceRequestActivityCountAggregateInput, {nullable:true})
    _count?: PropertyMaintenanceRequestActivityCountAggregateInput;

    @Field(() => PropertyMaintenanceRequestActivityMinAggregateInput, {nullable:true})
    _min?: PropertyMaintenanceRequestActivityMinAggregateInput;

    @Field(() => PropertyMaintenanceRequestActivityMaxAggregateInput, {nullable:true})
    _max?: PropertyMaintenanceRequestActivityMaxAggregateInput;
}
