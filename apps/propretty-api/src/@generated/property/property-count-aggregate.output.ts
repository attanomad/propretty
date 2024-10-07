import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PropertyCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    commercialStatus!: number;

    @Field(() => Int, {nullable:false})
    uniqueCode!: number;

    @Field(() => Int, {nullable:false})
    floorSize!: number;

    @Field(() => Int, {nullable:false})
    landSize!: number;

    @Field(() => Int, {nullable:false})
    furnishing!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    typeId!: number;

    @Field(() => Int, {nullable:false})
    locationId!: number;

    @Field(() => Int, {nullable:false})
    propertyOwnerId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
