import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutRolesInput } from './permission-create-without-roles.input';
import { Type } from 'class-transformer';
import { PermissionCreateOrConnectWithoutRolesInput } from './permission-create-or-connect-without-roles.input';
import { Prisma } from '@prisma/client';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';

@InputType()
export class PermissionUncheckedCreateNestedManyWithoutRolesInput {

    @Field(() => [PermissionCreateWithoutRolesInput], {nullable:true})
    @Type(() => PermissionCreateWithoutRolesInput)
    create?: Array<PermissionCreateWithoutRolesInput>;

    @Field(() => [PermissionCreateOrConnectWithoutRolesInput], {nullable:true})
    @Type(() => PermissionCreateOrConnectWithoutRolesInput)
    connectOrCreate?: Array<PermissionCreateOrConnectWithoutRolesInput>;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PermissionWhereUniqueInput, 'id' | 'subject_action'>>;
}
