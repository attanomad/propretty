import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { PropertyCountOrderByAggregateInput } from './property-count-order-by-aggregate.input';
import { PropertyAvgOrderByAggregateInput } from './property-avg-order-by-aggregate.input';
import { PropertyMaxOrderByAggregateInput } from './property-max-order-by-aggregate.input';
import { PropertyMinOrderByAggregateInput } from './property-min-order-by-aggregate.input';
import { PropertySumOrderByAggregateInput } from './property-sum-order-by-aggregate.input';

@InputType()
export class PropertyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    commercialStatus?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    uniqueCode?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    floorSize?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    landSize?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    furnishing?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    typeId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    locationId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    propertyOwnerId?: SortOrderInput;

    @Field(() => PropertyCountOrderByAggregateInput, {nullable:true})
    @Type(() => PropertyCountOrderByAggregateInput)
    _count?: PropertyCountOrderByAggregateInput;

    @Field(() => PropertyAvgOrderByAggregateInput, {nullable:true})
    @Type(() => PropertyAvgOrderByAggregateInput)
    _avg?: PropertyAvgOrderByAggregateInput;

    @Field(() => PropertyMaxOrderByAggregateInput, {nullable:true})
    @Type(() => PropertyMaxOrderByAggregateInput)
    _max?: PropertyMaxOrderByAggregateInput;

    @Field(() => PropertyMinOrderByAggregateInput, {nullable:true})
    @Type(() => PropertyMinOrderByAggregateInput)
    _min?: PropertyMinOrderByAggregateInput;

    @Field(() => PropertySumOrderByAggregateInput, {nullable:true})
    @Type(() => PropertySumOrderByAggregateInput)
    _sum?: PropertySumOrderByAggregateInput;
}
