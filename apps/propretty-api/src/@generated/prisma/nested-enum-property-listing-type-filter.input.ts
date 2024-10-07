import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyListingType } from './property-listing-type.enum';

@InputType()
export class NestedEnumPropertyListingTypeFilter {

    @Field(() => PropertyListingType, {nullable:true})
    equals?: keyof typeof PropertyListingType;

    @Field(() => [PropertyListingType], {nullable:true})
    in?: Array<keyof typeof PropertyListingType>;

    @Field(() => [PropertyListingType], {nullable:true})
    notIn?: Array<keyof typeof PropertyListingType>;

    @Field(() => NestedEnumPropertyListingTypeFilter, {nullable:true})
    not?: NestedEnumPropertyListingTypeFilter;
}
