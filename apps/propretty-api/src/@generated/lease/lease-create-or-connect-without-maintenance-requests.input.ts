import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LeaseWhereUniqueInput } from './lease-where-unique.input';
import { Type } from 'class-transformer';
import { LeaseCreateWithoutMaintenanceRequestsInput } from './lease-create-without-maintenance-requests.input';

@InputType()
export class LeaseCreateOrConnectWithoutMaintenanceRequestsInput {

    @Field(() => LeaseWhereUniqueInput, {nullable:false})
    @Type(() => LeaseWhereUniqueInput)
    where!: Prisma.AtLeast<LeaseWhereUniqueInput, 'id'>;

    @Field(() => LeaseCreateWithoutMaintenanceRequestsInput, {nullable:false})
    @Type(() => LeaseCreateWithoutMaintenanceRequestsInput)
    create!: LeaseCreateWithoutMaintenanceRequestsInput;
}
