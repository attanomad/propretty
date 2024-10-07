import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionSubject } from './permission-subject.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPermissionSubjectFilter } from './nested-enum-permission-subject-filter.input';

@InputType()
export class NestedEnumPermissionSubjectWithAggregatesFilter {

    @Field(() => PermissionSubject, {nullable:true})
    equals?: keyof typeof PermissionSubject;

    @Field(() => [PermissionSubject], {nullable:true})
    in?: Array<keyof typeof PermissionSubject>;

    @Field(() => [PermissionSubject], {nullable:true})
    notIn?: Array<keyof typeof PermissionSubject>;

    @Field(() => NestedEnumPermissionSubjectWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPermissionSubjectWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPermissionSubjectFilter, {nullable:true})
    _min?: NestedEnumPermissionSubjectFilter;

    @Field(() => NestedEnumPermissionSubjectFilter, {nullable:true})
    _max?: NestedEnumPermissionSubjectFilter;
}
