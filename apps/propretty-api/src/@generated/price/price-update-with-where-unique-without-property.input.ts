import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PriceWhereUniqueInput } from './price-where-unique.input';
import { Type } from 'class-transformer';
import { PriceUpdateWithoutPropertyInput } from './price-update-without-property.input';

@InputType()
export class PriceUpdateWithWhereUniqueWithoutPropertyInput {

    @Field(() => PriceWhereUniqueInput, {nullable:false})
    @Type(() => PriceWhereUniqueInput)
    where!: Prisma.AtLeast<PriceWhereUniqueInput, 'id' | 'currency_propertyId'>;

    @Field(() => PriceUpdateWithoutPropertyInput, {nullable:false})
    @Type(() => PriceUpdateWithoutPropertyInput)
    data!: PriceUpdateWithoutPropertyInput;
}
