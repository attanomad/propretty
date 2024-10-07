import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyCreateWithoutAmenitiesInput } from './property-create-without-amenities.input';

@InputType()
export class PropertyCreateOrConnectWithoutAmenitiesInput {

    @Field(() => PropertyWhereUniqueInput, {nullable:false})
    @Type(() => PropertyWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>;

    @Field(() => PropertyCreateWithoutAmenitiesInput, {nullable:false})
    @Type(() => PropertyCreateWithoutAmenitiesInput)
    create!: PropertyCreateWithoutAmenitiesInput;
}
