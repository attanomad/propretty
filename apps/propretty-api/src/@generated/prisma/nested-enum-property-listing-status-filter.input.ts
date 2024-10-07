import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyListingStatus } from './property-listing-status.enum';

@InputType()
export class NestedEnumPropertyListingStatusFilter {

    @Field(() => PropertyListingStatus, {nullable:true})
    equals?: keyof typeof PropertyListingStatus;

    @Field(() => [PropertyListingStatus], {nullable:true})
    in?: Array<keyof typeof PropertyListingStatus>;

    @Field(() => [PropertyListingStatus], {nullable:true})
    notIn?: Array<keyof typeof PropertyListingStatus>;

    @Field(() => NestedEnumPropertyListingStatusFilter, {nullable:true})
    not?: NestedEnumPropertyListingStatusFilter;
}
