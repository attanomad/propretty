import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PropertyMaintenanceRequestStatus } from '../prisma/property-maintenance-request-status.enum';
import { Property } from '../property/property.model';
import { Tenant } from '../tenant/tenant.model';
import { Lease } from '../lease/lease.model';
import { PropertyMaintenanceRequestActivity } from '../property-maintenance-request-activity/property-maintenance-request-activity.model';
import { PropertyMaintenanceRequestCount } from './property-maintenance-request-count.output';

@ObjectType()
export class PropertyMaintenanceRequest {

    @Field(() => ID, {nullable:false})
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
    requestedAt!: Date;

    @Field(() => PropertyMaintenanceRequestStatus, {nullable:false,defaultValue:'Pending'})
    status!: keyof typeof PropertyMaintenanceRequestStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Property, {nullable:false})
    property?: Property;

    @Field(() => Tenant, {nullable:false})
    tenant?: Tenant;

    @Field(() => Lease, {nullable:false})
    lease?: Lease;

    @Field(() => [PropertyMaintenanceRequestActivity], {nullable:true})
    activities?: Array<PropertyMaintenanceRequestActivity>;

    @Field(() => PropertyMaintenanceRequestCount, {nullable:false})
    _count?: PropertyMaintenanceRequestCount;
}
