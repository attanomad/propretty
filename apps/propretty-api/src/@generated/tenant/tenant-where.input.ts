import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { LeaseListRelationFilter } from '../lease/lease-list-relation-filter.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestListRelationFilter } from '../property-maintenance-request/property-maintenance-request-list-relation-filter.input';

@InputType()
export class TenantWhereInput {

    @Field(() => [TenantWhereInput], {nullable:true})
    AND?: Array<TenantWhereInput>;

    @Field(() => [TenantWhereInput], {nullable:true})
    OR?: Array<TenantWhereInput>;

    @Field(() => [TenantWhereInput], {nullable:true})
    NOT?: Array<TenantWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    nationalId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    firstName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    lastName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phoneNumber?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    dateOfBirth?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    gender?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    address?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => LeaseListRelationFilter, {nullable:true})
    @Type(() => LeaseListRelationFilter)
    leases?: LeaseListRelationFilter;

    @Field(() => PropertyMaintenanceRequestListRelationFilter, {nullable:true})
    @Type(() => PropertyMaintenanceRequestListRelationFilter)
    maintenanceRequests?: PropertyMaintenanceRequestListRelationFilter;
}
