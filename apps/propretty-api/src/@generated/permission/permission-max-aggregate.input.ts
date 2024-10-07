import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PermissionMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    isAllowed?: true;

    @Field(() => Boolean, {nullable:true})
    subject?: true;

    @Field(() => Boolean, {nullable:true})
    action?: true;
}
