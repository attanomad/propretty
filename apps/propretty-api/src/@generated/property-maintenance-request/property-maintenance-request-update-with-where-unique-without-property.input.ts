import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyMaintenanceRequestWhereUniqueInput } from './property-maintenance-request-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestUpdateWithoutPropertyInput } from './property-maintenance-request-update-without-property.input';

@InputType()
export class PropertyMaintenanceRequestUpdateWithWhereUniqueWithoutPropertyInput {

    @Field(() => PropertyMaintenanceRequestWhereUniqueInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyMaintenanceRequestWhereUniqueInput, 'id'>;

    @Field(() => PropertyMaintenanceRequestUpdateWithoutPropertyInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestUpdateWithoutPropertyInput)
    data!: PropertyMaintenanceRequestUpdateWithoutPropertyInput;
}
