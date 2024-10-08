import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PropertyOrderByRelationAggregateInput } from '../property/property-order-by-relation-aggregate.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class PropertyTypeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @HideField()
    Property?: PropertyOrderByRelationAggregateInput;
}
