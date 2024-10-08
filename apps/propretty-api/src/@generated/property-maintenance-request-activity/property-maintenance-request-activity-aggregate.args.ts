import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestActivityWhereInput } from './property-maintenance-request-activity-where.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestActivityOrderByWithRelationInput } from './property-maintenance-request-activity-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PropertyMaintenanceRequestActivityWhereUniqueInput } from './property-maintenance-request-activity-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PropertyMaintenanceRequestActivityCountAggregateInput } from './property-maintenance-request-activity-count-aggregate.input';
import { PropertyMaintenanceRequestActivityMinAggregateInput } from './property-maintenance-request-activity-min-aggregate.input';
import { PropertyMaintenanceRequestActivityMaxAggregateInput } from './property-maintenance-request-activity-max-aggregate.input';

@ArgsType()
export class PropertyMaintenanceRequestActivityAggregateArgs {

    @Field(() => PropertyMaintenanceRequestActivityWhereInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestActivityWhereInput)
    where?: PropertyMaintenanceRequestActivityWhereInput;

    @Field(() => [PropertyMaintenanceRequestActivityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PropertyMaintenanceRequestActivityOrderByWithRelationInput>;

    @Field(() => PropertyMaintenanceRequestActivityWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PropertyMaintenanceRequestActivityWhereUniqueInput, 'id'>;

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
