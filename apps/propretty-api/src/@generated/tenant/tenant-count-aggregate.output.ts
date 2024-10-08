import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TenantCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    nationalId!: number;

    @Field(() => Int, {nullable:false})
    firstName!: number;

    @Field(() => Int, {nullable:false})
    lastName!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    phoneNumber!: number;

    @Field(() => Int, {nullable:false})
    dateOfBirth!: number;

    @Field(() => Int, {nullable:false})
    gender!: number;

    @Field(() => Int, {nullable:false})
    address!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
