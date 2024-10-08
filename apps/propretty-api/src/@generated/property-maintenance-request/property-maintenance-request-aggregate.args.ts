import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestWhereInput } from './property-maintenance-request-where.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestOrderByWithRelationInput } from './property-maintenance-request-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PropertyMaintenanceRequestWhereUniqueInput } from './property-maintenance-request-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PropertyMaintenanceRequestCountAggregateInput } from './property-maintenance-request-count-aggregate.input';
import { PropertyMaintenanceRequestMinAggregateInput } from './property-maintenance-request-min-aggregate.input';
import { PropertyMaintenanceRequestMaxAggregateInput } from './property-maintenance-request-max-aggregate.input';

@ArgsType()
export class PropertyMaintenanceRequestAggregateArgs {

    @Field(() => PropertyMaintenanceRequestWhereInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestWhereInput)
    where?: PropertyMaintenanceRequestWhereInput;

    @Field(() => [PropertyMaintenanceRequestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PropertyMaintenanceRequestOrderByWithRelationInput>;

    @Field(() => PropertyMaintenanceRequestWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PropertyMaintenanceRequestWhereUniqueInput, 'id'>;

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
