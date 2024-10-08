import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestActivityCreateInput } from './property-maintenance-request-activity-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePropertyMaintenanceRequestActivityArgs {

    @Field(() => PropertyMaintenanceRequestActivityCreateInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestActivityCreateInput)
    data!: PropertyMaintenanceRequestActivityCreateInput;
}
