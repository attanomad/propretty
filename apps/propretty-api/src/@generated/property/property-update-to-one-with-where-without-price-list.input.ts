import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyWhereInput } from './property-where.input';
import { Type } from 'class-transformer';
import { PropertyUpdateWithoutPriceListInput } from './property-update-without-price-list.input';

@InputType()
export class PropertyUpdateToOneWithWhereWithoutPriceListInput {

    @Field(() => PropertyWhereInput, {nullable:true})
    @Type(() => PropertyWhereInput)
    where?: PropertyWhereInput;

    @Field(() => PropertyUpdateWithoutPriceListInput, {nullable:false})
    @Type(() => PropertyUpdateWithoutPriceListInput)
    data!: PropertyUpdateWithoutPriceListInput;
}
