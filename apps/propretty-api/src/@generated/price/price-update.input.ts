import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { PropertyUpdateOneRequiredWithoutPriceListNestedInput } from '../property/property-update-one-required-without-price-list-nested.input';

@InputType()
export class PriceUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    currency?: StringFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    price?: DecimalFieldUpdateOperationsInput;

    @Field(() => PropertyUpdateOneRequiredWithoutPriceListNestedInput, {nullable:true})
    @Type(() => PropertyUpdateOneRequiredWithoutPriceListNestedInput)
    property?: PropertyUpdateOneRequiredWithoutPriceListNestedInput;
}
