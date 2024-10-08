import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PropertyOrderByWithRelationInput } from '../property/property-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { TenantOrderByWithRelationInput } from '../tenant/tenant-order-by-with-relation.input';
import { LeaseOrderByWithRelationInput } from '../lease/lease-order-by-with-relation.input';
import { PropertyMaintenanceRequestActivityOrderByRelationAggregateInput } from '../property-maintenance-request-activity/property-maintenance-request-activity-order-by-relation-aggregate.input';

@InputType()
export class PropertyMaintenanceRequestOrderByWithRelationInput {

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

    @Field(() => PropertyOrderByWithRelationInput, {nullable:true})
    @Type(() => PropertyOrderByWithRelationInput)
    property?: PropertyOrderByWithRelationInput;

    @Field(() => TenantOrderByWithRelationInput, {nullable:true})
    @Type(() => TenantOrderByWithRelationInput)
    tenant?: TenantOrderByWithRelationInput;

    @Field(() => LeaseOrderByWithRelationInput, {nullable:true})
    @Type(() => LeaseOrderByWithRelationInput)
    lease?: LeaseOrderByWithRelationInput;

    @Field(() => PropertyMaintenanceRequestActivityOrderByRelationAggregateInput, {nullable:true})
    activities?: PropertyMaintenanceRequestActivityOrderByRelationAggregateInput;
}
