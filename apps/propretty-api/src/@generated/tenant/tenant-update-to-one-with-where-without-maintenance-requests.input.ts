import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantWhereInput } from './tenant-where.input';
import { Type } from 'class-transformer';
import { TenantUpdateWithoutMaintenanceRequestsInput } from './tenant-update-without-maintenance-requests.input';

@InputType()
export class TenantUpdateToOneWithWhereWithoutMaintenanceRequestsInput {

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    where?: TenantWhereInput;

    @Field(() => TenantUpdateWithoutMaintenanceRequestsInput, {nullable:false})
    @Type(() => TenantUpdateWithoutMaintenanceRequestsInput)
    data!: TenantUpdateWithoutMaintenanceRequestsInput;
}
