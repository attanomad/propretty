import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class PriceMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    currency?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    price?: Decimal;

    @Field(() => String, {nullable:true})
    propertyId?: string;
}
