import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereInput } from './role-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { PermissionListRelationFilter } from '../permission/permission-list-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class RoleWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => [RoleWhereInput], {nullable:true})
    AND?: Array<RoleWhereInput>;

    @Field(() => [RoleWhereInput], {nullable:true})
    OR?: Array<RoleWhereInput>;

    @Field(() => [RoleWhereInput], {nullable:true})
    NOT?: Array<RoleWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => PermissionListRelationFilter, {nullable:true})
    permissions?: PermissionListRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    @Type(() => UserListRelationFilter)
    users?: UserListRelationFilter;
}
