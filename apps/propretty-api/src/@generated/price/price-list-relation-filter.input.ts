import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PriceWhereInput } from './price-where.input';
import { Type } from 'class-transformer';

@InputType()
export class PriceListRelationFilter {

    @Field(() => PriceWhereInput, {nullable:true})
    @Type(() => PriceWhereInput)
    every?: PriceWhereInput;

    @Field(() => PriceWhereInput, {nullable:true})
    @Type(() => PriceWhereInput)
    some?: PriceWhereInput;

    @Field(() => PriceWhereInput, {nullable:true})
    @Type(() => PriceWhereInput)
    none?: PriceWhereInput;
}
