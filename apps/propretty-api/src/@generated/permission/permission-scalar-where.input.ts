import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumPermissionSubjectFilter } from '../prisma/enum-permission-subject-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';

@InputType()
export class PermissionScalarWhereInput {

    @Field(() => [PermissionScalarWhereInput], {nullable:true})
    AND?: Array<PermissionScalarWhereInput>;

    @Field(() => [PermissionScalarWhereInput], {nullable:true})
    OR?: Array<PermissionScalarWhereInput>;

    @Field(() => [PermissionScalarWhereInput], {nullable:true})
    NOT?: Array<PermissionScalarWhereInput>;

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
}
