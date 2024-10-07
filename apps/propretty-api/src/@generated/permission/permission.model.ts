import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PermissionSubject } from '../prisma/permission-subject.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { Role } from '../role/role.model';
import { User } from '../user/user.model';
import { PermissionCount } from './permission-count.output';

@ObjectType()
export class Permission {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isAllowed!: boolean;

    @Field(() => PermissionSubject, {nullable:false})
    subject!: keyof typeof PermissionSubject;

    @Field(() => String, {nullable:false})
    action!: string;

    @Field(() => [String], {nullable:true})
    field!: Array<string>;

    @Field(() => GraphQLJSON, {nullable:true})
    conditions!: any | null;

    @Field(() => [Role], {nullable:true})
    roles?: Array<Role>;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => PermissionCount, {nullable:false})
    _count?: PermissionCount;
}
