import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PriceCurrencyPropertyIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => String, {nullable:false})
    propertyId!: string;
}
