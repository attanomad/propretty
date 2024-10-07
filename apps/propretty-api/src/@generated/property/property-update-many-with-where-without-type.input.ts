import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyScalarWhereInput } from './property-scalar-where.input';
import { Type } from 'class-transformer';
import { PropertyUpdateManyMutationInput } from './property-update-many-mutation.input';

@InputType()
export class PropertyUpdateManyWithWhereWithoutTypeInput {

    @Field(() => PropertyScalarWhereInput, {nullable:false})
    @Type(() => PropertyScalarWhereInput)
    where!: PropertyScalarWhereInput;

    @Field(() => PropertyUpdateManyMutationInput, {nullable:false})
    @Type(() => PropertyUpdateManyMutationInput)
    data!: PropertyUpdateManyMutationInput;
}
