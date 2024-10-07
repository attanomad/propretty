import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyStatus } from './property-status.enum';

@InputType()
export class EnumPropertyStatusFieldUpdateOperationsInput {

    @Field(() => PropertyStatus, {nullable:true})
    set?: keyof typeof PropertyStatus;
}
