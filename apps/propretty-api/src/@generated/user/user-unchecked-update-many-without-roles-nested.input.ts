import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRolesInput } from './user-create-without-roles.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRolesInput } from './user-create-or-connect-without-roles.input';
import { UserUpsertWithWhereUniqueWithoutRolesInput } from './user-upsert-with-where-unique-without-roles.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutRolesInput } from './user-update-with-where-unique-without-roles.input';
import { UserUpdateManyWithWhereWithoutRolesInput } from './user-update-many-with-where-without-roles.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutRolesNestedInput {

    @Field(() => [UserCreateWithoutRolesInput], {nullable:true})
    @Type(() => UserCreateWithoutRolesInput)
    create?: Array<UserCreateWithoutRolesInput>;

    @Field(() => [UserCreateOrConnectWithoutRolesInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRolesInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutRolesInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutRolesInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutRolesInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutRolesInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username'>>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutRolesInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutRolesInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutRolesInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutRolesInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutRolesInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutRolesInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
