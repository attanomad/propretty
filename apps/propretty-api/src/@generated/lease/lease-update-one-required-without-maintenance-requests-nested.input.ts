import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LeaseCreateWithoutMaintenanceRequestsInput } from './lease-create-without-maintenance-requests.input';
import { Type } from 'class-transformer';
import { LeaseCreateOrConnectWithoutMaintenanceRequestsInput } from './lease-create-or-connect-without-maintenance-requests.input';
import { LeaseUpsertWithoutMaintenanceRequestsInput } from './lease-upsert-without-maintenance-requests.input';
import { Prisma } from '@prisma/client';
import { LeaseWhereUniqueInput } from './lease-where-unique.input';
import { LeaseUpdateToOneWithWhereWithoutMaintenanceRequestsInput } from './lease-update-to-one-with-where-without-maintenance-requests.input';

@InputType()
export class LeaseUpdateOneRequiredWithoutMaintenanceRequestsNestedInput {

    @Field(() => LeaseCreateWithoutMaintenanceRequestsInput, {nullable:true})
    @Type(() => LeaseCreateWithoutMaintenanceRequestsInput)
    create?: LeaseCreateWithoutMaintenanceRequestsInput;

    @Field(() => LeaseCreateOrConnectWithoutMaintenanceRequestsInput, {nullable:true})
    @Type(() => LeaseCreateOrConnectWithoutMaintenanceRequestsInput)
    connectOrCreate?: LeaseCreateOrConnectWithoutMaintenanceRequestsInput;

    @Field(() => LeaseUpsertWithoutMaintenanceRequestsInput, {nullable:true})
    @Type(() => LeaseUpsertWithoutMaintenanceRequestsInput)
    upsert?: LeaseUpsertWithoutMaintenanceRequestsInput;

    @Field(() => LeaseWhereUniqueInput, {nullable:true})
    @Type(() => LeaseWhereUniqueInput)
    connect?: Prisma.AtLeast<LeaseWhereUniqueInput, 'id'>;

    @Field(() => LeaseUpdateToOneWithWhereWithoutMaintenanceRequestsInput, {nullable:true})
    @Type(() => LeaseUpdateToOneWithWhereWithoutMaintenanceRequestsInput)
    update?: LeaseUpdateToOneWithWhereWithoutMaintenanceRequestsInput;
}
