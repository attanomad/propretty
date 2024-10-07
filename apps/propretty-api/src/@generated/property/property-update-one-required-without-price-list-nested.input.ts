import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCreateWithoutPriceListInput } from './property-create-without-price-list.input';
import { Type } from 'class-transformer';
import { PropertyCreateOrConnectWithoutPriceListInput } from './property-create-or-connect-without-price-list.input';
import { PropertyUpsertWithoutPriceListInput } from './property-upsert-without-price-list.input';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { PropertyUpdateToOneWithWhereWithoutPriceListInput } from './property-update-to-one-with-where-without-price-list.input';

@InputType()
export class PropertyUpdateOneRequiredWithoutPriceListNestedInput {

    @Field(() => PropertyCreateWithoutPriceListInput, {nullable:true})
    @Type(() => PropertyCreateWithoutPriceListInput)
    create?: PropertyCreateWithoutPriceListInput;

    @Field(() => PropertyCreateOrConnectWithoutPriceListInput, {nullable:true})
    @Type(() => PropertyCreateOrConnectWithoutPriceListInput)
    connectOrCreate?: PropertyCreateOrConnectWithoutPriceListInput;

    @Field(() => PropertyUpsertWithoutPriceListInput, {nullable:true})
    @Type(() => PropertyUpsertWithoutPriceListInput)
    upsert?: PropertyUpsertWithoutPriceListInput;

    @Field(() => PropertyWhereUniqueInput, {nullable:true})
    @Type(() => PropertyWhereUniqueInput)
    connect?: Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>;

    @Field(() => PropertyUpdateToOneWithWhereWithoutPriceListInput, {nullable:true})
    @Type(() => PropertyUpdateToOneWithWhereWithoutPriceListInput)
    update?: PropertyUpdateToOneWithWhereWithoutPriceListInput;
}
