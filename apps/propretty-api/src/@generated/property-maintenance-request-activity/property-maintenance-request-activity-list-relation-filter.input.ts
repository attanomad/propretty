import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestActivityWhereInput } from './property-maintenance-request-activity-where.input';

@InputType()
export class PropertyMaintenanceRequestActivityListRelationFilter {

    @Field(() => PropertyMaintenanceRequestActivityWhereInput, {nullable:true})
    every?: PropertyMaintenanceRequestActivityWhereInput;

    @Field(() => PropertyMaintenanceRequestActivityWhereInput, {nullable:true})
    some?: PropertyMaintenanceRequestActivityWhereInput;

    @Field(() => PropertyMaintenanceRequestActivityWhereInput, {nullable:true})
    none?: PropertyMaintenanceRequestActivityWhereInput;
}
