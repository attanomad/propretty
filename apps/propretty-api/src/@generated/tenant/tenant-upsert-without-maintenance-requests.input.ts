import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantUpdateWithoutMaintenanceRequestsInput } from './tenant-update-without-maintenance-requests.input';
import { Type } from 'class-transformer';
import { TenantCreateWithoutMaintenanceRequestsInput } from './tenant-create-without-maintenance-requests.input';
import { TenantWhereInput } from './tenant-where.input';

@InputType()
export class TenantUpsertWithoutMaintenanceRequestsInput {

    @Field(() => TenantUpdateWithoutMaintenanceRequestsInput, {nullable:false})
    @Type(() => TenantUpdateWithoutMaintenanceRequestsInput)
    update!: TenantUpdateWithoutMaintenanceRequestsInput;

    @Field(() => TenantCreateWithoutMaintenanceRequestsInput, {nullable:false})
    @Type(() => TenantCreateWithoutMaintenanceRequestsInput)
    create!: TenantCreateWithoutMaintenanceRequestsInput;

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    where?: TenantWhereInput;
}
