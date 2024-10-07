import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyUpdateWithoutPriceListInput } from './property-update-without-price-list.input';
import { Type } from 'class-transformer';
import { PropertyCreateWithoutPriceListInput } from './property-create-without-price-list.input';
import { PropertyWhereInput } from './property-where.input';

@InputType()
export class PropertyUpsertWithoutPriceListInput {

    @Field(() => PropertyUpdateWithoutPriceListInput, {nullable:false})
    @Type(() => PropertyUpdateWithoutPriceListInput)
    update!: PropertyUpdateWithoutPriceListInput;

    @Field(() => PropertyCreateWithoutPriceListInput, {nullable:false})
    @Type(() => PropertyCreateWithoutPriceListInput)
    create!: PropertyCreateWithoutPriceListInput;

    @Field(() => PropertyWhereInput, {nullable:true})
    @Type(() => PropertyWhereInput)
    where?: PropertyWhereInput;
}
