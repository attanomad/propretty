import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyStatus } from './property-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPropertyStatusFilter } from './nested-enum-property-status-filter.input';

@InputType()
export class NestedEnumPropertyStatusWithAggregatesFilter {

    @Field(() => PropertyStatus, {nullable:true})
    equals?: keyof typeof PropertyStatus;

    @Field(() => [PropertyStatus], {nullable:true})
    in?: Array<keyof typeof PropertyStatus>;

    @Field(() => [PropertyStatus], {nullable:true})
    notIn?: Array<keyof typeof PropertyStatus>;

    @Field(() => NestedEnumPropertyStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPropertyStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPropertyStatusFilter, {nullable:true})
    _min?: NestedEnumPropertyStatusFilter;

    @Field(() => NestedEnumPropertyStatusFilter, {nullable:true})
    _max?: NestedEnumPropertyStatusFilter;
}
