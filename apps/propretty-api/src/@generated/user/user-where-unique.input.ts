import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { RoleListRelationFilter } from '../role/role-list-relation-filter.input';
import { PermissionListRelationFilter } from '../permission/permission-list-relation-filter.input';
import { PropertyListRelationFilter } from '../property/property-list-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class UserWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    hashedPassword?: StringFilter;

    @Field(() => RoleListRelationFilter, {nullable:true})
    roles?: RoleListRelationFilter;

    @Field(() => PermissionListRelationFilter, {nullable:true})
    permissions?: PermissionListRelationFilter;

    @Field(() => PropertyListRelationFilter, {nullable:true})
    @Type(() => PropertyListRelationFilter)
    assignedProperties?: PropertyListRelationFilter;
}
