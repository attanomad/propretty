import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAssignedPropertiesInput } from './user-create-without-assigned-properties.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAssignedPropertiesInput } from './user-create-or-connect-without-assigned-properties.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutAssignedPropertiesInput {

    @Field(() => [UserCreateWithoutAssignedPropertiesInput], {nullable:true})
    @Type(() => UserCreateWithoutAssignedPropertiesInput)
    create?: Array<UserCreateWithoutAssignedPropertiesInput>;

    @Field(() => [UserCreateOrConnectWithoutAssignedPropertiesInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAssignedPropertiesInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutAssignedPropertiesInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username'>>;
}
