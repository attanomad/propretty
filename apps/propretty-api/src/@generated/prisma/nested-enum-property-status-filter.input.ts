import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyStatus } from './property-status.enum';

@InputType()
export class NestedEnumPropertyStatusFilter {

    @Field(() => PropertyStatus, {nullable:true})
    equals?: keyof typeof PropertyStatus;

    @Field(() => [PropertyStatus], {nullable:true})
    in?: Array<keyof typeof PropertyStatus>;

    @Field(() => [PropertyStatus], {nullable:true})
    notIn?: Array<keyof typeof PropertyStatus>;

    @Field(() => NestedEnumPropertyStatusFilter, {nullable:true})
    not?: NestedEnumPropertyStatusFilter;
}
