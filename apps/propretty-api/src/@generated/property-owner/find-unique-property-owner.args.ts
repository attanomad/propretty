import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PropertyOwnerWhereUniqueInput } from './property-owner-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePropertyOwnerArgs {

    @Field(() => PropertyOwnerWhereUniqueInput, {nullable:false})
    @Type(() => PropertyOwnerWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyOwnerWhereUniqueInput, 'id'>;
}
