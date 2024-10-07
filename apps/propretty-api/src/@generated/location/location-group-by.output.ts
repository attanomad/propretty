import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { LocationCountAggregate } from './location-count-aggregate.output';
import { LocationAvgAggregate } from './location-avg-aggregate.output';
import { LocationSumAggregate } from './location-sum-aggregate.output';
import { LocationMinAggregate } from './location-min-aggregate.output';
import { LocationMaxAggregate } from './location-max-aggregate.output';

@ObjectType()
export class LocationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

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

    @Field(() => LocationCountAggregate, {nullable:true})
    _count?: LocationCountAggregate;

    @Field(() => LocationAvgAggregate, {nullable:true})
    _avg?: LocationAvgAggregate;

    @Field(() => LocationSumAggregate, {nullable:true})
    _sum?: LocationSumAggregate;

    @Field(() => LocationMinAggregate, {nullable:true})
    _min?: LocationMinAggregate;

    @Field(() => LocationMaxAggregate, {nullable:true})
    _max?: LocationMaxAggregate;
}
