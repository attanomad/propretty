import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyListingStatus } from './property-listing-status.enum';
import { NestedEnumPropertyListingStatusFilter } from './nested-enum-property-listing-status-filter.input';

@InputType()
export class EnumPropertyListingStatusFilter {

    @Field(() => PropertyListingStatus, {nullable:true})
    equals?: keyof typeof PropertyListingStatus;

    @Field(() => [PropertyListingStatus], {nullable:true})
    in?: Array<keyof typeof PropertyListingStatus>;

    @Field(() => [PropertyListingStatus], {nullable:true})
    notIn?: Array<keyof typeof PropertyListingStatus>;

    @Field(() => NestedEnumPropertyListingStatusFilter, {nullable:true})
    not?: NestedEnumPropertyListingStatusFilter;
}
