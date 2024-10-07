import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { PropertyOrderByRelationAggregateInput } from '../property/property-order-by-relation-aggregate.input';

@InputType()
export class LocationOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    address?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    subdistrict?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    district?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    province?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    country?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    postalCode?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    latitude?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    longitude?: SortOrderInput;

    @Field(() => PropertyOrderByRelationAggregateInput, {nullable:true})
    @Type(() => PropertyOrderByRelationAggregateInput)
    Property?: PropertyOrderByRelationAggregateInput;
}
