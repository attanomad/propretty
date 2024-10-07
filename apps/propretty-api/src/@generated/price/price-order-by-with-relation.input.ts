import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PropertyOrderByWithRelationInput } from '../property/property-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class PriceOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    propertyId?: keyof typeof SortOrder;

    @Field(() => PropertyOrderByWithRelationInput, {nullable:true})
    @Type(() => PropertyOrderByWithRelationInput)
    property?: PropertyOrderByWithRelationInput;
}
