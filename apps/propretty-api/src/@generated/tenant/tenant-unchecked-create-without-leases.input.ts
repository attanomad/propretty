import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput } from '../property-maintenance-request/property-maintenance-request-unchecked-create-nested-many-without-tenant.input';
import { Type } from 'class-transformer';

@InputType()
export class TenantUncheckedCreateWithoutLeasesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    nationalId!: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => Date, {nullable:true})
    dateOfBirth?: Date | string;

    @Field(() => String, {nullable:true})
    gender?: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PropertyMaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput)
    maintenanceRequests?: PropertyMaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput;
}
