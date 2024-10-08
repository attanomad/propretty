import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumLeaseStatusFieldUpdateOperationsInput } from '../prisma/enum-lease-status-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestUncheckedUpdateManyWithoutLeaseNestedInput } from '../property-maintenance-request/property-maintenance-request-unchecked-update-many-without-lease-nested.input';

@InputType()
export class LeaseUncheckedUpdateWithoutTenantInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    propertyId?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    startedDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    endDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumLeaseStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumLeaseStatusFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    rentAmount?: DecimalFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    depositAmount?: DecimalFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PropertyMaintenanceRequestUncheckedUpdateManyWithoutLeaseNestedInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestUncheckedUpdateManyWithoutLeaseNestedInput)
    maintenanceRequests?: PropertyMaintenanceRequestUncheckedUpdateManyWithoutLeaseNestedInput;
}
