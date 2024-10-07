import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutRolesInput } from './permission-create-without-roles.input';
import { Type } from 'class-transformer';
import { PermissionCreateOrConnectWithoutRolesInput } from './permission-create-or-connect-without-roles.input';
import { PermissionUpsertWithWhereUniqueWithoutRolesInput } from './permission-upsert-with-where-unique-without-roles.input';
import { Prisma } from '@prisma/client';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { PermissionUpdateWithWhereUniqueWithoutRolesInput } from './permission-update-with-where-unique-without-roles.input';
import { PermissionUpdateManyWithWhereWithoutRolesInput } from './permission-update-many-with-where-without-roles.input';
import { PermissionScalarWhereInput } from './permission-scalar-where.input';

@InputType()
export class PermissionUncheckedUpdateManyWithoutRolesNestedInput {

    @Field(() => [PermissionCreateWithoutRolesInput], {nullable:true})
    @Type(() => PermissionCreateWithoutRolesInput)
    create?: Array<PermissionCreateWithoutRolesInput>;

    @Field(() => [PermissionCreateOrConnectWithoutRolesInput], {nullable:true})
    @Type(() => PermissionCreateOrConnectWithoutRolesInput)
    connectOrCreate?: Array<PermissionCreateOrConnectWithoutRolesInput>;

    @Field(() => [PermissionUpsertWithWhereUniqueWithoutRolesInput], {nullable:true})
    @Type(() => PermissionUpsertWithWhereUniqueWithoutRolesInput)
    upsert?: Array<PermissionUpsertWithWhereUniqueWithoutRolesInput>;

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

    @Field(() => [PermissionUpdateWithWhereUniqueWithoutRolesInput], {nullable:true})
    @Type(() => PermissionUpdateWithWhereUniqueWithoutRolesInput)
    update?: Array<PermissionUpdateWithWhereUniqueWithoutRolesInput>;

    @Field(() => [PermissionUpdateManyWithWhereWithoutRolesInput], {nullable:true})
    @Type(() => PermissionUpdateManyWithWhereWithoutRolesInput)
    updateMany?: Array<PermissionUpdateManyWithWhereWithoutRolesInput>;

    @Field(() => [PermissionScalarWhereInput], {nullable:true})
    @Type(() => PermissionScalarWhereInput)
    deleteMany?: Array<PermissionScalarWhereInput>;
}
