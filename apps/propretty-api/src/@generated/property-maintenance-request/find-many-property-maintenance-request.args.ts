import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyMaintenanceRequestWhereInput } from './property-maintenance-request-where.input';
import { Type } from 'class-transformer';
import { PropertyMaintenanceRequestOrderByWithRelationInput } from './property-maintenance-request-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PropertyMaintenanceRequestWhereUniqueInput } from './property-maintenance-request-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PropertyMaintenanceRequestScalarFieldEnum } from './property-maintenance-request-scalar-field.enum';

@ArgsType()
export class FindManyPropertyMaintenanceRequestArgs {

    @Field(() => PropertyMaintenanceRequestWhereInput, {nullable:true})
    @Type(() => PropertyMaintenanceRequestWhereInput)
    where?: PropertyMaintenanceRequestWhereInput;

    @Field(() => [PropertyMaintenanceRequestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PropertyMaintenanceRequestOrderByWithRelationInput>;

    @Field(() => PropertyMaintenanceRequestWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PropertyMaintenanceRequestWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PropertyMaintenanceRequestScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PropertyMaintenanceRequestScalarFieldEnum>;
}
