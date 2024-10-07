import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumPropertyListingStatusFieldUpdateOperationsInput } from '../prisma/enum-property-listing-status-field-update-operations.input';
import { EnumPropertyListingTypeFieldUpdateOperationsInput } from '../prisma/enum-property-listing-type-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class PropertyListingUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumPropertyListingStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumPropertyListingStatusFieldUpdateOperationsInput;

    @Field(() => EnumPropertyListingTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumPropertyListingTypeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    propertyId?: StringFieldUpdateOperationsInput;
}
