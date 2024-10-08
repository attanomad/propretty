import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumPropertyMaintenanceRequestStatusFieldUpdateOperationsInput } from '../prisma/enum-property-maintenance-request-status-field-update-operations.input';
import { PropertyMaintenanceRequestActivityUncheckedUpdateManyWithoutRequestNestedInput } from '../property-maintenance-request-activity/property-maintenance-request-activity-unchecked-update-many-without-request-nested.input';

@InputType()
export class PropertyMaintenanceRequestUncheckedUpdateWithoutLeaseInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    propertyId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    tenantId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    requestedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumPropertyMaintenanceRequestStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumPropertyMaintenanceRequestStatusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PropertyMaintenanceRequestActivityUncheckedUpdateManyWithoutRequestNestedInput, {nullable:true})
    activities?: PropertyMaintenanceRequestActivityUncheckedUpdateManyWithoutRequestNestedInput;
}
