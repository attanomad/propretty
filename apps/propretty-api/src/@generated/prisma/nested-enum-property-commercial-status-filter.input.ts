import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCommercialStatus } from './property-commercial-status.enum';

@InputType()
export class NestedEnumPropertyCommercialStatusFilter {

    @Field(() => PropertyCommercialStatus, {nullable:true})
    equals?: keyof typeof PropertyCommercialStatus;

    @Field(() => [PropertyCommercialStatus], {nullable:true})
    in?: Array<keyof typeof PropertyCommercialStatus>;

    @Field(() => [PropertyCommercialStatus], {nullable:true})
    notIn?: Array<keyof typeof PropertyCommercialStatus>;

    @Field(() => NestedEnumPropertyCommercialStatusFilter, {nullable:true})
    not?: NestedEnumPropertyCommercialStatusFilter;
}
