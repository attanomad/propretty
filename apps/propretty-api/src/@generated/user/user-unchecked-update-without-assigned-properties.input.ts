import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { RoleUncheckedUpdateManyWithoutUsersNestedInput } from '../role/role-unchecked-update-many-without-users-nested.input';
import { PermissionUncheckedUpdateManyWithoutUsersNestedInput } from '../permission/permission-unchecked-update-many-without-users-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutAssignedPropertiesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    hashedPassword?: StringFieldUpdateOperationsInput;

    @Field(() => RoleUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput;

    @Field(() => PermissionUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    permissions?: PermissionUncheckedUpdateManyWithoutUsersNestedInput;
}
