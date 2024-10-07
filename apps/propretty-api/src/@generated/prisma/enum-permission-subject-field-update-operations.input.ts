import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionSubject } from './permission-subject.enum';

@InputType()
export class EnumPermissionSubjectFieldUpdateOperationsInput {

    @Field(() => PermissionSubject, {nullable:true})
    set?: keyof typeof PermissionSubject;
}
