import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { LeaseCountOrderByAggregateInput } from './lease-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { LeaseAvgOrderByAggregateInput } from './lease-avg-order-by-aggregate.input';
import { LeaseMaxOrderByAggregateInput } from './lease-max-order-by-aggregate.input';
import { LeaseMinOrderByAggregateInput } from './lease-min-order-by-aggregate.input';
import { LeaseSumOrderByAggregateInput } from './lease-sum-order-by-aggregate.input';

@InputType()
export class LeaseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    propertyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tenantId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startedDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rentAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    depositAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => LeaseCountOrderByAggregateInput, {nullable:true})
    @Type(() => LeaseCountOrderByAggregateInput)
    _count?: LeaseCountOrderByAggregateInput;

    @Field(() => LeaseAvgOrderByAggregateInput, {nullable:true})
    @Type(() => LeaseAvgOrderByAggregateInput)
    _avg?: LeaseAvgOrderByAggregateInput;

    @Field(() => LeaseMaxOrderByAggregateInput, {nullable:true})
    @Type(() => LeaseMaxOrderByAggregateInput)
    _max?: LeaseMaxOrderByAggregateInput;

    @Field(() => LeaseMinOrderByAggregateInput, {nullable:true})
    @Type(() => LeaseMinOrderByAggregateInput)
    _min?: LeaseMinOrderByAggregateInput;

    @Field(() => LeaseSumOrderByAggregateInput, {nullable:true})
    @Type(() => LeaseSumOrderByAggregateInput)
    _sum?: LeaseSumOrderByAggregateInput;
}
