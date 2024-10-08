import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LeaseWhereInput } from './lease-where.input';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumLeaseStatusFilter } from '../prisma/enum-lease-status-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { PropertyRelationFilter } from '../property/property-relation-filter.input';
import { TenantRelationFilter } from '../tenant/tenant-relation-filter.input';
import { PropertyMaintenanceRequestListRelationFilter } from '../property-maintenance-request/property-maintenance-request-list-relation-filter.input';

@InputType()
export class LeaseWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [LeaseWhereInput], {nullable:true})
    @Type(() => LeaseWhereInput)
    AND?: Array<LeaseWhereInput>;

    @Field(() => [LeaseWhereInput], {nullable:true})
    @Type(() => LeaseWhereInput)
    OR?: Array<LeaseWhereInput>;

    @Field(() => [LeaseWhereInput], {nullable:true})
    @Type(() => LeaseWhereInput)
    NOT?: Array<LeaseWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    propertyId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tenantId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startedDate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    endDate?: DateTimeFilter;

    @Field(() => EnumLeaseStatusFilter, {nullable:true})
    status?: EnumLeaseStatusFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    rentAmount?: DecimalFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    depositAmount?: DecimalFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => PropertyRelationFilter, {nullable:true})
    @Type(() => PropertyRelationFilter)
    property?: PropertyRelationFilter;

    @Field(() => TenantRelationFilter, {nullable:true})
    @Type(() => TenantRelationFilter)
    tenant?: TenantRelationFilter;

    @Field(() => PropertyMaintenanceRequestListRelationFilter, {nullable:true})
    @Type(() => PropertyMaintenanceRequestListRelationFilter)
    maintenanceRequests?: PropertyMaintenanceRequestListRelationFilter;
}
