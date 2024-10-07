import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCommercialStatus } from './property-commercial-status.enum';
import { NestedEnumPropertyCommercialStatusWithAggregatesFilter } from './nested-enum-property-commercial-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPropertyCommercialStatusFilter } from './nested-enum-property-commercial-status-filter.input';

@InputType()
export class EnumPropertyCommercialStatusWithAggregatesFilter {

    @Field(() => PropertyCommercialStatus, {nullable:true})
    equals?: keyof typeof PropertyCommercialStatus;

    @Field(() => [PropertyCommercialStatus], {nullable:true})
    in?: Array<keyof typeof PropertyCommercialStatus>;

    @Field(() => [PropertyCommercialStatus], {nullable:true})
    notIn?: Array<keyof typeof PropertyCommercialStatus>;

    @Field(() => NestedEnumPropertyCommercialStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPropertyCommercialStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPropertyCommercialStatusFilter, {nullable:true})
    _min?: NestedEnumPropertyCommercialStatusFilter;

    @Field(() => NestedEnumPropertyCommercialStatusFilter, {nullable:true})
    _max?: NestedEnumPropertyCommercialStatusFilter;
}
