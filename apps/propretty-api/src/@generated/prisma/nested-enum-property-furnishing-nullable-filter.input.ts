import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyFurnishing } from './property-furnishing.enum';

@InputType()
export class NestedEnumPropertyFurnishingNullableFilter {

    @Field(() => PropertyFurnishing, {nullable:true})
    equals?: keyof typeof PropertyFurnishing;

    @Field(() => [PropertyFurnishing], {nullable:true})
    in?: Array<keyof typeof PropertyFurnishing>;

    @Field(() => [PropertyFurnishing], {nullable:true})
    notIn?: Array<keyof typeof PropertyFurnishing>;

    @Field(() => NestedEnumPropertyFurnishingNullableFilter, {nullable:true})
    not?: NestedEnumPropertyFurnishingNullableFilter;
}
