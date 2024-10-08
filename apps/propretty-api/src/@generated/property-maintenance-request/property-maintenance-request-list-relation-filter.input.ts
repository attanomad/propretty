import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestWhereInput } from './property-maintenance-request-where.input';

@InputType()
export class PropertyMaintenanceRequestListRelationFilter {

    @Field(() => PropertyMaintenanceRequestWhereInput, {nullable:true})
    every?: PropertyMaintenanceRequestWhereInput;

    @Field(() => PropertyMaintenanceRequestWhereInput, {nullable:true})
    some?: PropertyMaintenanceRequestWhereInput;

    @Field(() => PropertyMaintenanceRequestWhereInput, {nullable:true})
    none?: PropertyMaintenanceRequestWhereInput;
}
