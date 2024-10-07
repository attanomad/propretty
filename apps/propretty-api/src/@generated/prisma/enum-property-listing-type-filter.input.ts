import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyListingType } from './property-listing-type.enum';
import { NestedEnumPropertyListingTypeFilter } from './nested-enum-property-listing-type-filter.input';

@InputType()
export class EnumPropertyListingTypeFilter {

    @Field(() => PropertyListingType, {nullable:true})
    equals?: keyof typeof PropertyListingType;

    @Field(() => [PropertyListingType], {nullable:true})
    in?: Array<keyof typeof PropertyListingType>;

    @Field(() => [PropertyListingType], {nullable:true})
    notIn?: Array<keyof typeof PropertyListingType>;

    @Field(() => NestedEnumPropertyListingTypeFilter, {nullable:true})
    not?: NestedEnumPropertyListingTypeFilter;
}
