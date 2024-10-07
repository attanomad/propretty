import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { EnumPermissionSubjectWithAggregatesFilter } from '../prisma/enum-permission-subject-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';

@InputType()
export class PermissionScalarWhereWithAggregatesInput {

    @Field(() => [PermissionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PermissionScalarWhereWithAggregatesInput>;

    @Field(() => [PermissionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PermissionScalarWhereWithAggregatesInput>;

    @Field(() => [PermissionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PermissionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isAllowed?: BoolWithAggregatesFilter;

    @Field(() => EnumPermissionSubjectWithAggregatesFilter, {nullable:true})
    subject?: EnumPermissionSubjectWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    action?: StringWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    field?: StringNullableListFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    conditions?: JsonNullableWithAggregatesFilter;
}
