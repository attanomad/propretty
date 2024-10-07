import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { Property } from '../property/property.model';

@ObjectType()
export class Price {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    price!: Decimal;

    @Field(() => String, {nullable:false})
    propertyId!: string;

    @Field(() => Property, {nullable:false})
    property?: Property;
}
