import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PropertySumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    floorSize?: true;

    @Field(() => Boolean, {nullable:true})
    landSize?: true;
}
