import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyListingType } from './property-listing-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPropertyListingTypeFilter } from './nested-enum-property-listing-type-filter.input';

@InputType()
export class NestedEnumPropertyListingTypeWithAggregatesFilter {

    @Field(() => PropertyListingType, {nullable:true})
    equals?: keyof typeof PropertyListingType;

    @Field(() => [PropertyListingType], {nullable:true})
    in?: Array<keyof typeof PropertyListingType>;

    @Field(() => [PropertyListingType], {nullable:true})
    notIn?: Array<keyof typeof PropertyListingType>;

    @Field(() => NestedEnumPropertyListingTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPropertyListingTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPropertyListingTypeFilter, {nullable:true})
    _min?: NestedEnumPropertyListingTypeFilter;

    @Field(() => NestedEnumPropertyListingTypeFilter, {nullable:true})
    _max?: NestedEnumPropertyListingTypeFilter;
}
