import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumPropertyMaintenanceRequestStatusFilter } from '../prisma/enum-property-maintenance-request-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PropertyMaintenanceRequestActivityScalarWhereInput {

    @Field(() => [PropertyMaintenanceRequestActivityScalarWhereInput], {nullable:true})
    AND?: Array<PropertyMaintenanceRequestActivityScalarWhereInput>;

    @Field(() => [PropertyMaintenanceRequestActivityScalarWhereInput], {nullable:true})
    OR?: Array<PropertyMaintenanceRequestActivityScalarWhereInput>;

    @Field(() => [PropertyMaintenanceRequestActivityScalarWhereInput], {nullable:true})
    NOT?: Array<PropertyMaintenanceRequestActivityScalarWhereInput>;

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
}
