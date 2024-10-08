import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LeaseStatus } from './lease-status.enum';

@InputType()
export class EnumLeaseStatusFieldUpdateOperationsInput {

    @Field(() => LeaseStatus, {nullable:true})
    set?: keyof typeof LeaseStatus;
}
