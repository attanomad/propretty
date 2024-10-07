import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { PropertyRelationFilter } from '../property/property-relation-filter.input';

@InputType()
export class PriceWhereInput {

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
    id?: StringFilter;

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
