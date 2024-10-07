import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PropertyCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    commercialStatus?: true;

    @Field(() => Boolean, {nullable:true})
    uniqueCode?: true;

    @Field(() => Boolean, {nullable:true})
    floorSize?: true;

    @Field(() => Boolean, {nullable:true})
    landSize?: true;

    @Field(() => Boolean, {nullable:true})
    furnishing?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    typeId?: true;

    @Field(() => Boolean, {nullable:true})
    locationId?: true;

    @Field(() => Boolean, {nullable:true})
    propertyOwnerId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
