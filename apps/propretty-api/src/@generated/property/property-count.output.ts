import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PropertyCount {

    @Field(() => Int, {nullable:false})
    mediaList?: number;

    @Field(() => Int, {nullable:false})
    priceList?: number;

    @Field(() => Int, {nullable:false})
    amenities?: number;

    @Field(() => Int, {nullable:false})
    PropertyListing?: number;

    @Field(() => Int, {nullable:false})
    assignedAgents?: number;
}
