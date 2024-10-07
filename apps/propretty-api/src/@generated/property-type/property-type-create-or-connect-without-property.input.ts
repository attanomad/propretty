import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyTypeWhereUniqueInput } from './property-type-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyTypeCreateWithoutPropertyInput } from './property-type-create-without-property.input';

@InputType()
export class PropertyTypeCreateOrConnectWithoutPropertyInput {

    @Field(() => PropertyTypeWhereUniqueInput, {nullable:false})
    @Type(() => PropertyTypeWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyTypeWhereUniqueInput, 'id' | 'name'>;

    @Field(() => PropertyTypeCreateWithoutPropertyInput, {nullable:false})
    @Type(() => PropertyTypeCreateWithoutPropertyInput)
    create!: PropertyTypeCreateWithoutPropertyInput;
}
