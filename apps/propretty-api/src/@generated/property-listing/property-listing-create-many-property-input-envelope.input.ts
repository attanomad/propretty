import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyListingCreateManyPropertyInput } from './property-listing-create-many-property.input';
import { Type } from 'class-transformer';

@InputType()
export class PropertyListingCreateManyPropertyInputEnvelope {

    @Field(() => [PropertyListingCreateManyPropertyInput], {nullable:false})
    @Type(() => PropertyListingCreateManyPropertyInput)
    data!: Array<PropertyListingCreateManyPropertyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
