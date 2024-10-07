import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyAmenityCreateInput } from './property-amenity-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePropertyAmenityArgs {

    @Field(() => PropertyAmenityCreateInput, {nullable:false})
    @Type(() => PropertyAmenityCreateInput)
    data!: PropertyAmenityCreateInput;
}
