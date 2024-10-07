import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyTypeWhereInput } from './property-type-where.input';
import { Type } from 'class-transformer';
import { PropertyTypeUpdateWithoutPropertyInput } from './property-type-update-without-property.input';

@InputType()
export class PropertyTypeUpdateToOneWithWhereWithoutPropertyInput {

    @Field(() => PropertyTypeWhereInput, {nullable:true})
    @Type(() => PropertyTypeWhereInput)
    where?: PropertyTypeWhereInput;

    @Field(() => PropertyTypeUpdateWithoutPropertyInput, {nullable:false})
    @Type(() => PropertyTypeUpdateWithoutPropertyInput)
    data!: PropertyTypeUpdateWithoutPropertyInput;
}
