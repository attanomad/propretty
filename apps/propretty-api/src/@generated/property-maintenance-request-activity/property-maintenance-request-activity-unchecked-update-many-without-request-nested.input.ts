import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestActivityCreateWithoutRequestInput } from './property-maintenance-request-activity-create-without-request.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestActivityCreateOrConnectWithoutRequestInput } from './property-maintenance-request-activity-create-or-connect-without-request.input';
import { PropertyMaintenanceRequestActivityUpsertWithWhereUniqueWithoutRequestInput } from './property-maintenance-request-activity-upsert-with-where-unique-without-request.input';
import { PropertyMaintenanceRequestActivityCreateManyRequestInputEnvelope } from './property-maintenance-request-activity-create-many-request-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PropertyMaintenanceRequestActivityWhereUniqueInput } from './property-maintenance-request-activity-where-unique.input';
import { PropertyMaintenanceRequestActivityUpdateWithWhereUniqueWithoutRequestInput } from './property-maintenance-request-activity-update-with-where-unique-without-request.input';
import { PropertyMaintenanceRequestActivityUpdateManyWithWhereWithoutRequestInput } from './property-maintenance-request-activity-update-many-with-where-without-request.input';
import { PropertyMaintenanceRequestActivityScalarWhereInput } from './property-maintenance-request-activity-scalar-where.input';

@InputType()
export class PropertyMaintenanceRequestActivityUncheckedUpdateManyWithoutRequestNestedInput {

    @Field(() => [PropertyMaintenanceRequestActivityCreateWithoutRequestInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestActivityCreateWithoutRequestInput)
    create?: Array<PropertyMaintenanceRequestActivityCreateWithoutRequestInput>;

    @Field(() => [PropertyMaintenanceRequestActivityCreateOrConnectWithoutRequestInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestActivityCreateOrConnectWithoutRequestInput)
    connectOrCreate?: Array<PropertyMaintenanceRequestActivityCreateOrConnectWithoutRequestInput>;

    @Field(() => [PropertyMaintenanceRequestActivityUpsertWithWhereUniqueWithoutRequestInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestActivityUpsertWithWhereUniqueWithoutRequestInput)
    upsert?: Array<PropertyMaintenanceRequestActivityUpsertWithWhereUniqueWithoutRequestInput>;

    @Field(() => PropertyMaintenanceRequestActivityCreateManyRequestInputEnvelope, {nullable:true})
    @Type(() => PropertyMaintenanceRequestActivityCreateManyRequestInputEnvelope)
    createMany?: PropertyMaintenanceRequestActivityCreateManyRequestInputEnvelope;

    @Field(() => [PropertyMaintenanceRequestActivityWhereUniqueInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestActivityWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PropertyMaintenanceRequestActivityWhereUniqueInput, 'id'>>;

    @Field(() => [PropertyMaintenanceRequestActivityWhereUniqueInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestActivityWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PropertyMaintenanceRequestActivityWhereUniqueInput, 'id'>>;

    @Field(() => [PropertyMaintenanceRequestActivityWhereUniqueInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestActivityWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PropertyMaintenanceRequestActivityWhereUniqueInput, 'id'>>;

    @Field(() => [PropertyMaintenanceRequestActivityWhereUniqueInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestActivityWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertyMaintenanceRequestActivityWhereUniqueInput, 'id'>>;

    @Field(() => [PropertyMaintenanceRequestActivityUpdateWithWhereUniqueWithoutRequestInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestActivityUpdateWithWhereUniqueWithoutRequestInput)
    update?: Array<PropertyMaintenanceRequestActivityUpdateWithWhereUniqueWithoutRequestInput>;

    @Field(() => [PropertyMaintenanceRequestActivityUpdateManyWithWhereWithoutRequestInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestActivityUpdateManyWithWhereWithoutRequestInput)
    updateMany?: Array<PropertyMaintenanceRequestActivityUpdateManyWithWhereWithoutRequestInput>;

    @Field(() => [PropertyMaintenanceRequestActivityScalarWhereInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestActivityScalarWhereInput)
    deleteMany?: Array<PropertyMaintenanceRequestActivityScalarWhereInput>;
}
