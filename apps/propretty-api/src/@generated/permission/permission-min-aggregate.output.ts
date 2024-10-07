import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PermissionSubject } from '../prisma/permission-subject.enum';

@ObjectType()
export class PermissionMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    isAllowed?: boolean;

    @Field(() => PermissionSubject, {nullable:true})
    subject?: keyof typeof PermissionSubject;

    @Field(() => String, {nullable:true})
    action?: string;
}
