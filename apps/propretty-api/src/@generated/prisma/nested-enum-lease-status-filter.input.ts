import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LeaseStatus } from './lease-status.enum';

@InputType()
export class NestedEnumLeaseStatusFilter {

    @Field(() => LeaseStatus, {nullable:true})
    equals?: keyof typeof LeaseStatus;

    @Field(() => [LeaseStatus], {nullable:true})
    in?: Array<keyof typeof LeaseStatus>;

    @Field(() => [LeaseStatus], {nullable:true})
    notIn?: Array<keyof typeof LeaseStatus>;

    @Field(() => NestedEnumLeaseStatusFilter, {nullable:true})
    not?: NestedEnumLeaseStatusFilter;
}
