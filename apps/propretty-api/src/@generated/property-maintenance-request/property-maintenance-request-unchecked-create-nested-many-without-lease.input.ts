import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestCreateWithoutLeaseInput } from './property-maintenance-request-create-without-lease.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestCreateOrConnectWithoutLeaseInput } from './property-maintenance-request-create-or-connect-without-lease.input';
import { PropertyMaintenanceRequestCreateManyLeaseInputEnvelope } from './property-maintenance-request-create-many-lease-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PropertyMaintenanceRequestWhereUniqueInput } from './property-maintenance-request-where-unique.input';

@InputType()
export class PropertyMaintenanceRequestUncheckedCreateNestedManyWithoutLeaseInput {

    @Field(() => [PropertyMaintenanceRequestCreateWithoutLeaseInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestCreateWithoutLeaseInput)
    create?: Array<PropertyMaintenanceRequestCreateWithoutLeaseInput>;

    @Field(() => [PropertyMaintenanceRequestCreateOrConnectWithoutLeaseInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestCreateOrConnectWithoutLeaseInput)
    connectOrCreate?: Array<PropertyMaintenanceRequestCreateOrConnectWithoutLeaseInput>;

    @Field(() => PropertyMaintenanceRequestCreateManyLeaseInputEnvelope, {nullable:true})
    @Type(() => PropertyMaintenanceRequestCreateManyLeaseInputEnvelope)
    createMany?: PropertyMaintenanceRequestCreateManyLeaseInputEnvelope;

    @Field(() => [PropertyMaintenanceRequestWhereUniqueInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertyMaintenanceRequestWhereUniqueInput, 'id'>>;
}
