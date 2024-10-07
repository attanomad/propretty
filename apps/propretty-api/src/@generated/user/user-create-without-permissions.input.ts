import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateNestedManyWithoutUsersInput } from '../role/role-create-nested-many-without-users.input';
import { PropertyCreateNestedManyWithoutAssignedAgentsInput } from '../property/property-create-nested-many-without-assigned-agents.input';
import { Type } from 'class-transformer';

@InputType()
export class UserCreateWithoutPermissionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    hashedPassword!: string;

    @Field(() => RoleCreateNestedManyWithoutUsersInput, {nullable:true})
    roles?: RoleCreateNestedManyWithoutUsersInput;

    @Field(() => PropertyCreateNestedManyWithoutAssignedAgentsInput, {nullable:true})
    @Type(() => PropertyCreateNestedManyWithoutAssignedAgentsInput)
    assignedProperties?: PropertyCreateNestedManyWithoutAssignedAgentsInput;
}
