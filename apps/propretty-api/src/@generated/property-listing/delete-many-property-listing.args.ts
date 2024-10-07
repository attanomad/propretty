import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyListingWhereInput } from './property-listing-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPropertyListingArgs {

    @Field(() => PropertyListingWhereInput, {nullable:true})
    @Type(() => PropertyListingWhereInput)
    where?: PropertyListingWhereInput;
}
