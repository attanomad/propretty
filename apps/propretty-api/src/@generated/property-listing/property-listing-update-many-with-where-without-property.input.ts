import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyListingScalarWhereInput } from './property-listing-scalar-where.input';
import { Type } from 'class-transformer';
import { PropertyListingUpdateManyMutationInput } from './property-listing-update-many-mutation.input';

@InputType()
export class PropertyListingUpdateManyWithWhereWithoutPropertyInput {

    @Field(() => PropertyListingScalarWhereInput, {nullable:false})
    @Type(() => PropertyListingScalarWhereInput)
    where!: PropertyListingScalarWhereInput;

    @Field(() => PropertyListingUpdateManyMutationInput, {nullable:false})
    @Type(() => PropertyListingUpdateManyMutationInput)
    data!: PropertyListingUpdateManyMutationInput;
}
