import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateNestedManyWithoutUsersInput } from '../permission/permission-create-nested-many-without-users.input';
import { PropertyCreateNestedManyWithoutAssignedAgentsInput } from '../property/property-create-nested-many-without-assigned-agents.input';
import { Type } from 'class-transformer';

@InputType()
export class UserCreateWithoutRolesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    hashedPassword!: string;

    @Field(() => PermissionCreateNestedManyWithoutUsersInput, {nullable:true})
    permissions?: PermissionCreateNestedManyWithoutUsersInput;

    @Field(() => PropertyCreateNestedManyWithoutAssignedAgentsInput, {nullable:true})
    @Type(() => PropertyCreateNestedManyWithoutAssignedAgentsInput)
    assignedProperties?: PropertyCreateNestedManyWithoutAssignedAgentsInput;
}
