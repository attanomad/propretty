import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCreateNestedManyWithoutPropertyOwnerInput } from '../property/property-create-nested-many-without-property-owner.input';
import { Type } from 'class-transformer';

@InputType()
export class PropertyOwnerCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:true})
    profilePictureUrl?: string;

    @Field(() => Date, {nullable:true})
    dob?: Date | string;

    @Field(() => PropertyCreateNestedManyWithoutPropertyOwnerInput, {nullable:true})
    @Type(() => PropertyCreateNestedManyWithoutPropertyOwnerInput)
    properties?: PropertyCreateNestedManyWithoutPropertyOwnerInput;
}
