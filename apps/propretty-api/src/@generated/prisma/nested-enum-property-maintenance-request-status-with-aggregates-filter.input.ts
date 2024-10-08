import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestStatus } from './property-maintenance-request-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPropertyMaintenanceRequestStatusFilter } from './nested-enum-property-maintenance-request-status-filter.input';

@InputType()
export class NestedEnumPropertyMaintenanceRequestStatusWithAggregatesFilter {

    @Field(() => PropertyMaintenanceRequestStatus, {nullable:true})
    equals?: keyof typeof PropertyMaintenanceRequestStatus;

    @Field(() => [PropertyMaintenanceRequestStatus], {nullable:true})
    in?: Array<keyof typeof PropertyMaintenanceRequestStatus>;

    @Field(() => [PropertyMaintenanceRequestStatus], {nullable:true})
    notIn?: Array<keyof typeof PropertyMaintenanceRequestStatus>;

    @Field(() => NestedEnumPropertyMaintenanceRequestStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPropertyMaintenanceRequestStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPropertyMaintenanceRequestStatusFilter, {nullable:true})
    _min?: NestedEnumPropertyMaintenanceRequestStatusFilter;

    @Field(() => NestedEnumPropertyMaintenanceRequestStatusFilter, {nullable:true})
    _max?: NestedEnumPropertyMaintenanceRequestStatusFilter;
}
