import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionSubject } from './permission-subject.enum';
import { NestedEnumPermissionSubjectFilter } from './nested-enum-permission-subject-filter.input';

@InputType()
export class EnumPermissionSubjectFilter {

    @Field(() => PermissionSubject, {nullable:true})
    equals?: keyof typeof PermissionSubject;

    @Field(() => [PermissionSubject], {nullable:true})
    in?: Array<keyof typeof PermissionSubject>;

    @Field(() => [PermissionSubject], {nullable:true})
    notIn?: Array<keyof typeof PermissionSubject>;

    @Field(() => NestedEnumPermissionSubjectFilter, {nullable:true})
    not?: NestedEnumPermissionSubjectFilter;
}
