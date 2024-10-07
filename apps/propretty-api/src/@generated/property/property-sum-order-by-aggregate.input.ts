import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PropertySumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    floorSize?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    landSize?: keyof typeof SortOrder;
}
