import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class LocationCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    address?: true;

    @Field(() => Boolean, {nullable:true})
    subdistrict?: true;

    @Field(() => Boolean, {nullable:true})
    district?: true;

    @Field(() => Boolean, {nullable:true})
    province?: true;

    @Field(() => Boolean, {nullable:true})
    country?: true;

    @Field(() => Boolean, {nullable:true})
    postalCode?: true;

    @Field(() => Boolean, {nullable:true})
    latitude?: true;

    @Field(() => Boolean, {nullable:true})
    longitude?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
