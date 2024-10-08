import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestUpdateWithoutActivitiesInput } from './property-maintenance-request-update-without-activities.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestCreateWithoutActivitiesInput } from './property-maintenance-request-create-without-activities.input';
import { PropertyMaintenanceRequestWhereInput } from './property-maintenance-request-where.input';

@InputType()
export class PropertyMaintenanceRequestUpsertWithoutActivitiesInput {

    @Field(() => PropertyMaintenanceRequestUpdateWithoutActivitiesInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestUpdateWithoutActivitiesInput)
    update!: PropertyMaintenanceRequestUpdateWithoutActivitiesInput;

    @Field(() => PropertyMaintenanceRequestCreateWithoutActivitiesInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestCreateWithoutActivitiesInput)
    create!: PropertyMaintenanceRequestCreateWithoutActivitiesInput;

    @Field(() => PropertyMaintenanceRequestWhereInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestWhereInput)
    where?: PropertyMaintenanceRequestWhereInput;
}
