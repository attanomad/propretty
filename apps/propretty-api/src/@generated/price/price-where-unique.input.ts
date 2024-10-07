import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PriceCurrencyPropertyIdCompoundUniqueInput } from './price-currency-property-id-compound-unique.input';
import { Type } from 'class-transformer';
import { PriceWhereInput } from './price-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { PropertyRelationFilter } from '../property/property-relation-filter.input';

@InputType()
export class PriceWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => PriceCurrencyPropertyIdCompoundUniqueInput, {nullable:true})
    @Type(() => PriceCurrencyPropertyIdCompoundUniqueInput)
    currency_propertyId?: PriceCurrencyPropertyIdCompoundUniqueInput;

    @Field(() => [PriceWhereInput], {nullable:true})
    @Type(() => PriceWhereInput)
    AND?: Array<PriceWhereInput>;

    @Field(() => [PriceWhereInput], {nullable:true})
    @Type(() => PriceWhereInput)
    OR?: Array<PriceWhereInput>;

    @Field(() => [PriceWhereInput], {nullable:true})
    @Type(() => PriceWhereInput)
    NOT?: Array<PriceWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    currency?: StringFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    price?: DecimalFilter;

    @Field(() => StringFilter, {nullable:true})
    propertyId?: StringFilter;

    @Field(() => PropertyRelationFilter, {nullable:true})
    @Type(() => PropertyRelationFilter)
    property?: PropertyRelationFilter;
}
