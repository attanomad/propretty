import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestActivityUpdateManyMutationInput } from './property-maintenance-request-activity-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestActivityWhereInput } from './property-maintenance-request-activity-where.input';

@ArgsType()
export class UpdateManyPropertyMaintenanceRequestActivityArgs {

    @Field(() => PropertyMaintenanceRequestActivityUpdateManyMutationInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestActivityUpdateManyMutationInput)
    data!: PropertyMaintenanceRequestActivityUpdateManyMutationInput;

    @Field(() => PropertyMaintenanceRequestActivityWhereInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestActivityWhereInput)
    where?: PropertyMaintenanceRequestActivityWhereInput;
}
