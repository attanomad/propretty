import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';
import { Type } from 'class-transformer';
import { TenantCreateWithoutMaintenanceRequestsInput } from './tenant-create-without-maintenance-requests.input';

@InputType()
export class TenantCreateOrConnectWithoutMaintenanceRequestsInput {

    @Field(() => TenantWhereUniqueInput, {nullable:false})
    @Type(() => TenantWhereUniqueInput)
    where!: Prisma.AtLeast<TenantWhereUniqueInput, 'id' | 'nationalId'>;

    @Field(() => TenantCreateWithoutMaintenanceRequestsInput, {nullable:false})
    @Type(() => TenantCreateWithoutMaintenanceRequestsInput)
    create!: TenantCreateWithoutMaintenanceRequestsInput;
}
