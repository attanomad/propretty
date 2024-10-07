import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { PropertyUncheckedUpdateManyWithoutPropertyOwnerNestedInput } from '../property/property-unchecked-update-many-without-property-owner-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class PropertyOwnerUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    dob?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => PropertyUncheckedUpdateManyWithoutPropertyOwnerNestedInput, {nullable:true})
    @Type(() => PropertyUncheckedUpdateManyWithoutPropertyOwnerNestedInput)
    properties?: PropertyUncheckedUpdateManyWithoutPropertyOwnerNestedInput;
}
