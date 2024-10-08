import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestCreateWithoutPropertyInput } from './property-maintenance-request-create-without-property.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestCreateOrConnectWithoutPropertyInput } from './property-maintenance-request-create-or-connect-without-property.input';
import { PropertyMaintenanceRequestCreateManyPropertyInputEnvelope } from './property-maintenance-request-create-many-property-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PropertyMaintenanceRequestWhereUniqueInput } from './property-maintenance-request-where-unique.input';

@InputType()
export class PropertyMaintenanceRequestUncheckedCreateNestedManyWithoutPropertyInput {

    @Field(() => [PropertyMaintenanceRequestCreateWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestCreateWithoutPropertyInput)
    create?: Array<PropertyMaintenanceRequestCreateWithoutPropertyInput>;

    @Field(() => [PropertyMaintenanceRequestCreateOrConnectWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: Array<PropertyMaintenanceRequestCreateOrConnectWithoutPropertyInput>;

    @Field(() => PropertyMaintenanceRequestCreateManyPropertyInputEnvelope, {nullable:true})
    @Type(() => PropertyMaintenanceRequestCreateManyPropertyInputEnvelope)
    createMany?: PropertyMaintenanceRequestCreateManyPropertyInputEnvelope;

    @Field(() => [PropertyMaintenanceRequestWhereUniqueInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertyMaintenanceRequestWhereUniqueInput, 'id'>>;
}
