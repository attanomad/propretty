import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LeaseUpdateWithoutMaintenanceRequestsInput } from './lease-update-without-maintenance-requests.input';
import { Type } from 'class-transformer';
import { LeaseCreateWithoutMaintenanceRequestsInput } from './lease-create-without-maintenance-requests.input';
import { LeaseWhereInput } from './lease-where.input';

@InputType()
export class LeaseUpsertWithoutMaintenanceRequestsInput {

    @Field(() => LeaseUpdateWithoutMaintenanceRequestsInput, {nullable:false})
    @Type(() => LeaseUpdateWithoutMaintenanceRequestsInput)
    update!: LeaseUpdateWithoutMaintenanceRequestsInput;

    @Field(() => LeaseCreateWithoutMaintenanceRequestsInput, {nullable:false})
    @Type(() => LeaseCreateWithoutMaintenanceRequestsInput)
    create!: LeaseCreateWithoutMaintenanceRequestsInput;

    @Field(() => LeaseWhereInput, {nullable:true})
    @Type(() => LeaseWhereInput)
    where?: LeaseWhereInput;
}
