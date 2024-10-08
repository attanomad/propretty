import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyMaintenanceRequestWhereUniqueInput } from './property-maintenance-request-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestCreateWithoutActivitiesInput } from './property-maintenance-request-create-without-activities.input';

@InputType()
export class PropertyMaintenanceRequestCreateOrConnectWithoutActivitiesInput {

    @Field(() => PropertyMaintenanceRequestWhereUniqueInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyMaintenanceRequestWhereUniqueInput, 'id'>;

    @Field(() => PropertyMaintenanceRequestCreateWithoutActivitiesInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestCreateWithoutActivitiesInput)
    create!: PropertyMaintenanceRequestCreateWithoutActivitiesInput;
}
