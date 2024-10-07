import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyFurnishing } from './property-furnishing.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumPropertyFurnishingNullableFilter } from './nested-enum-property-furnishing-nullable-filter.input';

@InputType()
export class NestedEnumPropertyFurnishingNullableWithAggregatesFilter {

    @Field(() => PropertyFurnishing, {nullable:true})
    equals?: keyof typeof PropertyFurnishing;

    @Field(() => [PropertyFurnishing], {nullable:true})
    in?: Array<keyof typeof PropertyFurnishing>;

    @Field(() => [PropertyFurnishing], {nullable:true})
    notIn?: Array<keyof typeof PropertyFurnishing>;

    @Field(() => NestedEnumPropertyFurnishingNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPropertyFurnishingNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumPropertyFurnishingNullableFilter, {nullable:true})
    _min?: NestedEnumPropertyFurnishingNullableFilter;

    @Field(() => NestedEnumPropertyFurnishingNullableFilter, {nullable:true})
    _max?: NestedEnumPropertyFurnishingNullableFilter;
}
