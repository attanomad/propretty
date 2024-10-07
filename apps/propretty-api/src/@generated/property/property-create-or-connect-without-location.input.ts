import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyCreateWithoutLocationInput } from './property-create-without-location.input';

@InputType()
export class PropertyCreateOrConnectWithoutLocationInput {

    @Field(() => PropertyWhereUniqueInput, {nullable:false})
    @Type(() => PropertyWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>;

    @Field(() => PropertyCreateWithoutLocationInput, {nullable:false})
    @Type(() => PropertyCreateWithoutLocationInput)
    create!: PropertyCreateWithoutLocationInput;
}
