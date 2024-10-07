import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutRolesInput } from './user-update-without-roles.input';
import { UserCreateWithoutRolesInput } from './user-create-without-roles.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutRolesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username'>;

    @Field(() => UserUpdateWithoutRolesInput, {nullable:false})
    @Type(() => UserUpdateWithoutRolesInput)
    update!: UserUpdateWithoutRolesInput;

    @Field(() => UserCreateWithoutRolesInput, {nullable:false})
    @Type(() => UserCreateWithoutRolesInput)
    create!: UserCreateWithoutRolesInput;
}
