import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutUsersInput } from './permission-create-without-users.input';
import { Type } from 'class-transformer';
import { PermissionCreateOrConnectWithoutUsersInput } from './permission-create-or-connect-without-users.input';
import { PermissionUpsertWithWhereUniqueWithoutUsersInput } from './permission-upsert-with-where-unique-without-users.input';
import { Prisma } from '@prisma/client';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { PermissionUpdateWithWhereUniqueWithoutUsersInput } from './permission-update-with-where-unique-without-users.input';
import { PermissionUpdateManyWithWhereWithoutUsersInput } from './permission-update-many-with-where-without-users.input';
import { PermissionScalarWhereInput } from './permission-scalar-where.input';

@InputType()
export class PermissionUpdateManyWithoutUsersNestedInput {

    @Field(() => [PermissionCreateWithoutUsersInput], {nullable:true})
    @Type(() => PermissionCreateWithoutUsersInput)
    create?: Array<PermissionCreateWithoutUsersInput>;

    @Field(() => [PermissionCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => PermissionCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<PermissionCreateOrConnectWithoutUsersInput>;

    @Field(() => [PermissionUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => PermissionUpsertWithWhereUniqueWithoutUsersInput)
    upsert?: Array<PermissionUpsertWithWhereUniqueWithoutUsersInput>;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PermissionWhereUniqueInput, 'id' | 'subject_action'>>;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PermissionWhereUniqueInput, 'id' | 'subject_action'>>;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PermissionWhereUniqueInput, 'id' | 'subject_action'>>;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PermissionWhereUniqueInput, 'id' | 'subject_action'>>;

    @Field(() => [PermissionUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => PermissionUpdateWithWhereUniqueWithoutUsersInput)
    update?: Array<PermissionUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [PermissionUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    @Type(() => PermissionUpdateManyWithWhereWithoutUsersInput)
    updateMany?: Array<PermissionUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [PermissionScalarWhereInput], {nullable:true})
    @Type(() => PermissionScalarWhereInput)
    deleteMany?: Array<PermissionScalarWhereInput>;
}
