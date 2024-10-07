import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PriceWhereUniqueInput } from './price-where-unique.input';
import { Type } from 'class-transformer';
import { PriceCreateWithoutPropertyInput } from './price-create-without-property.input';

@InputType()
export class PriceCreateOrConnectWithoutPropertyInput {

    @Field(() => PriceWhereUniqueInput, {nullable:false})
    @Type(() => PriceWhereUniqueInput)
    where!: Prisma.AtLeast<PriceWhereUniqueInput, 'id' | 'currency_propertyId'>;

    @Field(() => PriceCreateWithoutPropertyInput, {nullable:false})
    @Type(() => PriceCreateWithoutPropertyInput)
    create!: PriceCreateWithoutPropertyInput;
}
