import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyListingCreateManyInput } from './property-listing-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPropertyListingArgs {

    @Field(() => [PropertyListingCreateManyInput], {nullable:false})
    @Type(() => PropertyListingCreateManyInput)
    data!: Array<PropertyListingCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
