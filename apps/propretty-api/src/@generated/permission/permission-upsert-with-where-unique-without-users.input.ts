import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionUpdateWithoutUsersInput } from './permission-update-without-users.input';
import { PermissionCreateWithoutUsersInput } from './permission-create-without-users.input';

@InputType()
export class PermissionUpsertWithWhereUniqueWithoutUsersInput {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    @Type(() => PermissionWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionWhereUniqueInput, 'id' | 'subject_action'>;

    @Field(() => PermissionUpdateWithoutUsersInput, {nullable:false})
    @Type(() => PermissionUpdateWithoutUsersInput)
    update!: PermissionUpdateWithoutUsersInput;

    @Field(() => PermissionCreateWithoutUsersInput, {nullable:false})
    @Type(() => PermissionCreateWithoutUsersInput)
    create!: PermissionCreateWithoutUsersInput;
}
