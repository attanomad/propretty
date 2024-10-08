import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LeaseWhereInput } from './lease-where.input';
import { Type } from 'class-transformer';
import { LeaseUpdateWithoutMaintenanceRequestsInput } from './lease-update-without-maintenance-requests.input';

@InputType()
export class LeaseUpdateToOneWithWhereWithoutMaintenanceRequestsInput {

    @Field(() => LeaseWhereInput, {nullable:true})
    @Type(() => LeaseWhereInput)
    where?: LeaseWhereInput;

    @Field(() => LeaseUpdateWithoutMaintenanceRequestsInput, {nullable:false})
    @Type(() => LeaseUpdateWithoutMaintenanceRequestsInput)
    data!: LeaseUpdateWithoutMaintenanceRequestsInput;
}
