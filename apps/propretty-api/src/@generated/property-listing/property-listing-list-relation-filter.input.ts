import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyListingWhereInput } from './property-listing-where.input';

@InputType()
export class PropertyListingListRelationFilter {

    @Field(() => PropertyListingWhereInput, {nullable:true})
    every?: PropertyListingWhereInput;

    @Field(() => PropertyListingWhereInput, {nullable:true})
    some?: PropertyListingWhereInput;

    @Field(() => PropertyListingWhereInput, {nullable:true})
    none?: PropertyListingWhereInput;
}
