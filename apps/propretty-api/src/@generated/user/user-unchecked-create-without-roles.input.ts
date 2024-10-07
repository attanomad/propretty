import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionUncheckedCreateNestedManyWithoutUsersInput } from '../permission/permission-unchecked-create-nested-many-without-users.input';
import { PropertyUncheckedCreateNestedManyWithoutAssignedAgentsInput } from '../property/property-unchecked-create-nested-many-without-assigned-agents.input';
import { Type } from 'class-transformer';

@InputType()
export class UserUncheckedCreateWithoutRolesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    hashedPassword!: string;

    @Field(() => PermissionUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    permissions?: PermissionUncheckedCreateNestedManyWithoutUsersInput;

    @Field(() => PropertyUncheckedCreateNestedManyWithoutAssignedAgentsInput, {nullable:true})
    @Type(() => PropertyUncheckedCreateNestedManyWithoutAssignedAgentsInput)
    assignedProperties?: PropertyUncheckedCreateNestedManyWithoutAssignedAgentsInput;
}
