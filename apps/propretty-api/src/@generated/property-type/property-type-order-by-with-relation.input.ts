import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PropertyOrderByRelationAggregateInput } from '../property/property-order-by-relation-aggregate.input';

@InputType()
export class PropertyTypeOrderByWithRelationInput {

    @HideField()
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @HideField()
    Property?: PropertyOrderByRelationAggregateInput;
}
