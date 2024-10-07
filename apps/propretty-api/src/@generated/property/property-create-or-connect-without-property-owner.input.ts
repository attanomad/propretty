import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyCreateWithoutPropertyOwnerInput } from './property-create-without-property-owner.input';

@InputType()
export class PropertyCreateOrConnectWithoutPropertyOwnerInput {

    @Field(() => PropertyWhereUniqueInput, {nullable:false})
    @Type(() => PropertyWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>;

    @Field(() => PropertyCreateWithoutPropertyOwnerInput, {nullable:false})
    @Type(() => PropertyCreateWithoutPropertyOwnerInput)
    create!: PropertyCreateWithoutPropertyOwnerInput;
}
