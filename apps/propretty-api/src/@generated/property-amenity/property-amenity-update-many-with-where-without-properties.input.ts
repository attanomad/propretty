import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyAmenityScalarWhereInput } from './property-amenity-scalar-where.input';
import { Type } from 'class-transformer';
import { PropertyAmenityUpdateManyMutationInput } from './property-amenity-update-many-mutation.input';

@InputType()
export class PropertyAmenityUpdateManyWithWhereWithoutPropertiesInput {

    @Field(() => PropertyAmenityScalarWhereInput, {nullable:false})
    @Type(() => PropertyAmenityScalarWhereInput)
    where!: PropertyAmenityScalarWhereInput;

    @Field(() => PropertyAmenityUpdateManyMutationInput, {nullable:false})
    @Type(() => PropertyAmenityUpdateManyMutationInput)
    data!: PropertyAmenityUpdateManyMutationInput;
}
