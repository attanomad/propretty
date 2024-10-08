import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestScalarWhereInput } from './property-maintenance-request-scalar-where.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestUpdateManyMutationInput } from './property-maintenance-request-update-many-mutation.input';

@InputType()
export class PropertyMaintenanceRequestUpdateManyWithWhereWithoutLeaseInput {

    @Field(() => PropertyMaintenanceRequestScalarWhereInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestScalarWhereInput)
    where!: PropertyMaintenanceRequestScalarWhereInput;

    @Field(() => PropertyMaintenanceRequestUpdateManyMutationInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestUpdateManyMutationInput)
    data!: PropertyMaintenanceRequestUpdateManyMutationInput;
}
