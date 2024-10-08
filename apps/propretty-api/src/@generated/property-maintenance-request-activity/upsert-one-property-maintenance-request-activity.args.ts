import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyMaintenanceRequestActivityWhereUniqueInput } from './property-maintenance-request-activity-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestActivityCreateInput } from './property-maintenance-request-activity-create.input';
import { PropertyMaintenanceRequestActivityUpdateInput } from './property-maintenance-request-activity-update.input';

@ArgsType()
export class UpsertOnePropertyMaintenanceRequestActivityArgs {

    @Field(() => PropertyMaintenanceRequestActivityWhereUniqueInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestActivityWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyMaintenanceRequestActivityWhereUniqueInput, 'id'>;

    @Field(() => PropertyMaintenanceRequestActivityCreateInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestActivityCreateInput)
    create!: PropertyMaintenanceRequestActivityCreateInput;

    @Field(() => PropertyMaintenanceRequestActivityUpdateInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestActivityUpdateInput)
    update!: PropertyMaintenanceRequestActivityUpdateInput;
}
