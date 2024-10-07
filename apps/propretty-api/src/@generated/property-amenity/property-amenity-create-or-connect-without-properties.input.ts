import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyAmenityWhereUniqueInput } from './property-amenity-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyAmenityCreateWithoutPropertiesInput } from './property-amenity-create-without-properties.input';

@InputType()
export class PropertyAmenityCreateOrConnectWithoutPropertiesInput {

    @Field(() => PropertyAmenityWhereUniqueInput, {nullable:false})
    @Type(() => PropertyAmenityWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyAmenityWhereUniqueInput, 'id' | 'name'>;

    @Field(() => PropertyAmenityCreateWithoutPropertiesInput, {nullable:false})
    @Type(() => PropertyAmenityCreateWithoutPropertiesInput)
    create!: PropertyAmenityCreateWithoutPropertiesInput;
}
