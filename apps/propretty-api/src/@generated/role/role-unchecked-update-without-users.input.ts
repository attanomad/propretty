import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { PermissionUncheckedUpdateManyWithoutRolesNestedInput } from '../permission/permission-unchecked-update-many-without-roles-nested.input';

@InputType()
export class RoleUncheckedUpdateWithoutUsersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => PermissionUncheckedUpdateManyWithoutRolesNestedInput, {nullable:true})
    permissions?: PermissionUncheckedUpdateManyWithoutRolesNestedInput;
}
