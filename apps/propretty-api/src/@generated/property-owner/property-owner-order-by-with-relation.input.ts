import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PropertyOrderByRelationAggregateInput } from '../property/property-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';

@InputType()
export class PropertyOwnerOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    profilePictureUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    dob?: SortOrderInput;

    @Field(() => PropertyOrderByRelationAggregateInput, {nullable:true})
    @Type(() => PropertyOrderByRelationAggregateInput)
    properties?: PropertyOrderByRelationAggregateInput;
}
