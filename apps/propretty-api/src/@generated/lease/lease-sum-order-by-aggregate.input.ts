import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class LeaseSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    rentAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    depositAmount?: keyof typeof SortOrder;
}
