import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { LeaseStatus } from '../prisma/lease-status.enum';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { Property } from '../property/property.model';
import { Tenant } from '../tenant/tenant.model';
import { PropertyMaintenanceRequest } from '../property-maintenance-request/property-maintenance-request.model';
import { LeaseCount } from './lease-count.output';

@ObjectType()
export class Lease {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    propertyId!: string;

    @Field(() => String, {nullable:false})
    tenantId!: string;

    @Field(() => Date, {nullable:false})
    startedDate!: Date;

    @Field(() => Date, {nullable:false})
    endDate!: Date;

    @Field(() => LeaseStatus, {nullable:false})
    status!: keyof typeof LeaseStatus;

    @Field(() => GraphQLDecimal, {nullable:false})
    rentAmount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    depositAmount!: Decimal;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Property, {nullable:false})
    property?: Property;

    @Field(() => Tenant, {nullable:false})
    tenant?: Tenant;

    @Field(() => [PropertyMaintenanceRequest], {nullable:true})
    maintenanceRequests?: Array<PropertyMaintenanceRequest>;

    @Field(() => LeaseCount, {nullable:false})
    _count?: LeaseCount;
}
