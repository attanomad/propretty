import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestCreateWithoutTenantInput } from './property-maintenance-request-create-without-tenant.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestCreateOrConnectWithoutTenantInput } from './property-maintenance-request-create-or-connect-without-tenant.input';
import { PropertyMaintenanceRequestCreateManyTenantInputEnvelope } from './property-maintenance-request-create-many-tenant-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PropertyMaintenanceRequestWhereUniqueInput } from './property-maintenance-request-where-unique.input';

@InputType()
export class PropertyMaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput {

    @Field(() => [PropertyMaintenanceRequestCreateWithoutTenantInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestCreateWithoutTenantInput)
    create?: Array<PropertyMaintenanceRequestCreateWithoutTenantInput>;

    @Field(() => [PropertyMaintenanceRequestCreateOrConnectWithoutTenantInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestCreateOrConnectWithoutTenantInput)
    connectOrCreate?: Array<PropertyMaintenanceRequestCreateOrConnectWithoutTenantInput>;

    @Field(() => PropertyMaintenanceRequestCreateManyTenantInputEnvelope, {nullable:true})
    @Type(() => PropertyMaintenanceRequestCreateManyTenantInputEnvelope)
    createMany?: PropertyMaintenanceRequestCreateManyTenantInputEnvelope;

    @Field(() => [PropertyMaintenanceRequestWhereUniqueInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertyMaintenanceRequestWhereUniqueInput, 'id'>>;
}
