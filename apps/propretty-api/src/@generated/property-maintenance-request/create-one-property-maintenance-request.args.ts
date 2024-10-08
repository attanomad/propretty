import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestCreateInput } from './property-maintenance-request-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePropertyMaintenanceRequestArgs {

    @Field(() => PropertyMaintenanceRequestCreateInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestCreateInput)
    data!: PropertyMaintenanceRequestCreateInput;
}
