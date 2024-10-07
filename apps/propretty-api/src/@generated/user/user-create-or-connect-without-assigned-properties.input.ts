import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAssignedPropertiesInput } from './user-create-without-assigned-properties.input';

@InputType()
export class UserCreateOrConnectWithoutAssignedPropertiesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username'>;

    @Field(() => UserCreateWithoutAssignedPropertiesInput, {nullable:false})
    @Type(() => UserCreateWithoutAssignedPropertiesInput)
    create!: UserCreateWithoutAssignedPropertiesInput;
}
