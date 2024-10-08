import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyMaintenanceRequestWhereUniqueInput } from './property-maintenance-request-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestCreateWithoutPropertyInput } from './property-maintenance-request-create-without-property.input';

@InputType()
export class PropertyMaintenanceRequestCreateOrConnectWithoutPropertyInput {

    @Field(() => PropertyMaintenanceRequestWhereUniqueInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyMaintenanceRequestWhereUniqueInput, 'id'>;

    @Field(() => PropertyMaintenanceRequestCreateWithoutPropertyInput, {nullable:false})
    @Type(() => PropertyMaintenanceRequestCreateWithoutPropertyInput)
    create!: PropertyMaintenanceRequestCreateWithoutPropertyInput;
}
