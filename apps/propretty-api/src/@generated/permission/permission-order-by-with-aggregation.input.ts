import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PermissionCountOrderByAggregateInput } from './permission-count-order-by-aggregate.input';
import { PermissionMaxOrderByAggregateInput } from './permission-max-order-by-aggregate.input';
import { PermissionMinOrderByAggregateInput } from './permission-min-order-by-aggregate.input';

@InputType()
export class PermissionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isAllowed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    subject?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    action?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    field?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    conditions?: SortOrderInput;

    @Field(() => PermissionCountOrderByAggregateInput, {nullable:true})
    _count?: PermissionCountOrderByAggregateInput;

    @Field(() => PermissionMaxOrderByAggregateInput, {nullable:true})
    _max?: PermissionMaxOrderByAggregateInput;

    @Field(() => PermissionMinOrderByAggregateInput, {nullable:true})
    _min?: PermissionMinOrderByAggregateInput;
}
