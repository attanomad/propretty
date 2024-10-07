import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyAmenityWhereUniqueInput } from './property-amenity-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyAmenityCreateInput } from './property-amenity-create.input';
import { PropertyAmenityUpdateInput } from './property-amenity-update.input';

@ArgsType()
export class UpsertOnePropertyAmenityArgs {

    @Field(() => PropertyAmenityWhereUniqueInput, {nullable:false})
    @Type(() => PropertyAmenityWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyAmenityWhereUniqueInput, 'id' | 'name'>;

    @Field(() => PropertyAmenityCreateInput, {nullable:false})
    @Type(() => PropertyAmenityCreateInput)
    create!: PropertyAmenityCreateInput;

    @Field(() => PropertyAmenityUpdateInput, {nullable:false})
    @Type(() => PropertyAmenityUpdateInput)
    update!: PropertyAmenityUpdateInput;
}
