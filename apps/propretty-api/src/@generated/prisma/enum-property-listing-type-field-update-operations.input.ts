import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyListingType } from './property-listing-type.enum';

@InputType()
export class EnumPropertyListingTypeFieldUpdateOperationsInput {

    @Field(() => PropertyListingType, {nullable:true})
    set?: keyof typeof PropertyListingType;
}
