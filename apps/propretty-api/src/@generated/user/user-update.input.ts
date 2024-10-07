import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { RoleUpdateManyWithoutUsersNestedInput } from '../role/role-update-many-without-users-nested.input';
import { PermissionUpdateManyWithoutUsersNestedInput } from '../permission/permission-update-many-without-users-nested.input';
import { PropertyUpdateManyWithoutAssignedAgentsNestedInput } from '../property/property-update-many-without-assigned-agents-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class UserUpdateInput {

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

    @Field(() => PropertyUpdateManyWithoutAssignedAgentsNestedInput, {nullable:true})
    @Type(() => PropertyUpdateManyWithoutAssignedAgentsNestedInput)
    assignedProperties?: PropertyUpdateManyWithoutAssignedAgentsNestedInput;
}
