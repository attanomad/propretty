import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class LeaseAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    rentAmount?: true;

    @Field(() => Boolean, {nullable:true})
    depositAmount?: true;
}
