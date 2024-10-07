import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyTypeWhereUniqueInput } from './property-type-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePropertyTypeOrThrowArgs {

    @Field(() => PropertyTypeWhereUniqueInput, {nullable:false})
    @Type(() => PropertyTypeWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyTypeWhereUniqueInput, 'id' | 'name'>;
}
