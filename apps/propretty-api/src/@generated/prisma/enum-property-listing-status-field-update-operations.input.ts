import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyListingStatus } from './property-listing-status.enum';

@InputType()
export class EnumPropertyListingStatusFieldUpdateOperationsInput {

    @Field(() => PropertyListingStatus, {nullable:true})
    set?: keyof typeof PropertyListingStatus;
}
