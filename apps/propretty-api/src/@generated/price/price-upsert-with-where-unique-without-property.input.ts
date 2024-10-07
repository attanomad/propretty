import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PriceWhereUniqueInput } from './price-where-unique.input';
import { Type } from 'class-transformer';
import { PriceUpdateWithoutPropertyInput } from './price-update-without-property.input';
import { PriceCreateWithoutPropertyInput } from './price-create-without-property.input';

@InputType()
export class PriceUpsertWithWhereUniqueWithoutPropertyInput {

    @Field(() => PriceWhereUniqueInput, {nullable:false})
    @Type(() => PriceWhereUniqueInput)
    where!: Prisma.AtLeast<PriceWhereUniqueInput, 'id' | 'currency_propertyId'>;

    @Field(() => PriceUpdateWithoutPropertyInput, {nullable:false})
    @Type(() => PriceUpdateWithoutPropertyInput)
    update!: PriceUpdateWithoutPropertyInput;

    @Field(() => PriceCreateWithoutPropertyInput, {nullable:false})
    @Type(() => PriceCreateWithoutPropertyInput)
    create!: PriceCreateWithoutPropertyInput;
}
