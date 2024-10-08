import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestStatus } from '../prisma/property-maintenance-request-status.enum';
import { PropertyMaintenanceRequestActivityCountAggregate } from './property-maintenance-request-activity-count-aggregate.output';
import { PropertyMaintenanceRequestActivityMinAggregate } from './property-maintenance-request-activity-min-aggregate.output';
import { PropertyMaintenanceRequestActivityMaxAggregate } from './property-maintenance-request-activity-max-aggregate.output';

@ObjectType()
export class PropertyMaintenanceRequestActivityGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    requestId!: string;

    @Field(() => PropertyMaintenanceRequestStatus, {nullable:false})
    status!: keyof typeof PropertyMaintenanceRequestStatus;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PropertyMaintenanceRequestActivityCountAggregate, {nullable:true})
    _count?: PropertyMaintenanceRequestActivityCountAggregate;

    @Field(() => PropertyMaintenanceRequestActivityMinAggregate, {nullable:true})
    _min?: PropertyMaintenanceRequestActivityMinAggregate;

    @Field(() => PropertyMaintenanceRequestActivityMaxAggregate, {nullable:true})
    _max?: PropertyMaintenanceRequestActivityMaxAggregate;
}
