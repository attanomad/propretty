import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantCreateWithoutMaintenanceRequestsInput } from './tenant-create-without-maintenance-requests.input';
import { Type } from 'class-transformer';
import { TenantCreateOrConnectWithoutMaintenanceRequestsInput } from './tenant-create-or-connect-without-maintenance-requests.input';
import { TenantUpsertWithoutMaintenanceRequestsInput } from './tenant-upsert-without-maintenance-requests.input';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';
import { TenantUpdateToOneWithWhereWithoutMaintenanceRequestsInput } from './tenant-update-to-one-with-where-without-maintenance-requests.input';

@InputType()
export class TenantUpdateOneRequiredWithoutMaintenanceRequestsNestedInput {

    @Field(() => TenantCreateWithoutMaintenanceRequestsInput, {nullable:true})
    @Type(() => TenantCreateWithoutMaintenanceRequestsInput)
    create?: TenantCreateWithoutMaintenanceRequestsInput;

    @Field(() => TenantCreateOrConnectWithoutMaintenanceRequestsInput, {nullable:true})
    @Type(() => TenantCreateOrConnectWithoutMaintenanceRequestsInput)
    connectOrCreate?: TenantCreateOrConnectWithoutMaintenanceRequestsInput;

    @Field(() => TenantUpsertWithoutMaintenanceRequestsInput, {nullable:true})
    @Type(() => TenantUpsertWithoutMaintenanceRequestsInput)
    upsert?: TenantUpsertWithoutMaintenanceRequestsInput;

    @Field(() => TenantWhereUniqueInput, {nullable:true})
    @Type(() => TenantWhereUniqueInput)
    connect?: Prisma.AtLeast<TenantWhereUniqueInput, 'id' | 'nationalId'>;

    @Field(() => TenantUpdateToOneWithWhereWithoutMaintenanceRequestsInput, {nullable:true})
    @Type(() => TenantUpdateToOneWithWhereWithoutMaintenanceRequestsInput)
    update?: TenantUpdateToOneWithWhereWithoutMaintenanceRequestsInput;
}
