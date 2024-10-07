import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyAmenityUpdateManyMutationInput } from './property-amenity-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PropertyAmenityWhereInput } from './property-amenity-where.input';

@ArgsType()
export class UpdateManyPropertyAmenityArgs {

    @Field(() => PropertyAmenityUpdateManyMutationInput, {nullable:false})
    @Type(() => PropertyAmenityUpdateManyMutationInput)
    data!: PropertyAmenityUpdateManyMutationInput;

    @Field(() => PropertyAmenityWhereInput, {nullable:true})
    @Type(() => PropertyAmenityWhereInput)
    where?: PropertyAmenityWhereInput;
}
