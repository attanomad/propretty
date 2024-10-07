import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumPermissionSubjectFilter } from '../prisma/enum-permission-subject-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { RoleListRelationFilter } from '../role/role-list-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class PermissionWhereInput {

    @Field(() => [PermissionWhereInput], {nullable:true})
    AND?: Array<PermissionWhereInput>;

    @Field(() => [PermissionWhereInput], {nullable:true})
    OR?: Array<PermissionWhereInput>;

    @Field(() => [PermissionWhereInput], {nullable:true})
    NOT?: Array<PermissionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isAllowed?: BoolFilter;

    @Field(() => EnumPermissionSubjectFilter, {nullable:true})
    subject?: EnumPermissionSubjectFilter;

    @Field(() => StringFilter, {nullable:true})
    action?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    field?: StringNullableListFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    conditions?: JsonNullableFilter;

    @Field(() => RoleListRelationFilter, {nullable:true})
    roles?: RoleListRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    @Type(() => UserListRelationFilter)
    users?: UserListRelationFilter;
}
