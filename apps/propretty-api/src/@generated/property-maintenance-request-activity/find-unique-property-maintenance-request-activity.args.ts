import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyMaintenanceRequestActivityWhereUniqueInput } from './property-maintenance-request-activity-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePropertyMaintenanceRequestActivityArgs {

    @Field(() => PropertyMaintenanceRequestActivityWhereUniqueInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestActivityWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyMaintenanceRequestActivityWhereUniqueInput, 'id'>;
}
