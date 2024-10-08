import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyMaintenanceRequestWhereUniqueInput } from './property-maintenance-request-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestCreateInput } from './property-maintenance-request-create.input';
import { PropertyMaintenanceRequestUpdateInput } from './property-maintenance-request-update.input';

@ArgsType()
export class UpsertOnePropertyMaintenanceRequestArgs {

    @Field(() => PropertyMaintenanceRequestWhereUniqueInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyMaintenanceRequestWhereUniqueInput, 'id'>;

    @Field(() => PropertyMaintenanceRequestCreateInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestCreateInput)
    create!: PropertyMaintenanceRequestCreateInput;

    @Field(() => PropertyMaintenanceRequestUpdateInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestUpdateInput)
    update!: PropertyMaintenanceRequestUpdateInput;
}
