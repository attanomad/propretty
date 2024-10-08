import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyWhereInput } from './property-where.input';
import { Type } from 'class-transformer';
import { PropertyUpdateWithoutMaintenanceRequestsInput } from './property-update-without-maintenance-requests.input';

@InputType()
export class PropertyUpdateToOneWithWhereWithoutMaintenanceRequestsInput {

    @Field(() => PropertyWhereInput, {nullable:true})
    @Type(() => PropertyWhereInput)
    where?: PropertyWhereInput;

    @Field(() => PropertyUpdateWithoutMaintenanceRequestsInput, {nullable:false})
    @Type(() => PropertyUpdateWithoutMaintenanceRequestsInput)
    data!: PropertyUpdateWithoutMaintenanceRequestsInput;
}
