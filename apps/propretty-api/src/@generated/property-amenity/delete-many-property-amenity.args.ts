import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyAmenityWhereInput } from './property-amenity-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPropertyAmenityArgs {

    @Field(() => PropertyAmenityWhereInput, {nullable:true})
    @Type(() => PropertyAmenityWhereInput)
    where?: PropertyAmenityWhereInput;
}
