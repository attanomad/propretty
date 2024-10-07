import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyAmenityWhereInput } from './property-amenity-where.input';

@InputType()
export class PropertyAmenityListRelationFilter {

    @Field(() => PropertyAmenityWhereInput, {nullable:true})
    every?: PropertyAmenityWhereInput;

    @Field(() => PropertyAmenityWhereInput, {nullable:true})
    some?: PropertyAmenityWhereInput;

    @Field(() => PropertyAmenityWhereInput, {nullable:true})
    none?: PropertyAmenityWhereInput;
}
