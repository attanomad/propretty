import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyAmenityCreateManyInput } from './property-amenity-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPropertyAmenityArgs {

    @Field(() => [PropertyAmenityCreateManyInput], {nullable:false})
    @Type(() => PropertyAmenityCreateManyInput)
    data!: Array<PropertyAmenityCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
