import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyCreateInput } from './property-create.input';
import { PropertyUpdateInput } from './property-update.input';

@ArgsType()
export class UpsertOnePropertyArgs {

    @Field(() => PropertyWhereUniqueInput, {nullable:false})
    @Type(() => PropertyWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>;

    @Field(() => PropertyCreateInput, {nullable:false})
    @Type(() => PropertyCreateInput)
    create!: PropertyCreateInput;

    @Field(() => PropertyUpdateInput, {nullable:false})
    @Type(() => PropertyUpdateInput)
    update!: PropertyUpdateInput;
}
