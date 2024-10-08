import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumLeaseStatusFieldUpdateOperationsInput } from '../prisma/enum-lease-status-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { PropertyUpdateOneRequiredWithoutLeasesNestedInput } from '../property/property-update-one-required-without-leases-nested.input';
import { TenantUpdateOneRequiredWithoutLeasesNestedInput } from '../tenant/tenant-update-one-required-without-leases-nested.input';
import { PropertyMaintenanceRequestUpdateManyWithoutLeaseNestedInput } from '../property-maintenance-request/property-maintenance-request-update-many-without-lease-nested.input';

@InputType()
export class LeaseUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

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

    @Field(() => PropertyUpdateOneRequiredWithoutLeasesNestedInput, {nullable:true})
    @Type(() => PropertyUpdateOneRequiredWithoutLeasesNestedInput)
    property?: PropertyUpdateOneRequiredWithoutLeasesNestedInput;

    @Field(() => TenantUpdateOneRequiredWithoutLeasesNestedInput, {nullable:true})
    @Type(() => TenantUpdateOneRequiredWithoutLeasesNestedInput)
    tenant?: TenantUpdateOneRequiredWithoutLeasesNestedInput;

    @Field(() => PropertyMaintenanceRequestUpdateManyWithoutLeaseNestedInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestUpdateManyWithoutLeaseNestedInput)
    maintenanceRequests?: PropertyMaintenanceRequestUpdateManyWithoutLeaseNestedInput;
}
