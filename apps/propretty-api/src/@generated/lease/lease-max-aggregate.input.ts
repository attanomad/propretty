import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class LeaseMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    propertyId?: true;

    @Field(() => Boolean, {nullable:true})
    tenantId?: true;

    @Field(() => Boolean, {nullable:true})
    startedDate?: true;

    @Field(() => Boolean, {nullable:true})
    endDate?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    rentAmount?: true;

    @Field(() => Boolean, {nullable:true})
    depositAmount?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
