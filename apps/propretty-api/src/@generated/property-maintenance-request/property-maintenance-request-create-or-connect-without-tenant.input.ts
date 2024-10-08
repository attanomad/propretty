import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyMaintenanceRequestWhereUniqueInput } from './property-maintenance-request-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestCreateWithoutTenantInput } from './property-maintenance-request-create-without-tenant.input';

@InputType()
export class PropertyMaintenanceRequestCreateOrConnectWithoutTenantInput {

    @Field(() => PropertyMaintenanceRequestWhereUniqueInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyMaintenanceRequestWhereUniqueInput, 'id'>;

    @Field(() => PropertyMaintenanceRequestCreateWithoutTenantInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestCreateWithoutTenantInput)
    create!: PropertyMaintenanceRequestCreateWithoutTenantInput;
}
