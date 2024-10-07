import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyListingStatus } from './property-listing-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPropertyListingStatusFilter } from './nested-enum-property-listing-status-filter.input';

@InputType()
export class NestedEnumPropertyListingStatusWithAggregatesFilter {

    @Field(() => PropertyListingStatus, {nullable:true})
    equals?: keyof typeof PropertyListingStatus;

    @Field(() => [PropertyListingStatus], {nullable:true})
    in?: Array<keyof typeof PropertyListingStatus>;

    @Field(() => [PropertyListingStatus], {nullable:true})
    notIn?: Array<keyof typeof PropertyListingStatus>;

    @Field(() => NestedEnumPropertyListingStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPropertyListingStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPropertyListingStatusFilter, {nullable:true})
    _min?: NestedEnumPropertyListingStatusFilter;

    @Field(() => NestedEnumPropertyListingStatusFilter, {nullable:true})
    _max?: NestedEnumPropertyListingStatusFilter;
}
