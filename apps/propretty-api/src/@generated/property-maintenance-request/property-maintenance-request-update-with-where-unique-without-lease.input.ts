import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyMaintenanceRequestWhereUniqueInput } from './property-maintenance-request-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestUpdateWithoutLeaseInput } from './property-maintenance-request-update-without-lease.input';

@InputType()
export class PropertyMaintenanceRequestUpdateWithWhereUniqueWithoutLeaseInput {

    @Field(() => PropertyMaintenanceRequestWhereUniqueInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyMaintenanceRequestWhereUniqueInput, 'id'>;

    @Field(() => PropertyMaintenanceRequestUpdateWithoutLeaseInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestUpdateWithoutLeaseInput)
    data!: PropertyMaintenanceRequestUpdateWithoutLeaseInput;
}
