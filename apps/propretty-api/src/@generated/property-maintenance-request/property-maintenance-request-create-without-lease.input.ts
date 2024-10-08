import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestStatus } from '../prisma/property-maintenance-request-status.enum';
import { PropertyCreateNestedOneWithoutMaintenanceRequestsInput } from '../property/property-create-nested-one-without-maintenance-requests.input';
import { Type } from 'class-transformer';
import { TenantCreateNestedOneWithoutMaintenanceRequestsInput } from '../tenant/tenant-create-nested-one-without-maintenance-requests.input';
import { PropertyMaintenanceRequestActivityCreateNestedManyWithoutRequestInput } from '../property-maintenance-request-activity/property-maintenance-request-activity-create-nested-many-without-request.input';

@InputType()
export class PropertyMaintenanceRequestCreateWithoutLeaseInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    requestedAt!: Date | string;

    @Field(() => PropertyMaintenanceRequestStatus, {nullable:true})
    status?: keyof typeof PropertyMaintenanceRequestStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PropertyCreateNestedOneWithoutMaintenanceRequestsInput, {nullable:false})
    @Type(() => PropertyCreateNestedOneWithoutMaintenanceRequestsInput)
    property!: PropertyCreateNestedOneWithoutMaintenanceRequestsInput;

    @Field(() => TenantCreateNestedOneWithoutMaintenanceRequestsInput, {nullable:false})
    @Type(() => TenantCreateNestedOneWithoutMaintenanceRequestsInput)
    tenant!: TenantCreateNestedOneWithoutMaintenanceRequestsInput;

    @Field(() => PropertyMaintenanceRequestActivityCreateNestedManyWithoutRequestInput, {nullable:true})
    activities?: PropertyMaintenanceRequestActivityCreateNestedManyWithoutRequestInput;
}
