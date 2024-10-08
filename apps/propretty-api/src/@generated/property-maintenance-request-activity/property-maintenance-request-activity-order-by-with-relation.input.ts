import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PropertyMaintenanceRequestOrderByWithRelationInput } from '../property-maintenance-request/property-maintenance-request-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class PropertyMaintenanceRequestActivityOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    requestId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PropertyMaintenanceRequestOrderByWithRelationInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestOrderByWithRelationInput)
    request?: PropertyMaintenanceRequestOrderByWithRelationInput;
}
