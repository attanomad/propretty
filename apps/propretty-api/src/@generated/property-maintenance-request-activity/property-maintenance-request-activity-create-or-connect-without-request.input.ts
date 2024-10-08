import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyMaintenanceRequestActivityWhereUniqueInput } from './property-maintenance-request-activity-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestActivityCreateWithoutRequestInput } from './property-maintenance-request-activity-create-without-request.input';

@InputType()
export class PropertyMaintenanceRequestActivityCreateOrConnectWithoutRequestInput {

    @Field(() => PropertyMaintenanceRequestActivityWhereUniqueInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestActivityWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyMaintenanceRequestActivityWhereUniqueInput, 'id'>;

    @Field(() => PropertyMaintenanceRequestActivityCreateWithoutRequestInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestActivityCreateWithoutRequestInput)
    create!: PropertyMaintenanceRequestActivityCreateWithoutRequestInput;
}
