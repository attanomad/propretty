import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyCreateWithoutPriceListInput } from './property-create-without-price-list.input';

@InputType()
export class PropertyCreateOrConnectWithoutPriceListInput {

    @Field(() => PropertyWhereUniqueInput, {nullable:false})
    @Type(() => PropertyWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>;

    @Field(() => PropertyCreateWithoutPriceListInput, {nullable:false})
    @Type(() => PropertyCreateWithoutPriceListInput)
    create!: PropertyCreateWithoutPriceListInput;
}
