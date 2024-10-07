import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RoleOrderByRelationAggregateInput } from '../role/role-order-by-relation-aggregate.input';
import { PermissionOrderByRelationAggregateInput } from '../permission/permission-order-by-relation-aggregate.input';
import { PropertyOrderByRelationAggregateInput } from '../property/property-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hashedPassword?: keyof typeof SortOrder;

    @Field(() => RoleOrderByRelationAggregateInput, {nullable:true})
    roles?: RoleOrderByRelationAggregateInput;

    @Field(() => PermissionOrderByRelationAggregateInput, {nullable:true})
    permissions?: PermissionOrderByRelationAggregateInput;

    @Field(() => PropertyOrderByRelationAggregateInput, {nullable:true})
    @Type(() => PropertyOrderByRelationAggregateInput)
    assignedProperties?: PropertyOrderByRelationAggregateInput;
}
