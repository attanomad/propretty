import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { LeaseOrderByRelationAggregateInput } from '../lease/lease-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestOrderByRelationAggregateInput } from '../property-maintenance-request/property-maintenance-request-order-by-relation-aggregate.input';

@InputType()
export class TenantOrderByWithRelationInput {

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

    @Field(() => LeaseOrderByRelationAggregateInput, {nullable:true})
    @Type(() => LeaseOrderByRelationAggregateInput)
    leases?: LeaseOrderByRelationAggregateInput;

    @Field(() => PropertyMaintenanceRequestOrderByRelationAggregateInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestOrderByRelationAggregateInput)
    maintenanceRequests?: PropertyMaintenanceRequestOrderByRelationAggregateInput;
}
