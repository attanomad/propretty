import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { RoleUpdateManyWithoutUsersNestedInput } from '../role/role-update-many-without-users-nested.input';
import { PermissionUpdateManyWithoutUsersNestedInput } from '../permission/permission-update-many-without-users-nested.input';

@InputType()
export class UserUpdateWithoutAssignedPropertiesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    hashedPassword?: StringFieldUpdateOperationsInput;

    @Field(() => RoleUpdateManyWithoutUsersNestedInput, {nullable:true})
    roles?: RoleUpdateManyWithoutUsersNestedInput;

    @Field(() => PermissionUpdateManyWithoutUsersNestedInput, {nullable:true})
    permissions?: PermissionUpdateManyWithoutUsersNestedInput;
}
