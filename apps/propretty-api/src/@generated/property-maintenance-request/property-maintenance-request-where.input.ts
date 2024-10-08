import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumPropertyMaintenanceRequestStatusFilter } from '../prisma/enum-property-maintenance-request-status-filter.input';
import { PropertyRelationFilter } from '../property/property-relation-filter.input';
import { Type } from 'class-transformer';
import { TenantRelationFilter } from '../tenant/tenant-relation-filter.input';
import { LeaseRelationFilter } from '../lease/lease-relation-filter.input';
import { PropertyMaintenanceRequestActivityListRelationFilter } from '../property-maintenance-request-activity/property-maintenance-request-activity-list-relation-filter.input';

@InputType()
export class PropertyMaintenanceRequestWhereInput {

    @Field(() => [PropertyMaintenanceRequestWhereInput], {nullable:true})
    AND?: Array<PropertyMaintenanceRequestWhereInput>;

    @Field(() => [PropertyMaintenanceRequestWhereInput], {nullable:true})
    OR?: Array<PropertyMaintenanceRequestWhereInput>;

    @Field(() => [PropertyMaintenanceRequestWhereInput], {nullable:true})
    NOT?: Array<PropertyMaintenanceRequestWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    propertyId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tenantId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    leaseId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    requestedAt?: DateTimeFilter;

    @Field(() => EnumPropertyMaintenanceRequestStatusFilter, {nullable:true})
    status?: EnumPropertyMaintenanceRequestStatusFilter;

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

    @Field(() => LeaseRelationFilter, {nullable:true})
    @Type(() => LeaseRelationFilter)
    lease?: LeaseRelationFilter;

    @Field(() => PropertyMaintenanceRequestActivityListRelationFilter, {nullable:true})
    activities?: PropertyMaintenanceRequestActivityListRelationFilter;
}
