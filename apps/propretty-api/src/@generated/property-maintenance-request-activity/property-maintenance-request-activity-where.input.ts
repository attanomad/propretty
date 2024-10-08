import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumPropertyMaintenanceRequestStatusFilter } from '../prisma/enum-property-maintenance-request-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PropertyMaintenanceRequestRelationFilter } from '../property-maintenance-request/property-maintenance-request-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class PropertyMaintenanceRequestActivityWhereInput {

    @Field(() => [PropertyMaintenanceRequestActivityWhereInput], {nullable:true})
    AND?: Array<PropertyMaintenanceRequestActivityWhereInput>;

    @Field(() => [PropertyMaintenanceRequestActivityWhereInput], {nullable:true})
    OR?: Array<PropertyMaintenanceRequestActivityWhereInput>;

    @Field(() => [PropertyMaintenanceRequestActivityWhereInput], {nullable:true})
    NOT?: Array<PropertyMaintenanceRequestActivityWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    requestId?: StringFilter;

    @Field(() => EnumPropertyMaintenanceRequestStatusFilter, {nullable:true})
    status?: EnumPropertyMaintenanceRequestStatusFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => PropertyMaintenanceRequestRelationFilter, {nullable:true})
    @Type(() => PropertyMaintenanceRequestRelationFilter)
    request?: PropertyMaintenanceRequestRelationFilter;
}
