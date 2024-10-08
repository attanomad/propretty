import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumPropertyMaintenanceRequestStatusWithAggregatesFilter } from '../prisma/enum-property-maintenance-request-status-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PropertyMaintenanceRequestActivityScalarWhereWithAggregatesInput {

    @Field(() => [PropertyMaintenanceRequestActivityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PropertyMaintenanceRequestActivityScalarWhereWithAggregatesInput>;

    @Field(() => [PropertyMaintenanceRequestActivityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PropertyMaintenanceRequestActivityScalarWhereWithAggregatesInput>;

    @Field(() => [PropertyMaintenanceRequestActivityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PropertyMaintenanceRequestActivityScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    requestId?: StringWithAggregatesFilter;

    @Field(() => EnumPropertyMaintenanceRequestStatusWithAggregatesFilter, {nullable:true})
    status?: EnumPropertyMaintenanceRequestStatusWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
