import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyListingUpdateManyMutationInput } from './property-listing-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PropertyListingWhereInput } from './property-listing-where.input';

@ArgsType()
export class UpdateManyPropertyListingArgs {

    @Field(() => PropertyListingUpdateManyMutationInput, {nullable:false})
    @Type(() => PropertyListingUpdateManyMutationInput)
    data!: PropertyListingUpdateManyMutationInput;

    @Field(() => PropertyListingWhereInput, {nullable:true})
    @Type(() => PropertyListingWhereInput)
    where?: PropertyListingWhereInput;
}
