import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateNestedManyWithoutRolesInput } from '../permission/permission-create-nested-many-without-roles.input';
import { UserCreateNestedManyWithoutRolesInput } from '../user/user-create-nested-many-without-roles.input';
import { Type } from 'class-transformer';

@InputType()
export class RoleCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => PermissionCreateNestedManyWithoutRolesInput, {nullable:true})
    permissions?: PermissionCreateNestedManyWithoutRolesInput;

    @Field(() => UserCreateNestedManyWithoutRolesInput, {nullable:true})
    @Type(() => UserCreateNestedManyWithoutRolesInput)
    users?: UserCreateNestedManyWithoutRolesInput;
}
