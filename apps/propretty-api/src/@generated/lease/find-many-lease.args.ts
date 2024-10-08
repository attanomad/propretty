import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LeaseWhereInput } from './lease-where.input';
import { Type } from 'class-transformer';
import { LeaseOrderByWithRelationInput } from './lease-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { LeaseWhereUniqueInput } from './lease-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LeaseScalarFieldEnum } from './lease-scalar-field.enum';

@ArgsType()
export class FindManyLeaseArgs {

    @Field(() => LeaseWhereInput, {nullable:true})
    @Type(() => LeaseWhereInput)
    where?: LeaseWhereInput;

    @Field(() => [LeaseOrderByWithRelationInput], {nullable:true})
    @Type(() => LeaseOrderByWithRelationInput)
    orderBy?: Array<LeaseOrderByWithRelationInput>;

    @Field(() => LeaseWhereUniqueInput, {nullable:true})
    @Type(() => LeaseWhereUniqueInput)
    cursor?: Prisma.AtLeast<LeaseWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LeaseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LeaseScalarFieldEnum>;
}
