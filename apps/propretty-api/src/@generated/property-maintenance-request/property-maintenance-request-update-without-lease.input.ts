import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumPropertyMaintenanceRequestStatusFieldUpdateOperationsInput } from '../prisma/enum-property-maintenance-request-status-field-update-operations.input';
import { PropertyUpdateOneRequiredWithoutMaintenanceRequestsNestedInput } from '../property/property-update-one-required-without-maintenance-requests-nested.input';
import { Type } from 'class-transformer';
import { TenantUpdateOneRequiredWithoutMaintenanceRequestsNestedInput } from '../tenant/tenant-update-one-required-without-maintenance-requests-nested.input';
import { PropertyMaintenanceRequestActivityUpdateManyWithoutRequestNestedInput } from '../property-maintenance-request-activity/property-maintenance-request-activity-update-many-without-request-nested.input';

@InputType()
export class PropertyMaintenanceRequestUpdateWithoutLeaseInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

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

    @Field(() => PropertyUpdateOneRequiredWithoutMaintenanceRequestsNestedInput, {nullable:true})
    @Type(() => PropertyUpdateOneRequiredWithoutMaintenanceRequestsNestedInput)
    property?: PropertyUpdateOneRequiredWithoutMaintenanceRequestsNestedInput;

    @Field(() => TenantUpdateOneRequiredWithoutMaintenanceRequestsNestedInput, {nullable:true})
    @Type(() => TenantUpdateOneRequiredWithoutMaintenanceRequestsNestedInput)
    tenant?: TenantUpdateOneRequiredWithoutMaintenanceRequestsNestedInput;

    @Field(() => PropertyMaintenanceRequestActivityUpdateManyWithoutRequestNestedInput, {nullable:true})
    activities?: PropertyMaintenanceRequestActivityUpdateManyWithoutRequestNestedInput;
}
