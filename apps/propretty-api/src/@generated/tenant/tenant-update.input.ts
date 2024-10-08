import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { LeaseUpdateManyWithoutTenantNestedInput } from '../lease/lease-update-many-without-tenant-nested.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestUpdateManyWithoutTenantNestedInput } from '../property-maintenance-request/property-maintenance-request-update-many-without-tenant-nested.input';

@InputType()
export class TenantUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nationalId?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    gender?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    address?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => LeaseUpdateManyWithoutTenantNestedInput, {nullable:true})
    @Type(() => LeaseUpdateManyWithoutTenantNestedInput)
    leases?: LeaseUpdateManyWithoutTenantNestedInput;

    @Field(() => PropertyMaintenanceRequestUpdateManyWithoutTenantNestedInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestUpdateManyWithoutTenantNestedInput)
    maintenanceRequests?: PropertyMaintenanceRequestUpdateManyWithoutTenantNestedInput;
}
