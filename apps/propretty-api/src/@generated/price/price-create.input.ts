import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { PropertyCreateNestedOneWithoutPriceListInput } from '../property/property-create-nested-one-without-price-list.input';

@InputType()
export class PriceCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price!: Decimal;

    @Field(() => PropertyCreateNestedOneWithoutPriceListInput, {nullable:false})
    @Type(() => PropertyCreateNestedOneWithoutPriceListInput)
    property!: PropertyCreateNestedOneWithoutPriceListInput;
}
