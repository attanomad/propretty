import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { TenantCountOrderByAggregateInput } from './tenant-count-order-by-aggregate.input';
import { TenantMaxOrderByAggregateInput } from './tenant-max-order-by-aggregate.input';
import { TenantMinOrderByAggregateInput } from './tenant-min-order-by-aggregate.input';

@InputType()
export class TenantOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    nationalId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    firstName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    lastName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    email?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    phoneNumber?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    dateOfBirth?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    gender?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    address?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => TenantCountOrderByAggregateInput, {nullable:true})
    _count?: TenantCountOrderByAggregateInput;

    @Field(() => TenantMaxOrderByAggregateInput, {nullable:true})
    _max?: TenantMaxOrderByAggregateInput;

    @Field(() => TenantMinOrderByAggregateInput, {nullable:true})
    _min?: TenantMinOrderByAggregateInput;
}
