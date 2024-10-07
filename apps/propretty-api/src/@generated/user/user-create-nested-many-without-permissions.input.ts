import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPermissionsInput } from './user-create-without-permissions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPermissionsInput } from './user-create-or-connect-without-permissions.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutPermissionsInput {

    @Field(() => [UserCreateWithoutPermissionsInput], {nullable:true})
    @Type(() => UserCreateWithoutPermissionsInput)
    create?: Array<UserCreateWithoutPermissionsInput>;

    @Field(() => [UserCreateOrConnectWithoutPermissionsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPermissionsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutPermissionsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username'>>;
}
