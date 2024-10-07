import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PermissionUncheckedUpdateManyWithoutUsersNestedInput } from '../permission/permission-unchecked-update-many-without-users-nested.input';
import { PropertyUncheckedUpdateManyWithoutAssignedAgentsNestedInput } from '../property/property-unchecked-update-many-without-assigned-agents-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class UserUncheckedUpdateWithoutRolesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    hashedPassword?: StringFieldUpdateOperationsInput;

    @Field(() => PermissionUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    permissions?: PermissionUncheckedUpdateManyWithoutUsersNestedInput;

    @Field(() => PropertyUncheckedUpdateManyWithoutAssignedAgentsNestedInput, {nullable:true})
    @Type(() => PropertyUncheckedUpdateManyWithoutAssignedAgentsNestedInput)
    assignedProperties?: PropertyUncheckedUpdateManyWithoutAssignedAgentsNestedInput;
}
