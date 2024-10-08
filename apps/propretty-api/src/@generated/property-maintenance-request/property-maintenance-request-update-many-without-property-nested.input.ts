import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestCreateWithoutPropertyInput } from './property-maintenance-request-create-without-property.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestCreateOrConnectWithoutPropertyInput } from './property-maintenance-request-create-or-connect-without-property.input';
import { PropertyMaintenanceRequestUpsertWithWhereUniqueWithoutPropertyInput } from './property-maintenance-request-upsert-with-where-unique-without-property.input';
import { PropertyMaintenanceRequestCreateManyPropertyInputEnvelope } from './property-maintenance-request-create-many-property-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PropertyMaintenanceRequestWhereUniqueInput } from './property-maintenance-request-where-unique.input';
import { PropertyMaintenanceRequestUpdateWithWhereUniqueWithoutPropertyInput } from './property-maintenance-request-update-with-where-unique-without-property.input';
import { PropertyMaintenanceRequestUpdateManyWithWhereWithoutPropertyInput } from './property-maintenance-request-update-many-with-where-without-property.input';
import { PropertyMaintenanceRequestScalarWhereInput } from './property-maintenance-request-scalar-where.input';

@InputType()
export class PropertyMaintenanceRequestUpdateManyWithoutPropertyNestedInput {

    @Field(() => [PropertyMaintenanceRequestCreateWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestCreateWithoutPropertyInput)
    create?: Array<PropertyMaintenanceRequestCreateWithoutPropertyInput>;

    @Field(() => [PropertyMaintenanceRequestCreateOrConnectWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: Array<PropertyMaintenanceRequestCreateOrConnectWithoutPropertyInput>;

    @Field(() => [PropertyMaintenanceRequestUpsertWithWhereUniqueWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestUpsertWithWhereUniqueWithoutPropertyInput)
    upsert?: Array<PropertyMaintenanceRequestUpsertWithWhereUniqueWithoutPropertyInput>;

    @Field(() => PropertyMaintenanceRequestCreateManyPropertyInputEnvelope, {nullable:true})
    @Type(() => PropertyMaintenanceRequestCreateManyPropertyInputEnvelope)
    createMany?: PropertyMaintenanceRequestCreateManyPropertyInputEnvelope;

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

    @Field(() => [PropertyMaintenanceRequestUpdateWithWhereUniqueWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestUpdateWithWhereUniqueWithoutPropertyInput)
    update?: Array<PropertyMaintenanceRequestUpdateWithWhereUniqueWithoutPropertyInput>;

    @Field(() => [PropertyMaintenanceRequestUpdateManyWithWhereWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestUpdateManyWithWhereWithoutPropertyInput)
    updateMany?: Array<PropertyMaintenanceRequestUpdateManyWithWhereWithoutPropertyInput>;

    @Field(() => [PropertyMaintenanceRequestScalarWhereInput], {nullable:true})
    @Type(() => PropertyMaintenanceRequestScalarWhereInput)
    deleteMany?: Array<PropertyMaintenanceRequestScalarWhereInput>;
}
