import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyAmenityWhereInput } from './property-amenity-where.input';
import { Type } from 'class-transformer';
import { PropertyAmenityOrderByWithRelationInput } from './property-amenity-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PropertyAmenityWhereUniqueInput } from './property-amenity-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PropertyAmenityScalarFieldEnum } from './property-amenity-scalar-field.enum';

@ArgsType()
export class FindFirstPropertyAmenityOrThrowArgs {

    @Field(() => PropertyAmenityWhereInput, {nullable:true})
    @Type(() => PropertyAmenityWhereInput)
    where?: PropertyAmenityWhereInput;

    @Field(() => [PropertyAmenityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PropertyAmenityOrderByWithRelationInput>;

    @Field(() => PropertyAmenityWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PropertyAmenityWhereUniqueInput, 'id' | 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PropertyAmenityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PropertyAmenityScalarFieldEnum>;
}
