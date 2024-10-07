import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserUpdateManyWithoutRolesNestedInput } from '../user/user-update-many-without-roles-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class RoleUpdateWithoutPermissionsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => UserUpdateManyWithoutRolesNestedInput, {nullable:true})
    @Type(() => UserUpdateManyWithoutRolesNestedInput)
    users?: UserUpdateManyWithoutRolesNestedInput;
}
