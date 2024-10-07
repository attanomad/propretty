import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyUpdateWithoutAmenitiesInput } from './property-update-without-amenities.input';

@InputType()
export class PropertyUpdateWithWhereUniqueWithoutAmenitiesInput {

    @Field(() => PropertyWhereUniqueInput, {nullable:false})
    @Type(() => PropertyWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>;

    @Field(() => PropertyUpdateWithoutAmenitiesInput, {nullable:false})
    @Type(() => PropertyUpdateWithoutAmenitiesInput)
    data!: PropertyUpdateWithoutAmenitiesInput;
}
