import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserUncheckedUpdateManyWithoutRolesNestedInput } from '../user/user-unchecked-update-many-without-roles-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class RoleUncheckedUpdateWithoutPermissionsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => UserUncheckedUpdateManyWithoutRolesNestedInput, {nullable:true})
    @Type(() => UserUncheckedUpdateManyWithoutRolesNestedInput)
    users?: UserUncheckedUpdateManyWithoutRolesNestedInput;
}
