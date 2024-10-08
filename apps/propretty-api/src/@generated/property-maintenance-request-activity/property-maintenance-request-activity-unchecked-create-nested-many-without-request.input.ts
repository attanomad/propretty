import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestActivityCreateWithoutRequestInput } from './property-maintenance-request-activity-create-without-request.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestActivityCreateOrConnectWithoutRequestInput } from './property-maintenance-request-activity-create-or-connect-without-request.input';
import { PropertyMaintenanceRequestActivityCreateManyRequestInputEnvelope } from './property-maintenance-request-activity-create-many-request-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PropertyMaintenanceRequestActivityWhereUniqueInput } from './property-maintenance-request-activity-where-unique.input';

@InputType()
export class PropertyMaintenanceRequestActivityUncheckedCreateNestedManyWithoutRequestInput {

    @Field(() => [PropertyMaintenanceRequestActivityCreateWithoutRequestInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestActivityCreateWithoutRequestInput)
    create?: Array<PropertyMaintenanceRequestActivityCreateWithoutRequestInput>;

    @Field(() => [PropertyMaintenanceRequestActivityCreateOrConnectWithoutRequestInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestActivityCreateOrConnectWithoutRequestInput)
    connectOrCreate?: Array<PropertyMaintenanceRequestActivityCreateOrConnectWithoutRequestInput>;

    @Field(() => PropertyMaintenanceRequestActivityCreateManyRequestInputEnvelope, {nullable:true})
    @Type(() => PropertyMaintenanceRequestActivityCreateManyRequestInputEnvelope)
    createMany?: PropertyMaintenanceRequestActivityCreateManyRequestInputEnvelope;

    @Field(() => [PropertyMaintenanceRequestActivityWhereUniqueInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestActivityWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertyMaintenanceRequestActivityWhereUniqueInput, 'id'>>;
}
