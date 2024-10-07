import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PropertyOrderByRelationAggregateInput } from '../property/property-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';

@InputType()
export class FileOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    path?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mimetype?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    size?: keyof typeof SortOrder;

    @Field(() => PropertyOrderByRelationAggregateInput, {nullable:true})
    @Type(() => PropertyOrderByRelationAggregateInput)
    Property?: PropertyOrderByRelationAggregateInput;
}
