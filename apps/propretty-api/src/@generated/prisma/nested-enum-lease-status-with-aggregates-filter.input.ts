import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LeaseStatus } from './lease-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumLeaseStatusFilter } from './nested-enum-lease-status-filter.input';

@InputType()
export class NestedEnumLeaseStatusWithAggregatesFilter {

    @Field(() => LeaseStatus, {nullable:true})
    equals?: keyof typeof LeaseStatus;

    @Field(() => [LeaseStatus], {nullable:true})
    in?: Array<keyof typeof LeaseStatus>;

    @Field(() => [LeaseStatus], {nullable:true})
    notIn?: Array<keyof typeof LeaseStatus>;

    @Field(() => NestedEnumLeaseStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumLeaseStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumLeaseStatusFilter, {nullable:true})
    _min?: NestedEnumLeaseStatusFilter;

    @Field(() => NestedEnumLeaseStatusFilter, {nullable:true})
    _max?: NestedEnumLeaseStatusFilter;
}
