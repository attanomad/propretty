import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumPropertyMaintenanceRequestStatusFilter } from '../prisma/enum-property-maintenance-request-status-filter.input';

@InputType()
export class PropertyMaintenanceRequestScalarWhereInput {

    @Field(() => [PropertyMaintenanceRequestScalarWhereInput], {nullable:true})
    AND?: Array<PropertyMaintenanceRequestScalarWhereInput>;

    @Field(() => [PropertyMaintenanceRequestScalarWhereInput], {nullable:true})
    OR?: Array<PropertyMaintenanceRequestScalarWhereInput>;

    @Field(() => [PropertyMaintenanceRequestScalarWhereInput], {nullable:true})
    NOT?: Array<PropertyMaintenanceRequestScalarWhereInput>;

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
}
