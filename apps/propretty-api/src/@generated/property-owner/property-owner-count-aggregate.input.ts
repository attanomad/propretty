import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PropertyOwnerCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    firstName?: true;

    @Field(() => Boolean, {nullable:true})
    lastName?: true;

    @Field(() => Boolean, {nullable:true})
    profilePictureUrl?: true;

    @Field(() => Boolean, {nullable:true})
    dob?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
