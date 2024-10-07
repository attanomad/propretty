import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyTypeUpdateWithoutPropertyInput } from './property-type-update-without-property.input';
import { Type } from 'class-transformer';
import { PropertyTypeCreateWithoutPropertyInput } from './property-type-create-without-property.input';
import { PropertyTypeWhereInput } from './property-type-where.input';

@InputType()
export class PropertyTypeUpsertWithoutPropertyInput {

    @Field(() => PropertyTypeUpdateWithoutPropertyInput, {nullable:false})
    @Type(() => PropertyTypeUpdateWithoutPropertyInput)
    update!: PropertyTypeUpdateWithoutPropertyInput;

    @Field(() => PropertyTypeCreateWithoutPropertyInput, {nullable:false})
    @Type(() => PropertyTypeCreateWithoutPropertyInput)
    create!: PropertyTypeCreateWithoutPropertyInput;

    @Field(() => PropertyTypeWhereInput, {nullable:true})
    @Type(() => PropertyTypeWhereInput)
    where?: PropertyTypeWhereInput;
}
