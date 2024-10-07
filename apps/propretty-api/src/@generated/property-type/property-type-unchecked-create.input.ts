import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { PropertyUncheckedCreateNestedManyWithoutTypeInput } from '../property/property-unchecked-create-nested-many-without-type.input';

@InputType()
export class PropertyTypeUncheckedCreateInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @HideField()
    Property?: PropertyUncheckedCreateNestedManyWithoutTypeInput;
}
