import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestActivityWhereInput } from './property-maintenance-request-activity-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPropertyMaintenanceRequestActivityArgs {

    @Field(() => PropertyMaintenanceRequestActivityWhereInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestActivityWhereInput)
    where?: PropertyMaintenanceRequestActivityWhereInput;
}
