import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';

@InputType()
export class PriceScalarWhereInput {

    @Field(() => [PriceScalarWhereInput], {nullable:true})
    @Type(() => PriceScalarWhereInput)
    AND?: Array<PriceScalarWhereInput>;

    @Field(() => [PriceScalarWhereInput], {nullable:true})
    @Type(() => PriceScalarWhereInput)
    OR?: Array<PriceScalarWhereInput>;

    @Field(() => [PriceScalarWhereInput], {nullable:true})
    @Type(() => PriceScalarWhereInput)
    NOT?: Array<PriceScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    currency?: StringFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    price?: DecimalFilter;

    @Field(() => StringFilter, {nullable:true})
    propertyId?: StringFilter;
}
