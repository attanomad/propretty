import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyMaintenanceRequestActivityWhereUniqueInput } from './property-maintenance-request-activity-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestActivityUpdateWithoutRequestInput } from './property-maintenance-request-activity-update-without-request.input';
import { PropertyMaintenanceRequestActivityCreateWithoutRequestInput } from './property-maintenance-request-activity-create-without-request.input';

@InputType()
export class PropertyMaintenanceRequestActivityUpsertWithWhereUniqueWithoutRequestInput {

    @Field(() => PropertyMaintenanceRequestActivityWhereUniqueInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestActivityWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyMaintenanceRequestActivityWhereUniqueInput, 'id'>;

    @Field(() => PropertyMaintenanceRequestActivityUpdateWithoutRequestInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestActivityUpdateWithoutRequestInput)
    update!: PropertyMaintenanceRequestActivityUpdateWithoutRequestInput;

    @Field(() => PropertyMaintenanceRequestActivityCreateWithoutRequestInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestActivityCreateWithoutRequestInput)
    create!: PropertyMaintenanceRequestActivityCreateWithoutRequestInput;
}
