import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionSubject } from '../prisma/permission-subject.enum';

@InputType()
export class PermissionSubjectActionCompoundUniqueInput {

    @Field(() => PermissionSubject, {nullable:false})
    subject!: keyof typeof PermissionSubject;

    @Field(() => String, {nullable:false})
    action!: string;
}
