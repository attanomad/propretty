import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyUpdateWithoutPropertyOwnerInput } from './property-update-without-property-owner.input';
import { PropertyCreateWithoutPropertyOwnerInput } from './property-create-without-property-owner.input';

@InputType()
export class PropertyUpsertWithWhereUniqueWithoutPropertyOwnerInput {

    @Field(() => PropertyWhereUniqueInput, {nullable:false})
    @Type(() => PropertyWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>;

    @Field(() => PropertyUpdateWithoutPropertyOwnerInput, {nullable:false})
    @Type(() => PropertyUpdateWithoutPropertyOwnerInput)
    update!: PropertyUpdateWithoutPropertyOwnerInput;

    @Field(() => PropertyCreateWithoutPropertyOwnerInput, {nullable:false})
    @Type(() => PropertyCreateWithoutPropertyOwnerInput)
    create!: PropertyCreateWithoutPropertyOwnerInput;
}
