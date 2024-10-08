import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestUpdateManyMutationInput } from './property-maintenance-request-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestWhereInput } from './property-maintenance-request-where.input';

@ArgsType()
export class UpdateManyPropertyMaintenanceRequestArgs {

    @Field(() => PropertyMaintenanceRequestUpdateManyMutationInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestUpdateManyMutationInput)
    data!: PropertyMaintenanceRequestUpdateManyMutationInput;

    @Field(() => PropertyMaintenanceRequestWhereInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestWhereInput)
    where?: PropertyMaintenanceRequestWhereInput;
}
