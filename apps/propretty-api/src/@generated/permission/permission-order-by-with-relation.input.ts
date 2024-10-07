import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { RoleOrderByRelationAggregateInput } from '../role/role-order-by-relation-aggregate.input';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';

@InputType()
export class PermissionOrderByWithRelationInput {

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

    @Field(() => RoleOrderByRelationAggregateInput, {nullable:true})
    roles?: RoleOrderByRelationAggregateInput;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    @Type(() => UserOrderByRelationAggregateInput)
    users?: UserOrderByRelationAggregateInput;
}
