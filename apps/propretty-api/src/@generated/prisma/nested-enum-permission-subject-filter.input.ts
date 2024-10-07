import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionSubject } from './permission-subject.enum';

@InputType()
export class NestedEnumPermissionSubjectFilter {

    @Field(() => PermissionSubject, {nullable:true})
    equals?: keyof typeof PermissionSubject;

    @Field(() => [PermissionSubject], {nullable:true})
    in?: Array<keyof typeof PermissionSubject>;

    @Field(() => [PermissionSubject], {nullable:true})
    notIn?: Array<keyof typeof PermissionSubject>;

    @Field(() => NestedEnumPermissionSubjectFilter, {nullable:true})
    not?: NestedEnumPermissionSubjectFilter;
}
