import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestCreateWithoutLeaseInput } from './property-maintenance-request-create-without-lease.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestCreateOrConnectWithoutLeaseInput } from './property-maintenance-request-create-or-connect-without-lease.input';
import { PropertyMaintenanceRequestUpsertWithWhereUniqueWithoutLeaseInput } from './property-maintenance-request-upsert-with-where-unique-without-lease.input';
import { PropertyMaintenanceRequestCreateManyLeaseInputEnvelope } from './property-maintenance-request-create-many-lease-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PropertyMaintenanceRequestWhereUniqueInput } from './property-maintenance-request-where-unique.input';
import { PropertyMaintenanceRequestUpdateWithWhereUniqueWithoutLeaseInput } from './property-maintenance-request-update-with-where-unique-without-lease.input';
import { PropertyMaintenanceRequestUpdateManyWithWhereWithoutLeaseInput } from './property-maintenance-request-update-many-with-where-without-lease.input';
import { PropertyMaintenanceRequestScalarWhereInput } from './property-maintenance-request-scalar-where.input';

@InputType()
export class PropertyMaintenanceRequestUncheckedUpdateManyWithoutLeaseNestedInput {

    @Field(() => [PropertyMaintenanceRequestCreateWithoutLeaseInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestCreateWithoutLeaseInput)
    create?: Array<PropertyMaintenanceRequestCreateWithoutLeaseInput>;

    @Field(() => [PropertyMaintenanceRequestCreateOrConnectWithoutLeaseInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestCreateOrConnectWithoutLeaseInput)
    connectOrCreate?: Array<PropertyMaintenanceRequestCreateOrConnectWithoutLeaseInput>;

    @Field(() => [PropertyMaintenanceRequestUpsertWithWhereUniqueWithoutLeaseInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestUpsertWithWhereUniqueWithoutLeaseInput)
    upsert?: Array<PropertyMaintenanceRequestUpsertWithWhereUniqueWithoutLeaseInput>;

    @Field(() => PropertyMaintenanceRequestCreateManyLeaseInputEnvelope, {nullable:true})
    @Type(() => PropertyMaintenanceRequestCreateManyLeaseInputEnvelope)
    createMany?: PropertyMaintenanceRequestCreateManyLeaseInputEnvelope;

    @Field(() => [PropertyMaintenanceRequestWhereUniqueInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PropertyMaintenanceRequestWhereUniqueInput, 'id'>>;

    @Field(() => [PropertyMaintenanceRequestWhereUniqueInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PropertyMaintenanceRequestWhereUniqueInput, 'id'>>;

    @Field(() => [PropertyMaintenanceRequestWhereUniqueInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PropertyMaintenanceRequestWhereUniqueInput, 'id'>>;

    @Field(() => [PropertyMaintenanceRequestWhereUniqueInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertyMaintenanceRequestWhereUniqueInput, 'id'>>;

    @Field(() => [PropertyMaintenanceRequestUpdateWithWhereUniqueWithoutLeaseInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestUpdateWithWhereUniqueWithoutLeaseInput)
    update?: Array<PropertyMaintenanceRequestUpdateWithWhereUniqueWithoutLeaseInput>;

    @Field(() => [PropertyMaintenanceRequestUpdateManyWithWhereWithoutLeaseInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestUpdateManyWithWhereWithoutLeaseInput)
    updateMany?: Array<PropertyMaintenanceRequestUpdateManyWithWhereWithoutLeaseInput>;

    @Field(() => [PropertyMaintenanceRequestScalarWhereInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestScalarWhereInput)
    deleteMany?: Array<PropertyMaintenanceRequestScalarWhereInput>;
}
