import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyUpdateWithoutPropertyOwnerInput } from './property-update-without-property-owner.input';

@InputType()
export class PropertyUpdateWithWhereUniqueWithoutPropertyOwnerInput {

    @Field(() => PropertyWhereUniqueInput, {nullable:false})
    @Type(() => PropertyWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>;

    @Field(() => PropertyUpdateWithoutPropertyOwnerInput, {nullable:false})
    @Type(() => PropertyUpdateWithoutPropertyOwnerInput)
    data!: PropertyUpdateWithoutPropertyOwnerInput;
}
