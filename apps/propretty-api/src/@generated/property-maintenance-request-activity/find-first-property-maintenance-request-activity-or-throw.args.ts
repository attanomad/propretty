import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestActivityWhereInput } from './property-maintenance-request-activity-where.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestActivityOrderByWithRelationInput } from './property-maintenance-request-activity-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PropertyMaintenanceRequestActivityWhereUniqueInput } from './property-maintenance-request-activity-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PropertyMaintenanceRequestActivityScalarFieldEnum } from './property-maintenance-request-activity-scalar-field.enum';

@ArgsType()
export class FindFirstPropertyMaintenanceRequestActivityOrThrowArgs {

    @Field(() => PropertyMaintenanceRequestActivityWhereInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestActivityWhereInput)
    where?: PropertyMaintenanceRequestActivityWhereInput;

    @Field(() => [PropertyMaintenanceRequestActivityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PropertyMaintenanceRequestActivityOrderByWithRelationInput>;

    @Field(() => PropertyMaintenanceRequestActivityWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PropertyMaintenanceRequestActivityWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PropertyMaintenanceRequestActivityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PropertyMaintenanceRequestActivityScalarFieldEnum>;
}
