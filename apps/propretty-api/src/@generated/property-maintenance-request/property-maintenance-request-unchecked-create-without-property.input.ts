import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestStatus } from '../prisma/property-maintenance-request-status.enum';
import { PropertyMaintenanceRequestActivityUncheckedCreateNestedManyWithoutRequestInput } from '../property-maintenance-request-activity/property-maintenance-request-activity-unchecked-create-nested-many-without-request.input';

@InputType()
export class PropertyMaintenanceRequestUncheckedCreateWithoutPropertyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    tenantId!: string;

    @Field(() => String, {nullable:false})
    leaseId!: string;

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

    @Field(() => PropertyMaintenanceRequestActivityUncheckedCreateNestedManyWithoutRequestInput, {nullable:true})
    activities?: PropertyMaintenanceRequestActivityUncheckedCreateNestedManyWithoutRequestInput;
}
