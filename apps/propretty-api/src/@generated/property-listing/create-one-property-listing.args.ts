import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyListingCreateInput } from './property-listing-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePropertyListingArgs {

    @Field(() => PropertyListingCreateInput, {nullable:false})
    @Type(() => PropertyListingCreateInput)
    data!: PropertyListingCreateInput;
}
