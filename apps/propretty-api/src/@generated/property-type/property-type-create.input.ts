import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { PropertyCreateNestedManyWithoutTypeInput } from '../property/property-create-nested-many-without-type.input';

@InputType()
export class PropertyTypeCreateInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @HideField()
    Property?: PropertyCreateNestedManyWithoutTypeInput;
}
