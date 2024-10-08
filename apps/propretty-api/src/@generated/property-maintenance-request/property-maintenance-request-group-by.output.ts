import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestStatus } from '../prisma/property-maintenance-request-status.enum';
import { PropertyMaintenanceRequestCountAggregate } from './property-maintenance-request-count-aggregate.output';
import { PropertyMaintenanceRequestMinAggregate } from './property-maintenance-request-min-aggregate.output';
import { PropertyMaintenanceRequestMaxAggregate } from './property-maintenance-request-max-aggregate.output';

@ObjectType()
export class PropertyMaintenanceRequestGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    propertyId!: string;

    @Field(() => String, {nullable:false})
    tenantId!: string;

    @Field(() => String, {nullable:false})
    leaseId!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    requestedAt!: Date | string;

    @Field(() => PropertyMaintenanceRequestStatus, {nullable:false})
    status!: keyof typeof PropertyMaintenanceRequestStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PropertyMaintenanceRequestCountAggregate, {nullable:true})
    _count?: PropertyMaintenanceRequestCountAggregate;

    @Field(() => PropertyMaintenanceRequestMinAggregate, {nullable:true})
    _min?: PropertyMaintenanceRequestMinAggregate;

    @Field(() => PropertyMaintenanceRequestMaxAggregate, {nullable:true})
    _max?: PropertyMaintenanceRequestMaxAggregate;
}
