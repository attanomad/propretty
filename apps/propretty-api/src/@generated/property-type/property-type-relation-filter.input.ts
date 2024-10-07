import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyTypeWhereInput } from './property-type-where.input';

@InputType()
export class PropertyTypeRelationFilter {

    @Field(() => PropertyTypeWhereInput, {nullable:true})
    is?: PropertyTypeWhereInput;

    @Field(() => PropertyTypeWhereInput, {nullable:true})
    isNot?: PropertyTypeWhereInput;
}
