import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestCreateWithoutActivitiesInput } from './property-maintenance-request-create-without-activities.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestCreateOrConnectWithoutActivitiesInput } from './property-maintenance-request-create-or-connect-without-activities.input';
import { Prisma } from '@prisma/client';
import { PropertyMaintenanceRequestWhereUniqueInput } from './property-maintenance-request-where-unique.input';

@InputType()
export class PropertyMaintenanceRequestCreateNestedOneWithoutActivitiesInput {

    @Field(() => PropertyMaintenanceRequestCreateWithoutActivitiesInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestCreateWithoutActivitiesInput)
    create?: PropertyMaintenanceRequestCreateWithoutActivitiesInput;

    @Field(() => PropertyMaintenanceRequestCreateOrConnectWithoutActivitiesInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestCreateOrConnectWithoutActivitiesInput)
    connectOrCreate?: PropertyMaintenanceRequestCreateOrConnectWithoutActivitiesInput;

    @Field(() => PropertyMaintenanceRequestWhereUniqueInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestWhereUniqueInput)
    connect?: Prisma.AtLeast<PropertyMaintenanceRequestWhereUniqueInput, 'id'>;
}
