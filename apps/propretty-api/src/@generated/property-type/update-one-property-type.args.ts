import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyTypeUpdateInput } from './property-type-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PropertyTypeWhereUniqueInput } from './property-type-where-unique.input';

@ArgsType()
export class UpdateOnePropertyTypeArgs {

    @Field(() => PropertyTypeUpdateInput, {nullable:false})
    @Type(() => PropertyTypeUpdateInput)
    data!: PropertyTypeUpdateInput;

    @Field(() => PropertyTypeWhereUniqueInput, {nullable:false})
    @Type(() => PropertyTypeWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyTypeWhereUniqueInput, 'id' | 'name'>;
}
