import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyWhereInput } from './property-where.input';
import { Type } from 'class-transformer';
import { PropertyUpdateWithoutPropertyListingInput } from './property-update-without-property-listing.input';

@InputType()
export class PropertyUpdateToOneWithWhereWithoutPropertyListingInput {

    @Field(() => PropertyWhereInput, {nullable:true})
    @Type(() => PropertyWhereInput)
    where?: PropertyWhereInput;

    @Field(() => PropertyUpdateWithoutPropertyListingInput, {nullable:false})
    @Type(() => PropertyUpdateWithoutPropertyListingInput)
    data!: PropertyUpdateWithoutPropertyListingInput;
}
