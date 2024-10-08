import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LeaseUncheckedCreateNestedManyWithoutTenantInput } from '../lease/lease-unchecked-create-nested-many-without-tenant.input';
import { Type } from 'class-transformer';

@InputType()
export class TenantUncheckedCreateWithoutMaintenanceRequestsInput {

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

    @Field(() => LeaseUncheckedCreateNestedManyWithoutTenantInput, {nullable:true})
    @Type(() => LeaseUncheckedCreateNestedManyWithoutTenantInput)
    leases?: LeaseUncheckedCreateNestedManyWithoutTenantInput;
}
