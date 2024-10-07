import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionUpdateWithoutRolesInput } from './permission-update-without-roles.input';
import { PermissionCreateWithoutRolesInput } from './permission-create-without-roles.input';

@InputType()
export class PermissionUpsertWithWhereUniqueWithoutRolesInput {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    @Type(() => PermissionWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionWhereUniqueInput, 'id' | 'subject_action'>;

    @Field(() => PermissionUpdateWithoutRolesInput, {nullable:false})
    @Type(() => PermissionUpdateWithoutRolesInput)
    update!: PermissionUpdateWithoutRolesInput;

    @Field(() => PermissionCreateWithoutRolesInput, {nullable:false})
    @Type(() => PermissionCreateWithoutRolesInput)
    create!: PermissionCreateWithoutRolesInput;
}
