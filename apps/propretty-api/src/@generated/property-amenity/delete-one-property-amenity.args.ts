import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyAmenityWhereUniqueInput } from './property-amenity-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnePropertyAmenityArgs {

    @Field(() => PropertyAmenityWhereUniqueInput, {nullable:false})
    @Type(() => PropertyAmenityWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyAmenityWhereUniqueInput, 'id' | 'name'>;
}
