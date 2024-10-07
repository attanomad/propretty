import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionSubject } from '../prisma/permission-subject.enum';
import { PermissionCreatefieldInput } from './permission-createfield.input';
import { GraphQLJSON } from 'graphql-type-json';
import { RoleCreateNestedManyWithoutPermissionsInput } from '../role/role-create-nested-many-without-permissions.input';
import { UserCreateNestedManyWithoutPermissionsInput } from '../user/user-create-nested-many-without-permissions.input';
import { Type } from 'class-transformer';

@InputType()
export class PermissionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    isAllowed?: boolean;

    @Field(() => PermissionSubject, {nullable:false})
    subject!: keyof typeof PermissionSubject;

    @Field(() => String, {nullable:false})
    action!: string;

    @Field(() => PermissionCreatefieldInput, {nullable:true})
    field?: PermissionCreatefieldInput;

    @Field(() => GraphQLJSON, {nullable:true})
    conditions?: any;

    @Field(() => RoleCreateNestedManyWithoutPermissionsInput, {nullable:true})
    roles?: RoleCreateNestedManyWithoutPermissionsInput;

    @Field(() => UserCreateNestedManyWithoutPermissionsInput, {nullable:true})
    @Type(() => UserCreateNestedManyWithoutPermissionsInput)
    users?: UserCreateNestedManyWithoutPermissionsInput;
}
