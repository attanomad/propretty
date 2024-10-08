import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestWhereInput } from './property-maintenance-request-where.input';

@InputType()
export class PropertyMaintenanceRequestRelationFilter {

    @Field(() => PropertyMaintenanceRequestWhereInput, {nullable:true})
    is?: PropertyMaintenanceRequestWhereInput;

    @Field(() => PropertyMaintenanceRequestWhereInput, {nullable:true})
    isNot?: PropertyMaintenanceRequestWhereInput;
}
