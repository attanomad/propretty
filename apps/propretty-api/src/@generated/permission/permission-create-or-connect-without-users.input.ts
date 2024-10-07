import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionCreateWithoutUsersInput } from './permission-create-without-users.input';

@InputType()
export class PermissionCreateOrConnectWithoutUsersInput {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    @Type(() => PermissionWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionWhereUniqueInput, 'id' | 'subject_action'>;

    @Field(() => PermissionCreateWithoutUsersInput, {nullable:false})
    @Type(() => PermissionCreateWithoutUsersInput)
    create!: PermissionCreateWithoutUsersInput;
}
