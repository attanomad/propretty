import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCreateWithoutMaintenanceRequestsInput } from './property-create-without-maintenance-requests.input';
import { Type } from 'class-transformer';
import { PropertyCreateOrConnectWithoutMaintenanceRequestsInput } from './property-create-or-connect-without-maintenance-requests.input';
import { PropertyUpsertWithoutMaintenanceRequestsInput } from './property-upsert-without-maintenance-requests.input';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { PropertyUpdateToOneWithWhereWithoutMaintenanceRequestsInput } from './property-update-to-one-with-where-without-maintenance-requests.input';

@InputType()
export class PropertyUpdateOneRequiredWithoutMaintenanceRequestsNestedInput {

    @Field(() => PropertyCreateWithoutMaintenanceRequestsInput, {nullable:true})
    @Type(() => PropertyCreateWithoutMaintenanceRequestsInput)
    create?: PropertyCreateWithoutMaintenanceRequestsInput;

    @Field(() => PropertyCreateOrConnectWithoutMaintenanceRequestsInput, {nullable:true})
    @Type(() => PropertyCreateOrConnectWithoutMaintenanceRequestsInput)
    connectOrCreate?: PropertyCreateOrConnectWithoutMaintenanceRequestsInput;

    @Field(() => PropertyUpsertWithoutMaintenanceRequestsInput, {nullable:true})
    @Type(() => PropertyUpsertWithoutMaintenanceRequestsInput)
    upsert?: PropertyUpsertWithoutMaintenanceRequestsInput;

    @Field(() => PropertyWhereUniqueInput, {nullable:true})
    @Type(() => PropertyWhereUniqueInput)
    connect?: Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>;

    @Field(() => PropertyUpdateToOneWithWhereWithoutMaintenanceRequestsInput, {nullable:true})
    @Type(() => PropertyUpdateToOneWithWhereWithoutMaintenanceRequestsInput)
    update?: PropertyUpdateToOneWithWhereWithoutMaintenanceRequestsInput;
}
