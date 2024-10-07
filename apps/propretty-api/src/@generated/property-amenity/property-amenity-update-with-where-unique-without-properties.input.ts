import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyAmenityWhereUniqueInput } from './property-amenity-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyAmenityUpdateWithoutPropertiesInput } from './property-amenity-update-without-properties.input';

@InputType()
export class PropertyAmenityUpdateWithWhereUniqueWithoutPropertiesInput {

    @Field(() => PropertyAmenityWhereUniqueInput, {nullable:false})
    @Type(() => PropertyAmenityWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyAmenityWhereUniqueInput, 'id' | 'name'>;

    @Field(() => PropertyAmenityUpdateWithoutPropertiesInput, {nullable:false})
    @Type(() => PropertyAmenityUpdateWithoutPropertiesInput)
    data!: PropertyAmenityUpdateWithoutPropertiesInput;
}
