import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyMaintenanceRequestWhereUniqueInput } from './property-maintenance-request-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestUpdateWithoutTenantInput } from './property-maintenance-request-update-without-tenant.input';

@InputType()
export class PropertyMaintenanceRequestUpdateWithWhereUniqueWithoutTenantInput {

    @Field(() => PropertyMaintenanceRequestWhereUniqueInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyMaintenanceRequestWhereUniqueInput, 'id'>;

    @Field(() => PropertyMaintenanceRequestUpdateWithoutTenantInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestUpdateWithoutTenantInput)
    data!: PropertyMaintenanceRequestUpdateWithoutTenantInput;
}
