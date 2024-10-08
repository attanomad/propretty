import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyUpdateWithoutMaintenanceRequestsInput } from './property-update-without-maintenance-requests.input';
import { Type } from 'class-transformer';
import { PropertyCreateWithoutMaintenanceRequestsInput } from './property-create-without-maintenance-requests.input';
import { PropertyWhereInput } from './property-where.input';

@InputType()
export class PropertyUpsertWithoutMaintenanceRequestsInput {

    @Field(() => PropertyUpdateWithoutMaintenanceRequestsInput, {nullable:false})
    @Type(() => PropertyUpdateWithoutMaintenanceRequestsInput)
    update!: PropertyUpdateWithoutMaintenanceRequestsInput;

    @Field(() => PropertyCreateWithoutMaintenanceRequestsInput, {nullable:false})
    @Type(() => PropertyCreateWithoutMaintenanceRequestsInput)
    create!: PropertyCreateWithoutMaintenanceRequestsInput;

    @Field(() => PropertyWhereInput, {nullable:true})
    @Type(() => PropertyWhereInput)
    where?: PropertyWhereInput;
}
