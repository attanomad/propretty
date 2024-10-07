import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyOwnerWhereInput } from './property-owner-where.input';
import { Type } from 'class-transformer';
import { PropertyOwnerOrderByWithRelationInput } from './property-owner-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PropertyOwnerWhereUniqueInput } from './property-owner-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PropertyOwnerScalarFieldEnum } from './property-owner-scalar-field.enum';

@ArgsType()
export class FindManyPropertyOwnerArgs {

    @Field(() => PropertyOwnerWhereInput, {nullable:true})
    @Type(() => PropertyOwnerWhereInput)
    where?: PropertyOwnerWhereInput;

    @Field(() => [PropertyOwnerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PropertyOwnerOrderByWithRelationInput>;

    @Field(() => PropertyOwnerWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PropertyOwnerWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PropertyOwnerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PropertyOwnerScalarFieldEnum>;
}
