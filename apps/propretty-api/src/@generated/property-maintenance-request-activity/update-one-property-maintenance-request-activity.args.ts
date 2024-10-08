import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestActivityUpdateInput } from './property-maintenance-request-activity-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PropertyMaintenanceRequestActivityWhereUniqueInput } from './property-maintenance-request-activity-where-unique.input';

@ArgsType()
export class UpdateOnePropertyMaintenanceRequestActivityArgs {

    @Field(() => PropertyMaintenanceRequestActivityUpdateInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestActivityUpdateInput)
    data!: PropertyMaintenanceRequestActivityUpdateInput;

    @Field(() => PropertyMaintenanceRequestActivityWhereUniqueInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestActivityWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyMaintenanceRequestActivityWhereUniqueInput, 'id'>;
}
