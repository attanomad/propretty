import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { Property } from '../property/property.model';
import { LocationCount } from './location-count.output';

@ObjectType()
export class Location {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    address!: string | null;

    @Field(() => String, {nullable:true})
    subdistrict!: string | null;

    @Field(() => String, {nullable:true})
    district!: string | null;

    @Field(() => String, {nullable:true})
    province!: string | null;

    @Field(() => String, {nullable:true})
    country!: string | null;

    @Field(() => String, {nullable:true})
    postalCode!: string | null;

    @Field(() => GraphQLDecimal, {nullable:true})
    latitude!: Decimal | null;

    @Field(() => GraphQLDecimal, {nullable:true})
    longitude!: Decimal | null;

    @Field(() => [Property], {nullable:true})
    Property?: Array<Property>;

    @Field(() => LocationCount, {nullable:false})
    _count?: LocationCount;
}
