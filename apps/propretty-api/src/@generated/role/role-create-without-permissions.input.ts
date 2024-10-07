import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutRolesInput } from '../user/user-create-nested-many-without-roles.input';
import { Type } from 'class-transformer';

@InputType()
export class RoleCreateWithoutPermissionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => UserCreateNestedManyWithoutRolesInput, {nullable:true})
    @Type(() => UserCreateNestedManyWithoutRolesInput)
    users?: UserCreateNestedManyWithoutRolesInput;
}
