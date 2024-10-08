import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestStatus } from '../prisma/property-maintenance-request-status.enum';
import { PropertyMaintenanceRequestCreateNestedOneWithoutActivitiesInput } from '../property-maintenance-request/property-maintenance-request-create-nested-one-without-activities.input';
import { Type } from 'class-transformer';

@InputType()
export class PropertyMaintenanceRequestActivityCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => PropertyMaintenanceRequestStatus, {nullable:true})
    status?: keyof typeof PropertyMaintenanceRequestStatus;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PropertyMaintenanceRequestCreateNestedOneWithoutActivitiesInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestCreateNestedOneWithoutActivitiesInput)
    request!: PropertyMaintenanceRequestCreateNestedOneWithoutActivitiesInput;
}
