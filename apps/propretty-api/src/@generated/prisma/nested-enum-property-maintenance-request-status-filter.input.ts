import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestStatus } from './property-maintenance-request-status.enum';

@InputType()
export class NestedEnumPropertyMaintenanceRequestStatusFilter {

    @Field(() => PropertyMaintenanceRequestStatus, {nullable:true})
    equals?: keyof typeof PropertyMaintenanceRequestStatus;

    @Field(() => [PropertyMaintenanceRequestStatus], {nullable:true})
    in?: Array<keyof typeof PropertyMaintenanceRequestStatus>;

    @Field(() => [PropertyMaintenanceRequestStatus], {nullable:true})
    notIn?: Array<keyof typeof PropertyMaintenanceRequestStatus>;

    @Field(() => NestedEnumPropertyMaintenanceRequestStatusFilter, {nullable:true})
    not?: NestedEnumPropertyMaintenanceRequestStatusFilter;
}
