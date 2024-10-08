import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyUncheckedCreateNestedManyWithoutTypeInput } from '../property/property-unchecked-create-nested-many-without-type.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class PropertyTypeUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @HideField()
    Property?: PropertyUncheckedCreateNestedManyWithoutTypeInput;
}
