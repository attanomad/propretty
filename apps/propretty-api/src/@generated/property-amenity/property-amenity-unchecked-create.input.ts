import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { PropertyUncheckedCreateNestedManyWithoutAmenitiesInput } from '../property/property-unchecked-create-nested-many-without-amenities.input';

@InputType()
export class PropertyAmenityUncheckedCreateInput {

    @Field(() => String, {nullable:true})
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
    properties?: PropertyUncheckedCreateNestedManyWithoutAmenitiesInput;
}
