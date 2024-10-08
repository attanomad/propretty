import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestCreateWithoutTenantInput } from './property-maintenance-request-create-without-tenant.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestCreateOrConnectWithoutTenantInput } from './property-maintenance-request-create-or-connect-without-tenant.input';
import { PropertyMaintenanceRequestUpsertWithWhereUniqueWithoutTenantInput } from './property-maintenance-request-upsert-with-where-unique-without-tenant.input';
import { PropertyMaintenanceRequestCreateManyTenantInputEnvelope } from './property-maintenance-request-create-many-tenant-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PropertyMaintenanceRequestWhereUniqueInput } from './property-maintenance-request-where-unique.input';
import { PropertyMaintenanceRequestUpdateWithWhereUniqueWithoutTenantInput } from './property-maintenance-request-update-with-where-unique-without-tenant.input';
import { PropertyMaintenanceRequestUpdateManyWithWhereWithoutTenantInput } from './property-maintenance-request-update-many-with-where-without-tenant.input';
import { PropertyMaintenanceRequestScalarWhereInput } from './property-maintenance-request-scalar-where.input';

@InputType()
export class PropertyMaintenanceRequestUpdateManyWithoutTenantNestedInput {

    @Field(() => [PropertyMaintenanceRequestCreateWithoutTenantInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestCreateWithoutTenantInput)
    create?: Array<PropertyMaintenanceRequestCreateWithoutTenantInput>;

    @Field(() => [PropertyMaintenanceRequestCreateOrConnectWithoutTenantInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestCreateOrConnectWithoutTenantInput)
    connectOrCreate?: Array<PropertyMaintenanceRequestCreateOrConnectWithoutTenantInput>;

    @Field(() => [PropertyMaintenanceRequestUpsertWithWhereUniqueWithoutTenantInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestUpsertWithWhereUniqueWithoutTenantInput)
    upsert?: Array<PropertyMaintenanceRequestUpsertWithWhereUniqueWithoutTenantInput>;

    @Field(() => PropertyMaintenanceRequestCreateManyTenantInputEnvelope, {nullable:true})
    @Type(() => PropertyMaintenanceRequestCreateManyTenantInputEnvelope)
    createMany?: PropertyMaintenanceRequestCreateManyTenantInputEnvelope;

    @Field(() => [PropertyMaintenanceRequestWhereUniqueInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PropertyMaintenanceRequestWhereUniqueInput, 'id'>>;

    @Field(() => [PropertyMaintenanceRequestWhereUniqueInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PropertyMaintenanceRequestWhereUniqueInput, 'id'>>;

    @Field(() => [PropertyMaintenanceRequestWhereUniqueInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PropertyMaintenanceRequestWhereUniqueInput, 'id'>>;

    @Field(() => [PropertyMaintenanceRequestWhereUniqueInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertyMaintenanceRequestWhereUniqueInput, 'id'>>;

    @Field(() => [PropertyMaintenanceRequestUpdateWithWhereUniqueWithoutTenantInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestUpdateWithWhereUniqueWithoutTenantInput)
    update?: Array<PropertyMaintenanceRequestUpdateWithWhereUniqueWithoutTenantInput>;

    @Field(() => [PropertyMaintenanceRequestUpdateManyWithWhereWithoutTenantInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestUpdateManyWithWhereWithoutTenantInput)
    updateMany?: Array<PropertyMaintenanceRequestUpdateManyWithWhereWithoutTenantInput>;

    @Field(() => [PropertyMaintenanceRequestScalarWhereInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestScalarWhereInput)
    deleteMany?: Array<PropertyMaintenanceRequestScalarWhereInput>;
}
