import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPermissionsInput } from './user-create-without-permissions.input';

@InputType()
export class UserCreateOrConnectWithoutPermissionsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username'>;

    @Field(() => UserCreateWithoutPermissionsInput, {nullable:false})
    @Type(() => UserCreateWithoutPermissionsInput)
    create!: UserCreateWithoutPermissionsInput;
}
