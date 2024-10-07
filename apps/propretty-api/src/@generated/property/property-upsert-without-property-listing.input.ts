import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyUpdateWithoutPropertyListingInput } from './property-update-without-property-listing.input';
import { Type } from 'class-transformer';
import { PropertyCreateWithoutPropertyListingInput } from './property-create-without-property-listing.input';
import { PropertyWhereInput } from './property-where.input';

@InputType()
export class PropertyUpsertWithoutPropertyListingInput {

    @Field(() => PropertyUpdateWithoutPropertyListingInput, {nullable:false})
    @Type(() => PropertyUpdateWithoutPropertyListingInput)
    update!: PropertyUpdateWithoutPropertyListingInput;

    @Field(() => PropertyCreateWithoutPropertyListingInput, {nullable:false})
    @Type(() => PropertyCreateWithoutPropertyListingInput)
    create!: PropertyCreateWithoutPropertyListingInput;

    @Field(() => PropertyWhereInput, {nullable:true})
    @Type(() => PropertyWhereInput)
    where?: PropertyWhereInput;
}
