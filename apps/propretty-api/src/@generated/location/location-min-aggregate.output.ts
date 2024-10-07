import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class LocationMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:true})
    subdistrict?: string;

    @Field(() => String, {nullable:true})
    district?: string;

    @Field(() => String, {nullable:true})
    province?: string;

    @Field(() => String, {nullable:true})
    country?: string;

    @Field(() => String, {nullable:true})
    postalCode?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    latitude?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    longitude?: Decimal;
}
