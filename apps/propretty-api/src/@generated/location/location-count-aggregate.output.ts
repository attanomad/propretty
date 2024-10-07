import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class LocationCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    address!: number;

    @Field(() => Int, {nullable:false})
    subdistrict!: number;

    @Field(() => Int, {nullable:false})
    district!: number;

    @Field(() => Int, {nullable:false})
    province!: number;

    @Field(() => Int, {nullable:false})
    country!: number;

    @Field(() => Int, {nullable:false})
    postalCode!: number;

    @Field(() => Int, {nullable:false})
    latitude!: number;

    @Field(() => Int, {nullable:false})
    longitude!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
