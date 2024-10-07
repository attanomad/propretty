import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyUpdateWithoutTypeInput } from './property-update-without-type.input';

@InputType()
export class PropertyUpdateWithWhereUniqueWithoutTypeInput {

    @Field(() => PropertyWhereUniqueInput, {nullable:false})
    @Type(() => PropertyWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>;

    @Field(() => PropertyUpdateWithoutTypeInput, {nullable:false})
    @Type(() => PropertyUpdateWithoutTypeInput)
    data!: PropertyUpdateWithoutTypeInput;
}
