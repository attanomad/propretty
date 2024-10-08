import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestWhereInput } from './property-maintenance-request-where.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestUpdateWithoutActivitiesInput } from './property-maintenance-request-update-without-activities.input';

@InputType()
export class PropertyMaintenanceRequestUpdateToOneWithWhereWithoutActivitiesInput {

    @Field(() => PropertyMaintenanceRequestWhereInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestWhereInput)
    where?: PropertyMaintenanceRequestWhereInput;

    @Field(() => PropertyMaintenanceRequestUpdateWithoutActivitiesInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestUpdateWithoutActivitiesInput)
    data!: PropertyMaintenanceRequestUpdateWithoutActivitiesInput;
}
