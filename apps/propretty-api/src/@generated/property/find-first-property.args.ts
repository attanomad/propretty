import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyWhereInput } from './property-where.input';
import { Type } from 'class-transformer';
import { PropertyOrderByWithRelationInput } from './property-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PropertyScalarFieldEnum } from './property-scalar-field.enum';

@ArgsType()
export class FindFirstPropertyArgs {

    @Field(() => PropertyWhereInput, {nullable:true})
    @Type(() => PropertyWhereInput)
    where?: PropertyWhereInput;

    @Field(() => [PropertyOrderByWithRelationInput], {nullable:true})
    @Type(() => PropertyOrderByWithRelationInput)
    orderBy?: Array<PropertyOrderByWithRelationInput>;

    @Field(() => PropertyWhereUniqueInput, {nullable:true})
    @Type(() => PropertyWhereUniqueInput)
    cursor?: Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PropertyScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PropertyScalarFieldEnum>;
}
