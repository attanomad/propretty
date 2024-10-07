import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyUpdateWithoutLocationInput } from './property-update-without-location.input';

@InputType()
export class PropertyUpdateWithWhereUniqueWithoutLocationInput {

    @Field(() => PropertyWhereUniqueInput, {nullable:false})
    @Type(() => PropertyWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>;

    @Field(() => PropertyUpdateWithoutLocationInput, {nullable:false})
    @Type(() => PropertyUpdateWithoutLocationInput)
    data!: PropertyUpdateWithoutLocationInput;
}
