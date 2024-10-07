import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCreateWithoutPriceListInput } from './property-create-without-price-list.input';
import { Type } from 'class-transformer';
import { PropertyCreateOrConnectWithoutPriceListInput } from './property-create-or-connect-without-price-list.input';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';

@InputType()
export class PropertyCreateNestedOneWithoutPriceListInput {

    @Field(() => PropertyCreateWithoutPriceListInput, {nullable:true})
    @Type(() => PropertyCreateWithoutPriceListInput)
    create?: PropertyCreateWithoutPriceListInput;

    @Field(() => PropertyCreateOrConnectWithoutPriceListInput, {nullable:true})
    @Type(() => PropertyCreateOrConnectWithoutPriceListInput)
    connectOrCreate?: PropertyCreateOrConnectWithoutPriceListInput;

    @Field(() => PropertyWhereUniqueInput, {nullable:true})
    @Type(() => PropertyWhereUniqueInput)
    connect?: Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>;
}
