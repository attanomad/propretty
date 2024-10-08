import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LeaseStatus } from './lease-status.enum';
import { NestedEnumLeaseStatusFilter } from './nested-enum-lease-status-filter.input';

@InputType()
export class EnumLeaseStatusFilter {

    @Field(() => LeaseStatus, {nullable:true})
    equals?: keyof typeof LeaseStatus;

    @Field(() => [LeaseStatus], {nullable:true})
    in?: Array<keyof typeof LeaseStatus>;

    @Field(() => [LeaseStatus], {nullable:true})
    notIn?: Array<keyof typeof LeaseStatus>;

    @Field(() => NestedEnumLeaseStatusFilter, {nullable:true})
    not?: NestedEnumLeaseStatusFilter;
}
