import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyCreateWithoutMaintenanceRequestsInput } from './property-create-without-maintenance-requests.input';

@InputType()
export class PropertyCreateOrConnectWithoutMaintenanceRequestsInput {

    @Field(() => PropertyWhereUniqueInput, {nullable:false})
    @Type(() => PropertyWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>;

    @Field(() => PropertyCreateWithoutMaintenanceRequestsInput, {nullable:false})
    @Type(() => PropertyCreateWithoutMaintenanceRequestsInput)
    create!: PropertyCreateWithoutMaintenanceRequestsInput;
}
