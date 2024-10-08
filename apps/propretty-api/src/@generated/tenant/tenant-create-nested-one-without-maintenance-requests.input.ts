import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantCreateWithoutMaintenanceRequestsInput } from './tenant-create-without-maintenance-requests.input';
import { Type } from 'class-transformer';
import { TenantCreateOrConnectWithoutMaintenanceRequestsInput } from './tenant-create-or-connect-without-maintenance-requests.input';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';

@InputType()
export class TenantCreateNestedOneWithoutMaintenanceRequestsInput {

    @Field(() => TenantCreateWithoutMaintenanceRequestsInput, {nullable:true})
    @Type(() => TenantCreateWithoutMaintenanceRequestsInput)
    create?: TenantCreateWithoutMaintenanceRequestsInput;

    @Field(() => TenantCreateOrConnectWithoutMaintenanceRequestsInput, {nullable:true})
    @Type(() => TenantCreateOrConnectWithoutMaintenanceRequestsInput)
    connectOrCreate?: TenantCreateOrConnectWithoutMaintenanceRequestsInput;

    @Field(() => TenantWhereUniqueInput, {nullable:true})
    @Type(() => TenantWhereUniqueInput)
    connect?: Prisma.AtLeast<TenantWhereUniqueInput, 'id' | 'nationalId'>;
}
