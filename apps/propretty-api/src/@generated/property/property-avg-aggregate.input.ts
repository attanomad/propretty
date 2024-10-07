import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PropertyAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    floorSize?: true;

    @Field(() => Boolean, {nullable:true})
    landSize?: true;
}
