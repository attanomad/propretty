import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestStatus } from './property-maintenance-request-status.enum';

@InputType()
export class EnumPropertyMaintenanceRequestStatusFieldUpdateOperationsInput {

    @Field(() => PropertyMaintenanceRequestStatus, {nullable:true})
    set?: keyof typeof PropertyMaintenanceRequestStatus;
}
