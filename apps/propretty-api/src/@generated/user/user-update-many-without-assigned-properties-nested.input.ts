import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAssignedPropertiesInput } from './user-create-without-assigned-properties.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAssignedPropertiesInput } from './user-create-or-connect-without-assigned-properties.input';
import { UserUpsertWithWhereUniqueWithoutAssignedPropertiesInput } from './user-upsert-with-where-unique-without-assigned-properties.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutAssignedPropertiesInput } from './user-update-with-where-unique-without-assigned-properties.input';
import { UserUpdateManyWithWhereWithoutAssignedPropertiesInput } from './user-update-many-with-where-without-assigned-properties.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutAssignedPropertiesNestedInput {

    @Field(() => [UserCreateWithoutAssignedPropertiesInput], {nullable:true})
    @Type(() => UserCreateWithoutAssignedPropertiesInput)
    create?: Array<UserCreateWithoutAssignedPropertiesInput>;

    @Field(() => [UserCreateOrConnectWithoutAssignedPropertiesInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAssignedPropertiesInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutAssignedPropertiesInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutAssignedPropertiesInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutAssignedPropertiesInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutAssignedPropertiesInput>;

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

    @Field(() => [UserUpdateWithWhereUniqueWithoutAssignedPropertiesInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutAssignedPropertiesInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutAssignedPropertiesInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutAssignedPropertiesInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutAssignedPropertiesInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutAssignedPropertiesInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
