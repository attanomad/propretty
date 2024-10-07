import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumPermissionSubjectFieldUpdateOperationsInput } from '../prisma/enum-permission-subject-field-update-operations.input';
import { PermissionUpdatefieldInput } from './permission-updatefield.input';
import { GraphQLJSON } from 'graphql-type-json';
import { RoleUpdateManyWithoutPermissionsNestedInput } from '../role/role-update-many-without-permissions-nested.input';
import { UserUpdateManyWithoutPermissionsNestedInput } from '../user/user-update-many-without-permissions-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class PermissionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAllowed?: BoolFieldUpdateOperationsInput;

    @Field(() => EnumPermissionSubjectFieldUpdateOperationsInput, {nullable:true})
    subject?: EnumPermissionSubjectFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    action?: StringFieldUpdateOperationsInput;

    @Field(() => PermissionUpdatefieldInput, {nullable:true})
    field?: PermissionUpdatefieldInput;

    @Field(() => GraphQLJSON, {nullable:true})
    conditions?: any;

    @Field(() => RoleUpdateManyWithoutPermissionsNestedInput, {nullable:true})
    roles?: RoleUpdateManyWithoutPermissionsNestedInput;

    @Field(() => UserUpdateManyWithoutPermissionsNestedInput, {nullable:true})
    @Type(() => UserUpdateManyWithoutPermissionsNestedInput)
    users?: UserUpdateManyWithoutPermissionsNestedInput;
}
