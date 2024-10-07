import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCommercialStatus } from './property-commercial-status.enum';

@InputType()
export class EnumPropertyCommercialStatusFieldUpdateOperationsInput {

    @Field(() => PropertyCommercialStatus, {nullable:true})
    set?: keyof typeof PropertyCommercialStatus;
}
