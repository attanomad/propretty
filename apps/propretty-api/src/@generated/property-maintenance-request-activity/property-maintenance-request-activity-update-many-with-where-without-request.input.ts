import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestActivityScalarWhereInput } from './property-maintenance-request-activity-scalar-where.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestActivityUpdateManyMutationInput } from './property-maintenance-request-activity-update-many-mutation.input';

@InputType()
export class PropertyMaintenanceRequestActivityUpdateManyWithWhereWithoutRequestInput {

    @Field(() => PropertyMaintenanceRequestActivityScalarWhereInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestActivityScalarWhereInput)
    where!: PropertyMaintenanceRequestActivityScalarWhereInput;

    @Field(() => PropertyMaintenanceRequestActivityUpdateManyMutationInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestActivityUpdateManyMutationInput)
    data!: PropertyMaintenanceRequestActivityUpdateManyMutationInput;
}
