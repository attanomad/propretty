import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PermissionCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    isAllowed!: number;

    @Field(() => Int, {nullable:false})
    subject!: number;

    @Field(() => Int, {nullable:false})
    action!: number;

    @Field(() => Int, {nullable:false})
    field!: number;

    @Field(() => Int, {nullable:false})
    conditions!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
