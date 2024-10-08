import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumPropertyMaintenanceRequestStatusWithAggregatesFilter } from '../prisma/enum-property-maintenance-request-status-with-aggregates-filter.input';

@InputType()
export class PropertyMaintenanceRequestScalarWhereWithAggregatesInput {

    @Field(() => [PropertyMaintenanceRequestScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PropertyMaintenanceRequestScalarWhereWithAggregatesInput>;

    @Field(() => [PropertyMaintenanceRequestScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PropertyMaintenanceRequestScalarWhereWithAggregatesInput>;

    @Field(() => [PropertyMaintenanceRequestScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PropertyMaintenanceRequestScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    propertyId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    tenantId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    leaseId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    requestedAt?: DateTimeWithAggregatesFilter;

    @Field(() => EnumPropertyMaintenanceRequestStatusWithAggregatesFilter, {nullable:true})
    status?: EnumPropertyMaintenanceRequestStatusWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
