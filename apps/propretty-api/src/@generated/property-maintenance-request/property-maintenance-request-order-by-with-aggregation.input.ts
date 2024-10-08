import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PropertyMaintenanceRequestCountOrderByAggregateInput } from './property-maintenance-request-count-order-by-aggregate.input';
import { PropertyMaintenanceRequestMaxOrderByAggregateInput } from './property-maintenance-request-max-order-by-aggregate.input';
import { PropertyMaintenanceRequestMinOrderByAggregateInput } from './property-maintenance-request-min-order-by-aggregate.input';

@InputType()
export class PropertyMaintenanceRequestOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    propertyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tenantId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    leaseId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    requestedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PropertyMaintenanceRequestCountOrderByAggregateInput, {nullable:true})
    _count?: PropertyMaintenanceRequestCountOrderByAggregateInput;

    @Field(() => PropertyMaintenanceRequestMaxOrderByAggregateInput, {nullable:true})
    _max?: PropertyMaintenanceRequestMaxOrderByAggregateInput;

    @Field(() => PropertyMaintenanceRequestMinOrderByAggregateInput, {nullable:true})
    _min?: PropertyMaintenanceRequestMinOrderByAggregateInput;
}
