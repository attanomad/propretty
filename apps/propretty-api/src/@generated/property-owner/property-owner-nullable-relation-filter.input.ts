import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyOwnerWhereInput } from './property-owner-where.input';

@InputType()
export class PropertyOwnerNullableRelationFilter {

    @Field(() => PropertyOwnerWhereInput, {nullable:true})
    is?: PropertyOwnerWhereInput;

    @Field(() => PropertyOwnerWhereInput, {nullable:true})
    isNot?: PropertyOwnerWhereInput;
}
