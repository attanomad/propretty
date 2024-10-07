import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyAmenityUpdateInput } from './property-amenity-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PropertyAmenityWhereUniqueInput } from './property-amenity-where-unique.input';

@ArgsType()
export class UpdateOnePropertyAmenityArgs {

    @Field(() => PropertyAmenityUpdateInput, {nullable:false})
    @Type(() => PropertyAmenityUpdateInput)
    data!: PropertyAmenityUpdateInput;

    @Field(() => PropertyAmenityWhereUniqueInput, {nullable:false})
    @Type(() => PropertyAmenityWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyAmenityWhereUniqueInput, 'id' | 'name'>;
}
