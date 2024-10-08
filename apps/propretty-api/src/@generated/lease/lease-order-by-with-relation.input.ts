import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PropertyOrderByWithRelationInput } from '../property/property-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { TenantOrderByWithRelationInput } from '../tenant/tenant-order-by-with-relation.input';
import { PropertyMaintenanceRequestOrderByRelationAggregateInput } from '../property-maintenance-request/property-maintenance-request-order-by-relation-aggregate.input';

@InputType()
export class LeaseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    propertyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tenantId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startedDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rentAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    depositAmount?: keyof typeof SortOrder;

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

    @Field(() => PropertyMaintenanceRequestOrderByRelationAggregateInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestOrderByRelationAggregateInput)
    maintenanceRequests?: PropertyMaintenanceRequestOrderByRelationAggregateInput;
}
