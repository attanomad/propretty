import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PropertyMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    commercialStatus?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    uniqueCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    floorSize?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    landSize?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    furnishing?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    typeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locationId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    propertyOwnerId?: keyof typeof SortOrder;
}
