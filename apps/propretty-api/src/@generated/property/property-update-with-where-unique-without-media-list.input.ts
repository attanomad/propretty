import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyUpdateWithoutMediaListInput } from './property-update-without-media-list.input';

@InputType()
export class PropertyUpdateWithWhereUniqueWithoutMediaListInput {

    @Field(() => PropertyWhereUniqueInput, {nullable:false})
    @Type(() => PropertyWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>;

    @Field(() => PropertyUpdateWithoutMediaListInput, {nullable:false})
    @Type(() => PropertyUpdateWithoutMediaListInput)
    data!: PropertyUpdateWithoutMediaListInput;
}
