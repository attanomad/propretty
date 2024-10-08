import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestCreateWithoutActivitiesInput } from './property-maintenance-request-create-without-activities.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestCreateOrConnectWithoutActivitiesInput } from './property-maintenance-request-create-or-connect-without-activities.input';
import { PropertyMaintenanceRequestUpsertWithoutActivitiesInput } from './property-maintenance-request-upsert-without-activities.input';
import { Prisma } from '@prisma/client';
import { PropertyMaintenanceRequestWhereUniqueInput } from './property-maintenance-request-where-unique.input';
import { PropertyMaintenanceRequestUpdateToOneWithWhereWithoutActivitiesInput } from './property-maintenance-request-update-to-one-with-where-without-activities.input';

@InputType()
export class PropertyMaintenanceRequestUpdateOneRequiredWithoutActivitiesNestedInput {

    @Field(() => PropertyMaintenanceRequestCreateWithoutActivitiesInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestCreateWithoutActivitiesInput)
    create?: PropertyMaintenanceRequestCreateWithoutActivitiesInput;

    @Field(() => PropertyMaintenanceRequestCreateOrConnectWithoutActivitiesInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestCreateOrConnectWithoutActivitiesInput)
    connectOrCreate?: PropertyMaintenanceRequestCreateOrConnectWithoutActivitiesInput;

    @Field(() => PropertyMaintenanceRequestUpsertWithoutActivitiesInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestUpsertWithoutActivitiesInput)
    upsert?: PropertyMaintenanceRequestUpsertWithoutActivitiesInput;

    @Field(() => PropertyMaintenanceRequestWhereUniqueInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestWhereUniqueInput)
    connect?: Prisma.AtLeast<PropertyMaintenanceRequestWhereUniqueInput, 'id'>;

    @Field(() => PropertyMaintenanceRequestUpdateToOneWithWhereWithoutActivitiesInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestUpdateToOneWithWhereWithoutActivitiesInput)
    update?: PropertyMaintenanceRequestUpdateToOneWithWhereWithoutActivitiesInput;
}
