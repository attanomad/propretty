import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyTypeWhereUniqueInput } from './property-type-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyTypeCreateInput } from './property-type-create.input';
import { PropertyTypeUpdateInput } from './property-type-update.input';

@ArgsType()
export class UpsertOnePropertyTypeArgs {

    @Field(() => PropertyTypeWhereUniqueInput, {nullable:false})
    @Type(() => PropertyTypeWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyTypeWhereUniqueInput, 'id' | 'name'>;

    @Field(() => PropertyTypeCreateInput, {nullable:false})
    @Type(() => PropertyTypeCreateInput)
    create!: PropertyTypeCreateInput;

    @Field(() => PropertyTypeUpdateInput, {nullable:false})
    @Type(() => PropertyTypeUpdateInput)
    update!: PropertyTypeUpdateInput;
}
