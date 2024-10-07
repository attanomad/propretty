import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateNestedManyWithoutUsersInput } from '../role/role-create-nested-many-without-users.input';
import { PermissionCreateNestedManyWithoutUsersInput } from '../permission/permission-create-nested-many-without-users.input';

@InputType()
export class UserCreateWithoutAssignedPropertiesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    hashedPassword!: string;

    @Field(() => RoleCreateNestedManyWithoutUsersInput, {nullable:true})
    roles?: RoleCreateNestedManyWithoutUsersInput;

    @Field(() => PermissionCreateNestedManyWithoutUsersInput, {nullable:true})
    permissions?: PermissionCreateNestedManyWithoutUsersInput;
}
