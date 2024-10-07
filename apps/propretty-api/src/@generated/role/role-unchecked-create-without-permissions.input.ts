import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutRolesInput } from '../user/user-unchecked-create-nested-many-without-roles.input';
import { Type } from 'class-transformer';

@InputType()
export class RoleUncheckedCreateWithoutPermissionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => UserUncheckedCreateNestedManyWithoutRolesInput, {nullable:true})
    @Type(() => UserUncheckedCreateNestedManyWithoutRolesInput)
    users?: UserUncheckedCreateNestedManyWithoutRolesInput;
}
