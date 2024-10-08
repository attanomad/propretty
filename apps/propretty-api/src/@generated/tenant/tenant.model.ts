import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Lease } from '../lease/lease.model';
import { PropertyMaintenanceRequest } from '../property-maintenance-request/property-maintenance-request.model';
import { TenantCount } from './tenant-count.output';

@ObjectType()
export class Tenant {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    nationalId!: string;

    @Field(() => String, {nullable:true})
    firstName!: string | null;

    @Field(() => String, {nullable:true})
    lastName!: string | null;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:true})
    phoneNumber!: string | null;

    @Field(() => Date, {nullable:true})
    dateOfBirth!: Date | null;

    @Field(() => String, {nullable:true})
    gender!: string | null;

    @Field(() => String, {nullable:true})
    address!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Lease], {nullable:true})
    leases?: Array<Lease>;

    @Field(() => [PropertyMaintenanceRequest], {nullable:true})
    maintenanceRequests?: Array<PropertyMaintenanceRequest>;

    @Field(() => TenantCount, {nullable:false})
    _count?: TenantCount;
}
