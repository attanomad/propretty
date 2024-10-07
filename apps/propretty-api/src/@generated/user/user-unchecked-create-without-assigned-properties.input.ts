import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUncheckedCreateNestedManyWithoutUsersInput } from '../role/role-unchecked-create-nested-many-without-users.input';
import { PermissionUncheckedCreateNestedManyWithoutUsersInput } from '../permission/permission-unchecked-create-nested-many-without-users.input';

@InputType()
export class UserUncheckedCreateWithoutAssignedPropertiesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    hashedPassword!: string;

    @Field(() => RoleUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput;

    @Field(() => PermissionUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    permissions?: PermissionUncheckedCreateNestedManyWithoutUsersInput;
}
