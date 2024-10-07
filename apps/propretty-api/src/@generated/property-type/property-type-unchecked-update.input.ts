import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { PropertyUncheckedUpdateManyWithoutTypeNestedInput } from '../property/property-unchecked-update-many-without-type-nested.input';

@InputType()
export class PropertyTypeUncheckedUpdateInput {

    @HideField()
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @HideField()
    Property?: PropertyUncheckedUpdateManyWithoutTypeNestedInput;
}
