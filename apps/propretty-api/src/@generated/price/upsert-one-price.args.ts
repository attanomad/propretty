import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PriceWhereUniqueInput } from './price-where-unique.input';
import { Type } from 'class-transformer';
import { PriceCreateInput } from './price-create.input';
import { PriceUpdateInput } from './price-update.input';

@ArgsType()
export class UpsertOnePriceArgs {

    @Field(() => PriceWhereUniqueInput, {nullable:false})
    @Type(() => PriceWhereUniqueInput)
    where!: Prisma.AtLeast<PriceWhereUniqueInput, 'id' | 'currency_propertyId'>;

    @Field(() => PriceCreateInput, {nullable:false})
    @Type(() => PriceCreateInput)
    create!: PriceCreateInput;

    @Field(() => PriceUpdateInput, {nullable:false})
    @Type(() => PriceUpdateInput)
    update!: PriceUpdateInput;
}
