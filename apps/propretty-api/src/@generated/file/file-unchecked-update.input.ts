import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { PropertyUncheckedUpdateManyWithoutMediaListNestedInput } from '../property/property-unchecked-update-many-without-media-list-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class FileUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    path?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    mimetype?: StringFieldUpdateOperationsInput;

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    size?: BigIntFieldUpdateOperationsInput;

    @Field(() => PropertyUncheckedUpdateManyWithoutMediaListNestedInput, {nullable:true})
    @Type(() => PropertyUncheckedUpdateManyWithoutMediaListNestedInput)
    Property?: PropertyUncheckedUpdateManyWithoutMediaListNestedInput;
}
