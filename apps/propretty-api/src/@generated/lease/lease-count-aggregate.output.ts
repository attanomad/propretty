import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class LeaseCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    propertyId!: number;

    @Field(() => Int, {nullable:false})
    tenantId!: number;

    @Field(() => Int, {nullable:false})
    startedDate!: number;

    @Field(() => Int, {nullable:false})
    endDate!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    rentAmount!: number;

    @Field(() => Int, {nullable:false})
    depositAmount!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
