import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class LocationAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    latitude?: true;

    @Field(() => Boolean, {nullable:true})
    longitude?: true;
}
