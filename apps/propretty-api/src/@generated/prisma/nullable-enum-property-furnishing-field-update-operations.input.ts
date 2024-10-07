import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyFurnishing } from './property-furnishing.enum';

@InputType()
export class NullableEnumPropertyFurnishingFieldUpdateOperationsInput {

    @Field(() => PropertyFurnishing, {nullable:true})
    set?: keyof typeof PropertyFurnishing;
}
