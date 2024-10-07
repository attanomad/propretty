import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionSubject } from '../prisma/permission-subject.enum';
import { PermissionCreatefieldInput } from './permission-createfield.input';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class PermissionCreateManyInput {

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
}
