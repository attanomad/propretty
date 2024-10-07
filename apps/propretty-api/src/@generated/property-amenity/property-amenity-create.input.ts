import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { PropertyCreateNestedManyWithoutAmenitiesInput } from '../property/property-create-nested-many-without-amenities.input';

@InputType()
export class PropertyAmenityCreateInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    properties?: PropertyCreateNestedManyWithoutAmenitiesInput;
}
