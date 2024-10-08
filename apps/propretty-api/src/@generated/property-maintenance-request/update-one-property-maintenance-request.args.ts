import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestUpdateInput } from './property-maintenance-request-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PropertyMaintenanceRequestWhereUniqueInput } from './property-maintenance-request-where-unique.input';

@ArgsType()
export class UpdateOnePropertyMaintenanceRequestArgs {

    @Field(() => PropertyMaintenanceRequestUpdateInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestUpdateInput)
    data!: PropertyMaintenanceRequestUpdateInput;

    @Field(() => PropertyMaintenanceRequestWhereUniqueInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyMaintenanceRequestWhereUniqueInput, 'id'>;
}
