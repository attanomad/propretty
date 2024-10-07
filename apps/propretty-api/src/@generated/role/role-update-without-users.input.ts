import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { PermissionUpdateManyWithoutRolesNestedInput } from '../permission/permission-update-many-without-roles-nested.input';

@InputType()
export class RoleUpdateWithoutUsersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => PermissionUpdateManyWithoutRolesNestedInput, {nullable:true})
    permissions?: PermissionUpdateManyWithoutRolesNestedInput;
}
