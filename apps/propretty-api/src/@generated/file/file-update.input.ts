import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { PropertyUpdateManyWithoutMediaListNestedInput } from '../property/property-update-many-without-media-list-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class FileUpdateInput {

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

    @Field(() => PropertyUpdateManyWithoutMediaListNestedInput, {nullable:true})
    @Type(() => PropertyUpdateManyWithoutMediaListNestedInput)
    Property?: PropertyUpdateManyWithoutMediaListNestedInput;
}
