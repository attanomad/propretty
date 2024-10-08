import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PropertyMaintenanceRequestActivityCountOrderByAggregateInput } from './property-maintenance-request-activity-count-order-by-aggregate.input';
import { PropertyMaintenanceRequestActivityMaxOrderByAggregateInput } from './property-maintenance-request-activity-max-order-by-aggregate.input';
import { PropertyMaintenanceRequestActivityMinOrderByAggregateInput } from './property-maintenance-request-activity-min-order-by-aggregate.input';

@InputType()
export class PropertyMaintenanceRequestActivityOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    requestId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PropertyMaintenanceRequestActivityCountOrderByAggregateInput, {nullable:true})
    _count?: PropertyMaintenanceRequestActivityCountOrderByAggregateInput;

    @Field(() => PropertyMaintenanceRequestActivityMaxOrderByAggregateInput, {nullable:true})
    _max?: PropertyMaintenanceRequestActivityMaxOrderByAggregateInput;

    @Field(() => PropertyMaintenanceRequestActivityMinOrderByAggregateInput, {nullable:true})
    _min?: PropertyMaintenanceRequestActivityMinOrderByAggregateInput;
}
