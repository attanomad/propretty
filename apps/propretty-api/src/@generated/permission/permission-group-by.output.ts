import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PermissionSubject } from '../prisma/permission-subject.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { PermissionCountAggregate } from './permission-count-aggregate.output';
import { PermissionMinAggregate } from './permission-min-aggregate.output';
import { PermissionMaxAggregate } from './permission-max-aggregate.output';

@ObjectType()
export class PermissionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Boolean, {nullable:false})
    isAllowed!: boolean;

    @Field(() => PermissionSubject, {nullable:false})
    subject!: keyof typeof PermissionSubject;

    @Field(() => String, {nullable:false})
    action!: string;

    @Field(() => [String], {nullable:true})
    field?: Array<string>;

    @Field(() => GraphQLJSON, {nullable:true})
    conditions?: any;

    @Field(() => PermissionCountAggregate, {nullable:true})
    _count?: PermissionCountAggregate;

    @Field(() => PermissionMinAggregate, {nullable:true})
    _min?: PermissionMinAggregate;

    @Field(() => PermissionMaxAggregate, {nullable:true})
    _max?: PermissionMaxAggregate;
}
