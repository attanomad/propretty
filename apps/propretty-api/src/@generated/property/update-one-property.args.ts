import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyUpdateInput } from './property-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PropertyWhereUniqueInput } from './property-where-unique.input';

@ArgsType()
export class UpdateOnePropertyArgs {

    @Field(() => PropertyUpdateInput, {nullable:false})
    @Type(() => PropertyUpdateInput)
    data!: PropertyUpdateInput;

    @Field(() => PropertyWhereUniqueInput, {nullable:false})
    @Type(() => PropertyWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyWhereUniqueInput, 'id' | 'uniqueCode'>;
}
