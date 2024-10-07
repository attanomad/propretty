import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class PropertySumAggregate {

    @Field(() => GraphQLDecimal, {nullable:true})
    floorSize?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    landSize?: Decimal;
}
