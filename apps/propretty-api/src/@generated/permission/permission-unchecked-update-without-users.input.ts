import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumPermissionSubjectFieldUpdateOperationsInput } from '../prisma/enum-permission-subject-field-update-operations.input';
import { PermissionUpdatefieldInput } from './permission-updatefield.input';
import { GraphQLJSON } from 'graphql-type-json';
import { RoleUncheckedUpdateManyWithoutPermissionsNestedInput } from '../role/role-unchecked-update-many-without-permissions-nested.input';

@InputType()
export class PermissionUncheckedUpdateWithoutUsersInput {

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

    @Field(() => RoleUncheckedUpdateManyWithoutPermissionsNestedInput, {nullable:true})
    roles?: RoleUncheckedUpdateManyWithoutPermissionsNestedInput;
}
