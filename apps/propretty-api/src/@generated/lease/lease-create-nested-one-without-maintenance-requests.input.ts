import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LeaseCreateWithoutMaintenanceRequestsInput } from './lease-create-without-maintenance-requests.input';
import { Type } from 'class-transformer';
import { LeaseCreateOrConnectWithoutMaintenanceRequestsInput } from './lease-create-or-connect-without-maintenance-requests.input';
import { Prisma } from '@prisma/client';
import { LeaseWhereUniqueInput } from './lease-where-unique.input';

@InputType()
export class LeaseCreateNestedOneWithoutMaintenanceRequestsInput {

    @Field(() => LeaseCreateWithoutMaintenanceRequestsInput, {nullable:true})
    @Type(() => LeaseCreateWithoutMaintenanceRequestsInput)
    create?: LeaseCreateWithoutMaintenanceRequestsInput;

    @Field(() => LeaseCreateOrConnectWithoutMaintenanceRequestsInput, {nullable:true})
    @Type(() => LeaseCreateOrConnectWithoutMaintenanceRequestsInput)
    connectOrCreate?: LeaseCreateOrConnectWithoutMaintenanceRequestsInput;

    @Field(() => LeaseWhereUniqueInput, {nullable:true})
    @Type(() => LeaseWhereUniqueInput)
    connect?: Prisma.AtLeast<LeaseWhereUniqueInput, 'id'>;
}
